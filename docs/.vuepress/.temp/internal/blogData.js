export const blogPostData = [{"path":"/article/vz8ct24a/","title":"日志打印工具","categoryList":[{"id":"126ac9","sort":10000,"name":"blog"}],"createTime":"2024/08/14 10:31:11","lang":"zh-CN","excerpt":""},{"path":"/article/luft9vrt/","title":"notes","categoryList":[],"createTime":"2024/08/12 18:28:28","lang":"zh-CN","excerpt":""},{"path":"/article/56e3q3mm/","title":"get-started","categoryList":[],"createTime":"2024/08/12 15:00:27","lang":"zh-CN","excerpt":""},{"path":"/article/7jbwdq7q/","title":"技术文档","categoryList":[{"id":"126ac9","sort":10000,"name":"blog"}],"createTime":"2024/08/08 20:09:24","lang":"zh-CN","excerpt":""},{"path":"/article/fv7bwp3a/","title":"photograph","categoryList":[],"createTime":"2024/08/08 20:09:24","lang":"zh-CN","excerpt":""}]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogPostData) {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ blogPostData }) => {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  })
}
