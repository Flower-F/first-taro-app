export default {
  pages: [
    'pages/index/index', 'pages/mine/mine', 'pages/post/post'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '้ฆ้กต',
        iconPath: './images/home.png',
        selectedIconPath: './images/homeSelected.png',
      },
      {
        pagePath: 'pages/mine/mine',
        text: 'ๆ็',
        iconPath: './images/mine.png',
        selectedIconPath: './images/mineSelected.png',
      }
    ]
  }
}
