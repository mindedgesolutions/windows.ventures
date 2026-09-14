type MenuProps = {
  id: string;
  title: string;
  link: string;
  pathname: string;
  submenus?: SubmenuProps[];
};

type SubmenuProps = {
  id: string;
  title: string;
  msg?: string;
  link: string;
};

export const menus: MenuProps[] = [
  {
    id: 'home',
    title: 'Home',
    link: '/',
    pathname: 'home',
  },
  {
    id: 'about',
    title: 'About',
    link: '/about',
    pathname: 'about',
  },
  {
    id: 'services',
    title: 'Services',
    link: '#',
    pathname: 'services',
    submenus: [
      {
        id: 'career-readiness',
        title: 'Career Readiness',
        msg: 'Re-usable components built with Tailwind CSS',
        link: '/services/career-readiness',
      },
      {
        id: 'import-export',
        title: 'Import & Export',
        msg: 'Re-usable components built with Tailwind CSS',
        link: '/services/import-export',
      },
      {
        id: 'web-development',
        title: 'Web Development',
        msg: 'Re-usable components built with Tailwind CSS',
        link: '/services/web-development',
      },
    ],
  },
  {
    id: 'products',
    title: 'Products',
    link: '#',
    pathname: 'products',
    submenus: [
      {
        id: 'cyber-solution',
        title: 'Cyber Solution',
        msg: 'Re-usable components built with Tailwind CSS',
        link: '/products/cyber-solution',
      },
      {
        id: 'kids-play',
        title: 'Kids Play',
        msg: 'Re-usable components built with Tailwind CSS',
        link: '/products/kids-play',
      },
    ],
  },
  {
    id: 'contactus',
    title: 'Contact',
    link: '/contact-us',
    pathname: 'contact-us',
  },
];
