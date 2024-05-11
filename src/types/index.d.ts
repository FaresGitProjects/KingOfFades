export type NavItem = {
  title: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  url: string;
  description: string;
};

export type HomeConfig = {
  nav: NavItem[];
};

export type DashboardConfig = {
  title: string;
  nav: NavItem[];
  sideNav: NavItem[];
};
