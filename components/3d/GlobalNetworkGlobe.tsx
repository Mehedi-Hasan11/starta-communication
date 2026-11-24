"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function checkWebGLSupport(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

// Helper: Convert Lat/Lng into 3D Cartesian Vector on sphere of radius R
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
}

// Point in polygon test for geographic land boundaries
function isPointInPolygon(point: [number, number], polygon: [number, number][]): boolean {
  const [lat, lng] = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][1], yi = polygon[i][0];
    const xj = polygon[j][1], yj = polygon[j][0];
    const intersect =
      yi > lat !== yj > lat &&
      lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

// Realistic continental boundary polygons
const CONTINENT_POLYGONS: [number, number][][] = [
  // South America (LATAM Focus Corridor)
  [
    [12, -72], [11, -63], [7, -58], [4, -51], [-1, -48], [-3, -40], [-6, -35],
    [-13, -39], [-18, -39], [-23, -42], [-29, -49], [-34, -53], [-38, -57],
    [-42, -64], [-47, -66], [-53, -68], [-55, -67], [-54, -72], [-49, -75],
    [-42, -74], [-33, -72], [-22, -70], [-17, -72], [-14, -76], [-9, -79],
    [-4, -81], [1, -80], [7, -77], [10, -75], [12, -72]
  ],
  // North America & Central America
  [
    [8, -77], [9, -83], [14, -88], [16, -95], [19, -96], [22, -97], [26, -97],
    [30, -84], [25, -80], [32, -80], [37, -76], [42, -70], [45, -64], [52, -56],
    [60, -64], [68, -63], [70, -85], [70, -110], [70, -135], [71, -156],
    [65, -168], [58, -158], [54, -164], [59, -137], [48, -125], [38, -123],
    [32, -117], [23, -110], [16, -95], [14, -92], [9, -83], [8, -77]
  ],
  // Europe
  [
    [36, -6], [43, -9], [48, -4], [54, 8], [58, 5], [62, 5], [71, 28],
    [68, 38], [60, 30], [52, 24], [46, 30], [42, 28], [40, 23], [37, 15],
    [36, -5], [36, -6]
  ],
  // Scandinavia
  [
    [58, 5], [64, 10], [70, 20], [71, 28], [65, 25], [60, 18], [56, 12], [58, 5]
  ],
  // Africa
  [
    [37, 11], [32, -5], [28, -13], [21, -17], [15, -17], [11, -15], [5, -1],
    [4, 9], [2, 10], [-5, 12], [-15, 12], [-22, 14], [-28, 16], [-34, 18],
    [-34, 26], [-30, 31], [-25, 33], [-20, 36], [-11, 40], [-4, 40], [5, 48],
    [11, 51], [12, 44], [16, 41], [22, 38], [31, 32], [37, 11]
  ],
  // Asia (Eurasia & APAC Corridor)
  [
    [42, 28], [52, 24], [60, 30], [71, 28], [70, 42], [68, 74], [72, 80],
    [77, 105], [72, 130], [70, 160], [65, 170], [60, 162], [53, 142], [43, 132],
    [37, 126], [30, 122], [22, 114], [21, 108], [10, 104], [1, 104], [8, 98],
    [22, 89], [13, 80], [8, 77], [18, 73], [25, 62], [26, 56], [13, 44],
    [28, 34], [31, 35], [37, 36], [41, 29], [42, 28]
  ],
  // Australia
  [
    [-11, 142], [-14, 136], [-12, 131], [-15, 124], [-20, 119], [-22, 114],
    [-32, 116], [-35, 117], [-35, 137], [-38, 144], [-38, 150], [-28, 153],
    [-18, 146], [-11, 142]
  ],
  // Japan Archipelagos
  [
    [31, 131], [34, 136], [40, 140], [45, 142], [43, 145], [36, 140], [33, 133], [31, 131]
  ],
  // UK & Ireland
  [
    [50, -5], [54, -3], [58, -3], [58, -6], [55, -6], [51, -10], [51, -5]
  ],
  // Maritime Southeast Asia (Singapore / Malaysia / Indonesia / Philippines Hubs)
  [
    [-6, 106], [-8, 115], [-8, 123], [-3, 128], [2, 128], [7, 125],
    [14, 121], [18, 121], [10, 123], [4, 118], [0, 117], [-2, 111], [-6, 106]
  ],
];

