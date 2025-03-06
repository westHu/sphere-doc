export const navbar = [
  { text: 'Home', link: '/', icon: 'IconHome' },
  {
    text: 'Guide',
    icon: 'Compass',
    children: [
      {
        text: 'About',
        link: '/en/guide/about'
      },
      {
        text: 'Feature',
        link: '/en/guide/theme'
      },
      {
        text: 'Update',
        link: '/en/guide/changelog'
      },
    ],
  },
  {
    text: 'API',
    icon: 'Code',
    children: [
      {
        text: 'Payment',
        link: '/en/api/payment'
      },
      {
        text: 'Disbursement',
        link: '/en/api/disbursement'
      },
      {
        text: 'Top Up',
        link: '/en/api/recharge'
      },
      {
        text: 'Refund',
        link: '/en/api/refund'
      },
      {
        text: 'Transaction Summary/History',
        link: '/en/api/history'
      },
    ],
  },

  { text: 'Pricing', link: '/price', icon: 'ShoppingCart' },


  {
    text: 'Advanced',
    icon: 'Playlist',
    children: [
      {
        text: 'FAQ',
        link: '/en/advanced/faq'
      },
    ],
  },
  { text: 'About US', link: 'https://www.youtube.com/watch?v=l4b633MrVaY', icon: 'Playlist' },
];