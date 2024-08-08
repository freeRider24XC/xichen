export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/front_end.html", { loader: () => import(/* webpackChunkName: "front_end.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/front_end.html.js"), meta: {"title":"技术文章"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/photograph.html", { loader: () => import(/* webpackChunkName: "photograph.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/photograph.html.js"), meta: {"title":"摄影"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"西辰knight"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