// Key Strategic Telecommunications Hubs (Lat, Lng)
interface TelecomHub {
  name: string;
  lat: number;
  lng: number;
  code: string;
}

const STRATEGIC_HUBS: TelecomHub[] = [
  // LATAM Corridor Hubs
  { name: "São Paulo", lat: -23.55, lng: -46.63, code: "GRU" },
  { name: "Mexico City", lat: 19.43, lng: -99.13, code: "MEX" },
  { name: "Bogotá", lat: 4.71, lng: -74.07, code: "BOG" },
  { name: "Santiago", lat: -33.45, lng: -70.67, code: "SCL" },
  { name: "Buenos Aires", lat: -34.60, lng: -58.38, code: "EZE" },
  // North America & Atlantic Cross-Connects
  { name: "Miami", lat: 25.76, lng: -80.19, code: "MIA" },
  { name: "New York", lat: 40.71, lng: -74.00, code: "NYC" },
  { name: "Los Angeles", lat: 34.05, lng: -118.24, code: "LAX" },
  // Europe
  { name: "London", lat: 51.51, lng: -0.13, code: "LON" },
  { name: "Frankfurt", lat: 50.11, lng: 8.68, code: "FRA" },
  // APAC Corridor Hubs
  { name: "Singapore", lat: 1.35, lng: 103.82, code: "SIN" },
  { name: "Hong Kong", lat: 22.32, lng: 114.17, code: "HKG" },
  { name: "Tokyo", lat: 35.68, lng: 139.77, code: "TYO" },
  { name: "Sydney", lat: -33.87, lng: 151.21, code: "SYD" },
];

// Strategic Optical Carrier Routes (Connections between Hubs)
const CARRIER_ROUTES: [number, number][] = [
  [5, 0],  // Miami ↔ São Paulo (Major Americas Subsea Cable)
  [5, 1],  // Miami ↔ Mexico City
  [5, 2],  // Miami ↔ Bogotá
  [0, 3],  // São Paulo ↔ Santiago
  [0, 4],  // São Paulo ↔ Buenos Aires
  [5, 6],  // Miami ↔ New York
  [6, 8],  // New York ↔ London (Transatlantic Subsea Cable)
  [8, 9],  // London ↔ Frankfurt (European Core)
  [9, 10], // Frankfurt ↔ Singapore (Eurasian Optical Transit)
  [10, 11], // Singapore ↔ Hong Kong (APAC Core Backbone)
  [11, 12], // Hong Kong ↔ Tokyo
  [7, 12],  // Los Angeles ↔ Tokyo (Transpacific Submarine Fiber)
  [10, 13], // Singapore ↔ Sydney (Oceania Subsea Route)
  [5, 7],   // Miami ↔ Los Angeles
];

// Helper: Generates a soft glowing circular canvas texture for point lights
function createCircularParticleTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1.0)");
    gradient.addColorStop(0.25, "rgba(0, 240, 255, 0.85)");
    gradient.addColorStop(0.65, "rgba(0, 98, 255, 0.35)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = false;
  texture.minFilter = THREE.LinearFilter;
  return texture;
}

