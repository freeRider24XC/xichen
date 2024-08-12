import { defineClientConfig } from "vuepress/client";
import CodeTabs from "E:/xichen/xichen_knight/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.4_vuep_dhio5eqpotsduup2khr5hb3inm/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "E:/xichen/xichen_knight/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.39_typescript@5.5.4_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0_p7wquy34355knrowikviyh3dfy/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "E:/xichen/xichen_knight/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.4_vuep_dhio5eqpotsduup2khr5hb3inm/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "E:/xichen/xichen_knight/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.4_vuep_dhio5eqpotsduup2khr5hb3inm/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHintContainers } from "E:/xichen/xichen_knight/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.4_vuep_dhio5eqpotsduup2khr5hb3inm/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "E:/xichen/xichen_knight/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.4_vuep_dhio5eqpotsduup2khr5hb3inm/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "E:/xichen/xichen_knight/node_modules/.pnpm/katex@0.16.11/node_modules/katex/dist/katex.min.css";
import "E:/xichen/xichen_knight/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.4_vuep_dhio5eqpotsduup2khr5hb3inm/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import Tabs from "E:/xichen/xichen_knight/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.4_vuep_dhio5eqpotsduup2khr5hb3inm/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "E:/xichen/xichen_knight/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.4_vuep_dhio5eqpotsduup2khr5hb3inm/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
