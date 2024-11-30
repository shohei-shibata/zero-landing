export const headerData = {
  links: [
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Team',
      href: '/team',
    },
    {
      text: 'GR-96',
      links: [
        {
          text: 'Features',
          href: '#features',
        },
        {
          text: 'Manual',
          href: 'https://docs.zeroturfmachines.com',
        },
        {
          text: 'Preorder',
          href: 'https://store.zeroturfmachines.com/gr96-preorder',
        },
      ],
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
  actions: [{ text: 'Preorder', href: 'https://store.zeroturfmachines.com/gr96-preorder', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'GR-96',
      links: [
        { text: 'Features', href: '#features' },
        { text: 'Docs', href: 'https://docs.zeroturfmachines.com' },
        { text: 'Preorder', href: 'https://store.zeroturfmachines.com/gr96-preorder' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Team', href: '/team' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: '/terms' },
    { text: 'Privacy Policy', href: '/privacy' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@zeroturfmachines' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/JKVEngineering' },
  ],
  footNote: `©️ 2024 ZERO Turf Machines. All rights Reserved.
  `,
};
