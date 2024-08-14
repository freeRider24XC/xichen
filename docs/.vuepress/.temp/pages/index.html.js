import comp from "E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"title\":\"首页\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"config\":[{\"type\":\"banner\",\"banner\":\"https://api.pengzhanbo.cn/wallpaper/bing\",\"bannerMask\":{\"light\":0.1,\"dark\":0.3},\"hero\":{\"name\":\"西辰Knight\",\"tagline\":\"A frontend developer who is also a photographer and an outdoor sports enthusiast.\",\"text\":\"即使慢，驰而不息，纵会落后，纵会失败，但必须能够到达他所向的目标。\",\"actions\":[{\"text\":\"我的博客\",\"link\":\"/blog/\",\"theme\":\"brand\"},{\"text\":\"Github\",\"link\":\"https://github.com/freeRider24XC\",\"theme\":\"alt\"}]}}],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"footer: MIT Licensed | Copyright © 2018-present VuePress Community\",\"slug\":\"footer-mit-licensed-copyright-©-2018-present-vuepress-community\",\"link\":\"#footer-mit-licensed-copyright-©-2018-present-vuepress-community\",\"children\":[]}],\"readingTime\":{\"minutes\":0.86,\"words\":259},\"filePathRelative\":\"README.md\",\"categoryList\":[]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
