export const siteData = JSON.parse("{\"base\":\"/xichen/\",\"lang\":\"zh-CN\",\"title\":\"西辰\",\"description\":\"众里寻他千百度，那人却在灯火阑珊处\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