export function GlobalNetworkGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL] = useState(checkWebGLSupport);

  useEffect(() => {
    if (!hasWebGL) return;
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 15, 295);

    // 2. High-Precision Renderer
    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      container.appendChild(renderer.domElement);
    } catch {
      return;
    }

    // 3. Central Anchor Group
    const globeGroup = new THREE.Group();
    // Initial tilt to show the dynamic LATAM ↔ APAC corridor
    globeGroup.rotation.x = 0.28;
    globeGroup.rotation.y = 1.35;
    scene.add(globeGroup);

    const GLOBE_RADIUS = 72;

    // 4. Photorealistic Inner Core Sphere (Dark Midnight Obsidian)
    const coreGeo = new THREE.SphereGeometry(GLOBE_RADIUS - 0.4, 64, 64);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x050c18,
      roughness: 0.85,
      metalness: 0.25,
      transparent: true,
      opacity: 0.96,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    globeGroup.add(coreMesh);

    // 5. Cinematic Atmospheric Glow (Inverted Custom Fresnel Rim)
    const atmoGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 1.055, 48, 48);
    const atmoMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vec3 viewDir = normalize(-vPosition);
          float fresnel = 1.0 - max(0.0, dot(vNormal, viewDir));
          float intensity = pow(fresnel, 2.8) * 0.95;
          vec3 cyan = vec3(0.0, 0.94, 1.0);
          vec3 blue = vec3(0.0, 0.38, 1.0);
          vec3 color = mix(blue, cyan, fresnel);
          gl_FragColor = vec4(color, intensity);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      depthWrite: false,
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    scene.add(atmoMesh);

    // 6. Subtle Technical Graticule (Thin Latitude & Longitude Coordinate Lines)
    const graticuleGroup = new THREE.Group();
    const graticuleMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.05,
    });

    // Latitude rings
    [-60, -30, 0, 30, 60].forEach((lat) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const ringRadius = GLOBE_RADIUS * Math.sin(phi);
      const ringY = GLOBE_RADIUS * Math.cos(phi);

      const circlePoints: THREE.Vector3[] = [];
      const segments = 64;
      for (let s = 0; s <= segments; s++) {
        const theta = (s / segments) * Math.PI * 2;
        circlePoints.push(new THREE.Vector3(ringRadius * Math.cos(theta), ringY, ringRadius * Math.sin(theta)));
      }
      const ringGeo = new THREE.BufferGeometry().setFromPoints(circlePoints);
      graticuleGroup.add(new THREE.Line(ringGeo, graticuleMat));
    });
    globeGroup.add(graticuleGroup);

    // 7. Realistic Earth Dot-Matrix Point Cloud (Accurate Continents)
    const particleTexture = createCircularParticleTexture();
    const positions: number[] = [];
    const colors: number[] = [];
    const sizes: number[] = [];

    const cyanColor = new THREE.Color(0x00f0ff);
    const blueColor = new THREE.Color(0x0062ff);
    const oceanColor = new THREE.Color(0x0a192f);

    // Sample high-density equirectangular grid
    for (let lat = -76; lat <= 76; lat += 2.2) {
      for (let lng = -180; lng < 180; lng += 2.6) {
        let isLand = false;
        for (const poly of CONTINENT_POLYGONS) {
          if (isPointInPolygon([lat, lng], poly)) {
            isLand = true;
            break;
          }
        }

        const vec = latLngToVector3(lat, lng, GLOBE_RADIUS + 0.3);

        if (isLand) {
          // Continental Land Particle (Crisp, High-Density LED Point)
          positions.push(vec.x, vec.y, vec.z);

          // Subtle gradient: slightly brighter cyan on LATAM & APAC focus bands
          const isFocusRegion = (lng >= -120 && lng <= -30) || (lng >= 60 && lng <= 160);
          const col = isFocusRegion ? cyanColor : (Math.random() > 0.4 ? cyanColor : blueColor);

          colors.push(col.r, col.g, col.b);
          sizes.push(isFocusRegion ? 2.4 : 1.9);
        } else if (Math.random() < 0.12) {
          // Sparse Oceanic Telemetry Grid Particle (Subtle background depth)
          positions.push(vec.x, vec.y, vec.z);
          colors.push(oceanColor.r, oceanColor.g, oceanColor.b);
          sizes.push(0.9);
        }
      }
    }

    const landGeo = new THREE.BufferGeometry();
    landGeo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    landGeo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const landMat = new THREE.PointsMaterial({
      size: 2.1,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const landPoints = new THREE.Points(landGeo, landMat);
    globeGroup.add(landPoints);

    // 8. Strategic Carrier Hub Nodes & Pulsating Ripple Rings
    const hubPositions: THREE.Vector3[] = [];
    const hubMeshes: THREE.Mesh[] = [];
    const rippleRings: { mesh: THREE.Mesh; scale: number; speed: number }[] = [];

    const hubDotGeo = new THREE.SphereGeometry(1.2, 16, 16);
    const hubDotMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95,
    });

    const ringGeo = new THREE.RingGeometry(1.4, 2.0, 32);

    STRATEGIC_HUBS.forEach((hub, idx) => {
      const pos = latLngToVector3(hub.lat, hub.lng, GLOBE_RADIUS + 0.6);
      hubPositions.push(pos);

      // Solid central beacon dot
      const dot = new THREE.Mesh(hubDotGeo, hubDotMat);
      dot.position.copy(pos);
      globeGroup.add(dot);
      hubMeshes.push(dot);

      // Tangent pulsating ripple ring
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pos);
      ring.lookAt(pos.clone().multiplyScalar(2));
      globeGroup.add(ring);

      rippleRings.push({
        mesh: ring,
        scale: 1 + (idx % 3) * 0.4,
        speed: 0.015 + (idx % 4) * 0.003,
      });
    });

    // 9. Parabolic Geodesic Optical Flight Arcs
    const routeCurves: THREE.CatmullRomCurve3[] = [];
    const arcLinesGroup = new THREE.Group();

    CARRIER_ROUTES.forEach(([startIndex, endIndex]) => {
      const p1 = hubPositions[startIndex];
      const p2 = hubPositions[endIndex];

      if (!p1 || !p2) return;

      const distance = p1.distanceTo(p2);
      const mid = p1.clone().add(p2).multiplyScalar(0.5);

      // Calculate smooth parabolic altitude elevation based on distance
      const altitude = GLOBE_RADIUS + Math.min(distance * 0.28, 26);
      mid.normalize().multiplyScalar(altitude);

      // Smooth 3-point Catmull-Rom curve for natural telecom optical trajectory
      const curve = new THREE.CatmullRomCurve3([p1, mid, p2]);
      routeCurves.push(curve);

      const curvePoints = curve.getPoints(48);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);

      // Vertex color gradient along the curve
      const arcColors: number[] = [];
      const numPts = curvePoints.length;
      for (let i = 0; i < numPts; i++) {
        const ratio = i / (numPts - 1);
        const col = blueColor.clone().lerp(cyanColor, Math.sin(ratio * Math.PI));
        arcColors.push(col.r, col.g, col.b);
      }
      arcGeo.setAttribute("color", new THREE.Float32BufferAttribute(arcColors, 3));

      const arcMat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
      });

      const line = new THREE.Line(arcGeo, arcMat);
      arcLinesGroup.add(line);
    });
    globeGroup.add(arcLinesGroup);

    // 10. Traveling Optical Data Packets (Photons)
    interface OpticalPacket {
      curveIndex: number;
      progress: number;
      speed: number;
      mesh: THREE.Mesh;
    }

    const packetGeo = new THREE.SphereGeometry(0.85, 12, 12);
    const packetMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.95,
    });

    const packets: OpticalPacket[] = [];
    const PACKETS_COUNT = 16;

    for (let p = 0; p < PACKETS_COUNT; p++) {
      const curveIndex = p % routeCurves.length;
      const mesh = new THREE.Mesh(packetGeo, packetMat);
      globeGroup.add(mesh);

      packets.push({
        curveIndex,
        progress: (p / PACKETS_COUNT),
        speed: 0.0035 + (p % 3) * 0.0015,
        mesh,
      });
    }

    // 11. Cinematic Directional & Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0x0a192f, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xd8f0ff, 2.5);
    dirLight1.position.set(150, 120, 180);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x0062ff, 1.8);
    dirLight2.position.set(-180, -60, -120);
    scene.add(dirLight2);

    // 12. Fluid Drag & Inertia Momentum Controls
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationX = globeGroup.rotation.x;
    let targetRotationY = globeGroup.rotation.y;
    let rotationVelocityX = 0;
    let rotationVelocityY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
      rotationVelocityX = 0;
      rotationVelocityY = 0;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - prevMouseX;
      const deltaY = clientY - prevMouseY;

      rotationVelocityY = deltaX * 0.0038;
      rotationVelocityX = deltaY * 0.0038;

      targetRotationY += rotationVelocityY;
      targetRotationX += rotationVelocityX;

      // Clamp X rotation to prevent flipping upside down
      targetRotationX = Math.max(-0.9, Math.min(0.9, targetRotationX));

      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);

    domElement.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", onPointerUp);

    // 13. High-Performance Render Loop
    let animationFrameId: number;
    let isVisible = true;

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      clock.getDelta(); // keep clock ticking

      // Inertia & Continuous Ambient Glide
      if (!isDragging) {
        targetRotationY += 0.0016; // Elegant planetary rotation
        // Apply smooth friction decay on residual user drag
        rotationVelocityX *= 0.92;
        rotationVelocityY *= 0.92;
        targetRotationX += rotationVelocityX;
        targetRotationY += rotationVelocityY;
      }

      // Smooth Interpolation (Damping)
      globeGroup.rotation.y += (targetRotationY - globeGroup.rotation.y) * 0.08;
      globeGroup.rotation.x += (targetRotationX - globeGroup.rotation.x) * 0.08;

      // Animate Pulsating Hub Ripple Rings
      rippleRings.forEach((ripple) => {
        ripple.scale += ripple.speed;
        if (ripple.scale > 2.6) {
          ripple.scale = 0.8;
        }
        ripple.mesh.scale.set(ripple.scale, ripple.scale, ripple.scale);
        const material = ripple.mesh.material as THREE.MeshBasicMaterial;
        material.opacity = Math.max(0, 1 - (ripple.scale - 0.8) / 1.8) * 0.8;
      });

      // Animate Traveling Photons (Data Packets)
      packets.forEach((packet) => {
        packet.progress += packet.speed;
        if (packet.progress >= 1.0) {
          packet.progress = 0.0;
        }
        const curve = routeCurves[packet.curveIndex];
        if (curve) {
          const pt = curve.getPoint(packet.progress);
          packet.mesh.position.copy(pt);
        }
      });

      if (renderer) {
        renderer.render(scene, camera);
      }
    };
    animate();

    // 14. Responsive Resize Listener
    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // 15. Clean Resource Disposal
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      domElement.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      domElement.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);

      cancelAnimationFrame(animationFrameId);

      if (renderer && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }

      coreGeo.dispose();
      coreMat.dispose();
      atmoGeo.dispose();
      atmoMat.dispose();
      landGeo.dispose();
      landMat.dispose();
      particleTexture.dispose();
      hubDotGeo.dispose();
      hubDotMat.dispose();
      ringGeo.dispose();
      packetGeo.dispose();
      packetMat.dispose();
    };
  }, [hasWebGL]);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="relative w-72 h-72 rounded-full border border-[#00f0ff]/30 flex items-center justify-center telecom-grid animate-pulse">
          <div className="w-48 h-48 rounded-full border border-[#0062ff]/40 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#0062ff]/20 to-[#00f0ff]/20 blur-xl" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="w-full h-[320px] sm:h-[400px] lg:h-[460px] flex items-center justify-center relative cursor-grab active:cursor-grabbing select-none"
      aria-label="Interactive 3D Global Telecommunications Network"
    />
  );
}
