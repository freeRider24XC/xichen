import comp from "E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/front_end.html.vue"
const data = JSON.parse("{\"path\":\"/front_end.html\",\"title\":\"技术文章\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"flutter\",\"slug\":\"flutter\",\"link\":\"#flutter\",\"children\":[]},{\"level\":2,\"title\":\"vue\",\"slug\":\"vue\",\"link\":\"#vue\",\"children\":[]},{\"level\":2,\"title\":\"react\",\"slug\":\"react\",\"link\":\"#react\",\"children\":[]},{\"level\":2,\"title\":\"kotlin\",\"slug\":\"kotlin\",\"link\":\"#kotlin\",\"children\":[]}],\"git\":{\"updatedTime\":1723102332000,\"contributors\":[{\"name\":\"tankangping\",\"email\":\"tankangping@mooncell.com.cn\",\"commits\":1}]},\"filePathRelative\":\"front_end.md\"}")
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
