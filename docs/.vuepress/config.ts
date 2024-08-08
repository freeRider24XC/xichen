import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "zh-CN",

  title: "xichen  Blog",
  description: "My first VuePress Site",

  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",

    navbar: ["/", "/get-started", "/front_end", "/photograph"],
  }),

  bundler: viteBundler(),
  base: "/https://github.com/freeRider24XC/xichen.git/",
});
