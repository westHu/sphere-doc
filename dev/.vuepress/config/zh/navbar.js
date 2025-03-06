export const navbar = [
  { text: '首页', link: '/zh', icon: 'IconHome' },
  {
    text: '指南',
    icon: 'Compass',
    children: [
      {
        text: '简介',
        link: '/zh/guide/about'
      },
      {
        text: '特性',
        link: '/zh/guide/setting'
      },
      {
        text: '更新',
        link: '/zh/guide/changelog'
      },
    ],
  },
  {
    text: '文档',
    icon: 'Code',
    children: [
      {
        text: '支付',
        link: '/zh/api/payment'
      },
      {
        text: '出款',
        link: '/zh/api/disbursement'
      },
      {
        text: '充值',
        link: '/zh/api/recharge'
      },
      {
        text: '退款',
        link: '/zh/api/refund'
      },
      {
        text: '历史交易',
        link: '/zh/api/history'
      },
    ],
  },

  { text: '价格', link: '/zh/price', icon: 'ShoppingCart' },


  {
    text: '高级',
    icon: 'Playlist',
    children: [
      {
        text: '问答',
        link: '/zh/advanced/faq'
      },
    ],
  },
  { text: '关于我们', link: 'https://www.youtube.com/watch?v=l4b633MrVaY', icon: 'Playlist' },
]