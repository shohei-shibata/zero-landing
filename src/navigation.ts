export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      links: [
        {
          text: 'Zero Turf Machines',
          href: '/about',
        },
        {
          text: 'The Team',
          href: '/team',
        },
      ],
    },
    /*{
      text: 'Products',
      links: [
        {
          text: 'GR96',
          href: '/gr96',
        },
        {
          text: 'GRTS',
          href: '/grts',
        },
      ],
    },*/
    {
      text: 'Blog',
      href: '/posts',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
  actions: [{ text: 'Inquiry', href: '/inquiry' }],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'Features', href: '/#features' },
        { text: 'Inquiry', href: '/inquiry' },
        { text: 'Manual (Coming Soon)', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Team', href: '/team' },
        { text: 'Blog', href: '/posts' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: '/terms' },
    { text: 'Privacy Policy', href: '/privacy' },
  ],
  socialLinks: [
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@zeroturfmachines' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/JKVEngineering' },
  ],
  footNote: `© 2026 ZERO Turf Machines. All rights Reserved.
  `,
};
