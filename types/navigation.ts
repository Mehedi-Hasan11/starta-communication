export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  children?: NavItem[];
}

export interface FooterSection {
  title: string;
  links: {
    title: string;
    href: string;
    badge?: string;
    external?: boolean;
  }[];
}
