import { plumeTheme } from "vuepress-theme-plume";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "zh-CN",

  title: "西辰",
  description: "众里寻他千百度，那人却在灯火阑珊处",

  theme: plumeTheme({
    logo: "https://vuejs.press/images/hero.png",

    navbar: ["/", "/blog/blog.md", "/photograph", "/notes", "/get-started"],
  }),

  bundler: viteBundler(),
  base: "/xichen/",
});
