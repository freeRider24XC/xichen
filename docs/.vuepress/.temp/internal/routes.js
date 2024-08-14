export const redirects = JSON.parse("{\"/get-started.html\":\"/article/56e3q3mm/\",\"/notes.html\":\"/article/luft9vrt/\",\"/photograph.html\":\"/article/fv7bwp3a/\",\"/blog/blog.html\":\"/article/7jbwdq7q/\",\"/blog/logDebug.html\":\"/article/vz8ct24a/\"}")

export const routes = Object.fromEntries([
  ["/article/56e3q3mm/", { loader: () => import(/* webpackChunkName: "article_56e3q3mm_index.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/article/56e3q3mm/index.html.js"), meta: {"title":"get-started"} }],
  ["/article/luft9vrt/", { loader: () => import(/* webpackChunkName: "article_luft9vrt_index.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/article/luft9vrt/index.html.js"), meta: {"title":"notes"} }],
  ["/article/fv7bwp3a/", { loader: () => import(/* webpackChunkName: "article_fv7bwp3a_index.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/article/fv7bwp3a/index.html.js"), meta: {"title":"photograph"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/article/7jbwdq7q/", { loader: () => import(/* webpackChunkName: "article_7jbwdq7q_index.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/article/7jbwdq7q/index.html.js"), meta: {"title":"技术文档"} }],
  ["/article/vz8ct24a/", { loader: () => import(/* webpackChunkName: "article_vz8ct24a_index.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/article/vz8ct24a/index.html.js"), meta: {"title":"日志打印工具"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);
