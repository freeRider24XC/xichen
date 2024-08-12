import comp from "E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/photograph.html.vue"
const data = JSON.parse("{\"path\":\"/photograph.html\",\"title\":\"摄影\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"人像\",\"slug\":\"人像\",\"link\":\"#人像\",\"children\":[]},{\"level\":2,\"title\":\"风光\",\"slug\":\"风光\",\"link\":\"#风光\",\"children\":[]},{\"level\":2,\"title\":\"人文\",\"slug\":\"人文\",\"link\":\"#人文\",\"children\":[]},{\"level\":2,\"title\":\"建筑\",\"slug\":\"建筑\",\"link\":\"#建筑\",\"children\":[]},{\"level\":2,\"title\":\"器材\",\"slug\":\"器材\",\"link\":\"#器材\",\"children\":[]}],\"git\":{\"updatedTime\":1723102332000,\"contributors\":[{\"name\":\"tankangping\",\"email\":\"tankangping@mooncell.com.cn\",\"commits\":1}]},\"filePathRelative\":\"photograph.md\"}")
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
