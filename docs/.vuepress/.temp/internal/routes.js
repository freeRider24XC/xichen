export const redirects = JSON.parse("{\"/blog.html\":\"/article/7jbwdq7q/\",\"/get-started.html\":\"/article/56e3q3mm/\",\"/photograph.html\":\"/article/fv7bwp3a/\"}")

export const routes = Object.fromEntries([
  ["/article/7jbwdq7q/", { loader: () => import(/* webpackChunkName: "article_7jbwdq7q_index.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/article/7jbwdq7q/index.html.js"), meta: {"title":"blog"} }],
  ["/article/56e3q3mm/", { loader: () => import(/* webpackChunkName: "article_56e3q3mm_index.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/article/56e3q3mm/index.html.js"), meta: {"title":"get-started"} }],
  ["/article/fv7bwp3a/", { loader: () => import(/* webpackChunkName: "article_fv7bwp3a_index.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/article/fv7bwp3a/index.html.js"), meta: {"title":"photograph"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"E:/xichen/xichen_knight/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);
