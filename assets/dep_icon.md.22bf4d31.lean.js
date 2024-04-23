import{o as n,c as s,b as a,d as t}from"./app.6092a699.js";const o='{"title":"图标","description":"","frontmatter":{},"headers":[{"level":2,"title":"组件库图标","slug":"组件库图标"},{"level":2,"title":"Svg Sprite 图标","slug":"svg-sprite-图标"},{"level":3,"title":"使用","slug":"使用"},{"level":2,"title":"Iconify 图标","slug":"iconify-图标"},{"level":2,"title":"图标选择器","slug":"图标选择器"},{"level":3,"title":"图标集预生成","slug":"图标集预生成"},{"level":3,"title":"生成","slug":"生成"},{"level":3,"title":"优缺点","slug":"优缺点"}],"relativePath":"dep/icon.md","lastUpdated":1713834498631}',p={},c=a("h1",{id:"图标"},[a("a",{class:"header-anchor",href:"#图标","aria-hidden":"true"},"#"),t(" 图标")],-1),e=a("p",null,"项目中有以下多种图标使用方式。",-1),l=a("h2",{id:"组件库图标"},[a("a",{class:"header-anchor",href:"#组件库图标","aria-hidden":"true"},"#"),t(" 组件库图标")],-1),u=a("p",null,[t("使用 "),a("code",null,"ant-design-vue"),t(" 提供的图标")],-1),k=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("template")]),a("span",{class:"token punctuation"},">")]),t("\n  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("StarOutlined")]),t(),a("span",{class:"token punctuation"},"/>")]),t("\n  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("StarFilled")]),t(),a("span",{class:"token punctuation"},"/>")]),t("\n  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("StarTwoTone")]),t(),a("span",{class:"token attr-name"},"twoToneColor"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("#eb2f96"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token punctuation"},"/>")]),t("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("template")]),a("span",{class:"token punctuation"},">")]),t("\n\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("script")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[t("\n  "),a("span",{class:"token keyword"},"import"),t(),a("span",{class:"token punctuation"},"{"),t(" defineComponent "),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token keyword"},"from"),t(),a("span",{class:"token string"},"'vue'"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token keyword"},"import"),t(),a("span",{class:"token punctuation"},"{"),t(" StarOutlined"),a("span",{class:"token punctuation"},","),t(" StarFilled"),a("span",{class:"token punctuation"},","),t(" StarTwoTone "),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token keyword"},"from"),t(),a("span",{class:"token string"},"'@ant-design/icons-vue'"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token keyword"},"export"),t(),a("span",{class:"token keyword"},"default"),t(),a("span",{class:"token function"},"defineComponent"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),t("\n    components"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t(" StarOutlined"),a("span",{class:"token punctuation"},","),t(" StarFilled"),a("span",{class:"token punctuation"},","),t(" StarTwoTone "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),t("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n")])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("script")]),a("span",{class:"token punctuation"},">")]),t("\n")])])],-1),i=a("h2",{id:"svg-sprite-图标"},[a("a",{class:"header-anchor",href:"#svg-sprite-图标","aria-hidden":"true"},"#"),t(" Svg Sprite 图标")],-1),r=a("h3",{id:"使用"},[a("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),t(" 使用")],-1),g=a("p",null,[t("将需要的 svg 图标放到"),a("code",null,"src/assets/icons"),t("内")],-1),d=a("p",null,"例: test.svg",-1),f=a("ol",null,[a("li",null,[t("使用"),a("code",null,"SvgIcon"),t("组件进行展示")])],-1),m=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("template")]),a("span",{class:"token punctuation"},">")]),t("\n  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("SvgIcon")]),t(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("test"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token punctuation"},"/>")]),t("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("template")]),a("span",{class:"token punctuation"},">")]),t("\n\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("script")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[t("\n  "),a("span",{class:"token keyword"},"import"),t(),a("span",{class:"token punctuation"},"{"),t(" defineComponent "),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token keyword"},"from"),t(),a("span",{class:"token string"},"'vue'"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token keyword"},"import"),t(),a("span",{class:"token punctuation"},"{"),t(" SvgIcon "),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token keyword"},"from"),t(),a("span",{class:"token string"},"'/@/components/Icon'"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token keyword"},"export"),t(),a("span",{class:"token keyword"},"default"),t(),a("span",{class:"token function"},"defineComponent"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),t("\n    components"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t(" SvgIcon "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),t("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n")])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("script")]),a("span",{class:"token punctuation"},">")]),t("\n")])])],-1),y=a("ol",{start:"2"},[a("li",null,[t("使用"),a("code",null,"Icon"),t("组件进行展示")])],-1),v=a("p",null,[t("以 "),a("code",null,"｜svg"),t(" 结尾会自动使用"),a("code",null,"SvgIcon"),t("组件")],-1),w=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("template")]),a("span",{class:"token punctuation"},">")]),t("\n  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("Icon")]),t(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("test|svg"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token punctuation"},"/>")]),t("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("template")]),a("span",{class:"token punctuation"},">")]),t("\n\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("script")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[t("\n  "),a("span",{class:"token keyword"},"import"),t(),a("span",{class:"token punctuation"},"{"),t(" defineComponent "),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token keyword"},"from"),t(),a("span",{class:"token string"},"'vue'"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token keyword"},"import"),t(),a("span",{class:"token punctuation"},"{"),t(" Icon "),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token keyword"},"from"),t(),a("span",{class:"token string"},"'/@/components/Icon'"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token keyword"},"export"),t(),a("span",{class:"token keyword"},"default"),t(),a("span",{class:"token function"},"defineComponent"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),t("\n    components"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t(" Icon "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),t("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n")])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("script")]),a("span",{class:"token punctuation"},">")]),t("\n")])])],-1),h=a("h2",{id:"iconify-图标"},[a("a",{class:"header-anchor",href:"#iconify-图标","aria-hidden":"true"},"#"),t(" Iconify 图标")],-1),S=a("p",null,[t("使用方式请参考 "),a("a",{href:"./../components/icon.html"},"Icon 组件")],-1),I=a("p",null,[t("项目中使用到的是 "),a("a",{href:"https://github.com/antfu/purge-icons/blob/main/packages/vite-plugin-purge-icons/README.md",target:"_blank",rel:"noopener noreferrer"},"vite-plugin-purge-icons"),t(" 这个插件来进行图标实现。")],-1),b=a("ol",null,[a("li",null,"安装依赖")],-1),T=a("div",{class:"language-bash"},[a("pre",null,[a("code",null,[t("\n"),a("span",{class:"token function"},"yarn"),t(),a("span",{class:"token function"},"add"),t(" @iconify/iconify\n\n"),a("span",{class:"token function"},"yarn"),t(),a("span",{class:"token function"},"add"),t(" @iconify/json @purge-icons/generated -D\n\n")])])],-1),x=a("ol",{start:"2"},[a("li",null,[t("在 "),a("code",null,"vite.config.ts"),t("内引入插件")])],-1),C=a("div",{class:"language-ts"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"import"),t(" PurgeIcons "),a("span",{class:"token keyword"},"from"),t(),a("span",{class:"token string"},"'vite-plugin-purge-icons'"),a("span",{class:"token punctuation"},";"),t("\n\n"),a("span",{class:"token keyword"},"export"),t(),a("span",{class:"token keyword"},"default"),t(),a("span",{class:"token punctuation"},"{"),t("\n  plugins"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"["),a("span",{class:"token function"},"PurgeIcons"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},","),t("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n")])])],-1),q=a("ol",{start:"3"},[a("li",null,"编写 Icon 组件")],-1),_=a("p",null,[t("完整代码 "),a("a",{href:"https://github.com/vbenjs/vue-vben-admin/blob/main/src/components/Icon/src/Icon.vue",target:"_blank",rel:"noopener noreferrer"},"src/components/Icon/src/Icon.vue")],-1),z=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("template")]),a("span",{class:"token punctuation"},">")]),t("\n  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("SvgIcon")]),t(),a("span",{class:"token attr-name"},":size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("size"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token attr-name"},":name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("getSvgIcon"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token attr-name"},"v-if"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("isSvgIcon"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token attr-name"},":class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("[$attrs.class]"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token attr-name"},":spin"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("spin"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token punctuation"},"/>")]),t("\n  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("span")]),t("\n    "),a("span",{class:"token attr-name"},"v-else"),t("\n    "),a("span",{class:"token attr-name"},"ref"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("elRef"),a("span",{class:"token punctuation"},'"')]),t("\n    "),a("span",{class:"token attr-name"},":class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("[$attrs.class, "),a("span",{class:"token punctuation"},"'"),t("app-iconify anticon"),a("span",{class:"token punctuation"},"'"),t(", spin && "),a("span",{class:"token punctuation"},"'"),t("app-iconify-spin"),a("span",{class:"token punctuation"},"'"),t("]"),a("span",{class:"token punctuation"},'"')]),t("\n    "),a("span",{class:"token attr-name"},":style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("getWrapStyle"),a("span",{class:"token punctuation"},'"')]),t("\n  "),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("span")]),a("span",{class:"token punctuation"},">")]),t("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("template")]),a("span",{class:"token punctuation"},">")]),t("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("script")]),t(),a("span",{class:"token attr-name"},"lang"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("ts"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[t("\n  "),a("span",{class:"token keyword"},"import"),t(" type "),a("span",{class:"token punctuation"},"{"),t(" PropType "),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token keyword"},"from"),t(),a("span",{class:"token string"},"'vue'"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token keyword"},"import"),t(),a("span",{class:"token punctuation"},"{"),t("\n    defineComponent"),a("span",{class:"token punctuation"},","),t("\n    ref"),a("span",{class:"token punctuation"},","),t("\n    watch"),a("span",{class:"token punctuation"},","),t("\n    onMounted"),a("span",{class:"token punctuation"},","),t("\n    nextTick"),a("span",{class:"token punctuation"},","),t("\n    unref"),a("span",{class:"token punctuation"},","),t("\n    computed"),a("span",{class:"token punctuation"},","),t("\n    CSSProperties"),a("span",{class:"token punctuation"},","),t("\n  "),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token keyword"},"from"),t(),a("span",{class:"token string"},"'vue'"),a("span",{class:"token punctuation"},";"),t("\n\n  "),a("span",{class:"token keyword"},"import"),t(" SvgIcon "),a("span",{class:"token keyword"},"from"),t(),a("span",{class:"token string"},"'./SvgIcon.vue'"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token keyword"},"import"),t(" Iconify "),a("span",{class:"token keyword"},"from"),t(),a("span",{class:"token string"},"'@purge-icons/generated'"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token keyword"},"import"),t(),a("span",{class:"token punctuation"},"{"),t(" isString "),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token keyword"},"from"),t(),a("span",{class:"token string"},"'/@/utils/is'"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token keyword"},"import"),t(),a("span",{class:"token punctuation"},"{"),t(" propTypes "),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token keyword"},"from"),t(),a("span",{class:"token string"},"'/@/utils/propTypes'"),a("span",{class:"token punctuation"},";"),t("\n\n  "),a("span",{class:"token keyword"},"const"),t(),a("span",{class:"token constant"},"SVG_END_WITH_FLAG"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token string"},"'|svg'"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token keyword"},"export"),t(),a("span",{class:"token keyword"},"default"),t(),a("span",{class:"token function"},"defineComponent"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),t("\n    name"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},"'GIcon'"),a("span",{class:"token punctuation"},","),t("\n    components"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t(" SvgIcon "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),t("\n    props"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t("\n      "),a("span",{class:"token comment"},"// icon name"),t("\n      icon"),a("span",{class:"token operator"},":"),t(" propTypes"),a("span",{class:"token punctuation"},"."),t("string"),a("span",{class:"token punctuation"},","),t("\n      "),a("span",{class:"token comment"},"// icon color"),t("\n      color"),a("span",{class:"token operator"},":"),t(" propTypes"),a("span",{class:"token punctuation"},"."),t("string"),a("span",{class:"token punctuation"},","),t("\n      "),a("span",{class:"token comment"},"// icon size"),t("\n      size"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t("\n        type"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"["),t("String"),a("span",{class:"token punctuation"},","),t(" Number"),a("span",{class:"token punctuation"},"]"),t(),a("span",{class:"token keyword"},"as"),t(" PropType"),a("span",{class:"token operator"},"<"),t("string "),a("span",{class:"token operator"},"|"),t(" number"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},","),t("\n        "),a("span",{class:"token keyword"},"default"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token number"},"16"),a("span",{class:"token punctuation"},","),t("\n      "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),t("\n      spin"),a("span",{class:"token operator"},":"),t(" propTypes"),a("span",{class:"token punctuation"},"."),t("bool"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"def"),a("span",{class:"token punctuation"},"("),a("span",{class:"token boolean"},"false"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),t("\n      prefix"),a("span",{class:"token operator"},":"),t(" propTypes"),a("span",{class:"token punctuation"},"."),t("string"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"def"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"''"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),t("\n    "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),t("\n    "),a("span",{class:"token function"},"setup"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"props"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n      "),a("span",{class:"token keyword"},"const"),t(" elRef "),a("span",{class:"token operator"},"="),t(" ref"),a("span",{class:"token operator"},"<"),t("ElRef"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"null"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n\n      "),a("span",{class:"token keyword"},"const"),t(" isSvgIcon "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token function"},"computed"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token operator"},"=>"),t(" props"),a("span",{class:"token punctuation"},"."),t("icon"),a("span",{class:"token operator"},"?."),a("span",{class:"token function"},"endsWith"),a("span",{class:"token punctuation"},"("),a("span",{class:"token constant"},"SVG_END_WITH_FLAG"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n      "),a("span",{class:"token keyword"},"const"),t(" getSvgIcon "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token function"},"computed"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token operator"},"=>"),t(" props"),a("span",{class:"token punctuation"},"."),t("icon"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"replace"),a("span",{class:"token punctuation"},"("),a("span",{class:"token constant"},"SVG_END_WITH_FLAG"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token string"},"''"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n      "),a("span",{class:"token keyword"},"const"),t(" getIconRef "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token function"},"computed"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token operator"},"=>"),t(),a("span",{class:"token template-string"},[a("span",{class:"token template-punctuation string"},"`"),a("span",{class:"token interpolation"},[a("span",{class:"token interpolation-punctuation punctuation"},"${"),t("props"),a("span",{class:"token punctuation"},"."),t("prefix "),a("span",{class:"token operator"},"?"),t(" props"),a("span",{class:"token punctuation"},"."),t("prefix "),a("span",{class:"token operator"},"+"),t(),a("span",{class:"token string"},"':'"),t(),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},"''"),a("span",{class:"token interpolation-punctuation punctuation"},"}")]),a("span",{class:"token interpolation"},[a("span",{class:"token interpolation-punctuation punctuation"},"${"),t("props"),a("span",{class:"token punctuation"},"."),t("icon"),a("span",{class:"token interpolation-punctuation punctuation"},"}")]),a("span",{class:"token template-punctuation string"},"`")]),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n\n      "),a("span",{class:"token keyword"},"const"),t(),a("span",{class:"token function-variable function"},"update"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"async"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token operator"},"=>"),t(),a("span",{class:"token punctuation"},"{"),t("\n        "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token function"},"unref"),a("span",{class:"token punctuation"},"("),t("isSvgIcon"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token keyword"},"return"),a("span",{class:"token punctuation"},";"),t("\n\n        "),a("span",{class:"token keyword"},"const"),t(" el "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token function"},"unref"),a("span",{class:"token punctuation"},"("),t("elRef"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n        "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token operator"},"!"),t("el"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token keyword"},"return"),a("span",{class:"token punctuation"},";"),t("\n\n        "),a("span",{class:"token keyword"},"await"),t(),a("span",{class:"token function"},"nextTick"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n        "),a("span",{class:"token keyword"},"const"),t(" icon "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token function"},"unref"),a("span",{class:"token punctuation"},"("),t("getIconRef"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n        "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token operator"},"!"),t("icon"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token keyword"},"return"),a("span",{class:"token punctuation"},";"),t("\n\n        "),a("span",{class:"token keyword"},"const"),t(" svg "),a("span",{class:"token operator"},"="),t(" Iconify"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"renderSVG"),a("span",{class:"token punctuation"},"("),t("icon"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token punctuation"},"{"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n        "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),t("svg"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n          el"),a("span",{class:"token punctuation"},"."),t("textContent "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token string"},"''"),a("span",{class:"token punctuation"},";"),t("\n          el"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"appendChild"),a("span",{class:"token punctuation"},"("),t("svg"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n        "),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token keyword"},"else"),t(),a("span",{class:"token punctuation"},"{"),t("\n          "),a("span",{class:"token keyword"},"const"),t(" span "),a("span",{class:"token operator"},"="),t(" document"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"createElement"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'span'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n          span"),a("span",{class:"token punctuation"},"."),t("className "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token string"},"'iconify'"),a("span",{class:"token punctuation"},";"),t("\n          span"),a("span",{class:"token punctuation"},"."),t("dataset"),a("span",{class:"token punctuation"},"."),t("icon "),a("span",{class:"token operator"},"="),t(" icon"),a("span",{class:"token punctuation"},";"),t("\n          el"),a("span",{class:"token punctuation"},"."),t("textContent "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token string"},"''"),a("span",{class:"token punctuation"},";"),t("\n          el"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"appendChild"),a("span",{class:"token punctuation"},"("),t("span"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n        "),a("span",{class:"token punctuation"},"}"),t("\n      "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n\n      "),a("span",{class:"token keyword"},"const"),t(" getWrapStyle "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token function"},"computed"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token parameter"},"CSSProperties"),t(),a("span",{class:"token operator"},"=>"),t(),a("span",{class:"token punctuation"},"{"),t("\n        "),a("span",{class:"token keyword"},"const"),t(),a("span",{class:"token punctuation"},"{"),t(" size"),a("span",{class:"token punctuation"},","),t(" color "),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token operator"},"="),t(" props"),a("span",{class:"token punctuation"},";"),t("\n        "),a("span",{class:"token keyword"},"let"),t(" fs "),a("span",{class:"token operator"},"="),t(" size"),a("span",{class:"token punctuation"},";"),t("\n        "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token function"},"isString"),a("span",{class:"token punctuation"},"("),t("size"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n          fs "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token function"},"parseInt"),a("span",{class:"token punctuation"},"("),t("size"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n        "),a("span",{class:"token punctuation"},"}"),t("\n\n        "),a("span",{class:"token keyword"},"return"),t(),a("span",{class:"token punctuation"},"{"),t("\n          fontSize"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token template-string"},[a("span",{class:"token template-punctuation string"},"`"),a("span",{class:"token interpolation"},[a("span",{class:"token interpolation-punctuation punctuation"},"${"),t("fs"),a("span",{class:"token interpolation-punctuation punctuation"},"}")]),a("span",{class:"token string"},"px"),a("span",{class:"token template-punctuation string"},"`")]),a("span",{class:"token punctuation"},","),t("\n          color"),a("span",{class:"token operator"},":"),t(" color"),a("span",{class:"token punctuation"},","),t("\n          display"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},"'inline-flex'"),a("span",{class:"token punctuation"},","),t("\n        "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n      "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n\n      "),a("span",{class:"token function"},"watch"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token operator"},"=>"),t(" props"),a("span",{class:"token punctuation"},"."),t("icon"),a("span",{class:"token punctuation"},","),t(" update"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token punctuation"},"{"),t(" flush"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},"'post'"),t(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n\n      "),a("span",{class:"token function"},"onMounted"),a("span",{class:"token punctuation"},"("),t("update"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n\n      "),a("span",{class:"token keyword"},"return"),t(),a("span",{class:"token punctuation"},"{"),t(" elRef"),a("span",{class:"token punctuation"},","),t(" getWrapStyle"),a("span",{class:"token punctuation"},","),t(" isSvgIcon"),a("span",{class:"token punctuation"},","),t(" getSvgIcon "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n    "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),t("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n")])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("script")]),a("span",{class:"token punctuation"},">")]),t("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("style")]),t(),a("span",{class:"token attr-name"},"lang"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("less"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token style"},[a("span",{class:"token language-css"},[t("\n  "),a("span",{class:"token selector"},".app-iconify"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token property"},"display"),a("span",{class:"token punctuation"},":"),t(" inline-block"),a("span",{class:"token punctuation"},";"),t("\n    // "),a("span",{class:"token property"},"vertical-align"),a("span",{class:"token punctuation"},":"),t(" middle"),a("span",{class:"token selector"},";\n\n    &-spin"),t(),a("span",{class:"token punctuation"},"{"),t("\n      "),a("span",{class:"token selector"},"svg"),t(),a("span",{class:"token punctuation"},"{"),t("\n        "),a("span",{class:"token property"},"animation"),a("span",{class:"token punctuation"},":"),t(" loadingCircle 1s infinite linear"),a("span",{class:"token punctuation"},";"),t("\n      "),a("span",{class:"token punctuation"},"}"),t("\n    "),a("span",{class:"token punctuation"},"}"),t("\n  "),a("span",{class:"token punctuation"},"}"),t("\n\n  "),a("span",{class:"token selector"},"span.iconify"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token property"},"display"),a("span",{class:"token punctuation"},":"),t(" block"),a("span",{class:"token punctuation"},";"),t("\n    "),a("span",{class:"token property"},"min-width"),a("span",{class:"token punctuation"},":"),t(" 1em"),a("span",{class:"token punctuation"},";"),t("\n    "),a("span",{class:"token property"},"min-height"),a("span",{class:"token punctuation"},":"),t(" 1em"),a("span",{class:"token punctuation"},";"),t("\n    "),a("span",{class:"token property"},"background-color"),a("span",{class:"token punctuation"},":"),t(),a("span",{class:"token atrule"},[a("span",{class:"token rule"},"@iconify-bg-color"),a("span",{class:"token punctuation"},";")]),t("\n    "),a("span",{class:"token property"},"border-radius"),a("span",{class:"token punctuation"},":"),t(" 100%"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token punctuation"},"}"),t("\n")])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("style")]),a("span",{class:"token punctuation"},">")]),t("\n")])])],-1),j=a("h2",{id:"图标选择器"},[a("a",{class:"header-anchor",href:"#图标选择器","aria-hidden":"true"},"#"),t(" 图标选择器")],-1),G=a("h3",{id:"图标集预生成"},[a("a",{class:"header-anchor",href:"#图标集预生成","aria-hidden":"true"},"#"),t(" 图标集预生成")],-1),R=a("p",null,"由于图标选择器这个比较特殊的存在，项目会打包一些比较多的图标，图标选择器的图标需要事先指定并生成相应的文件。",-1),E=a("h3",{id:"生成"},[a("a",{class:"header-anchor",href:"#生成","aria-hidden":"true"},"#"),t(" 生成")],-1),P=a("ul",null,[a("li",null,"执行图标生成命令")],-1),W=a("div",{class:"language-bash"},[a("pre",null,[a("code",null,[a("span",{class:"token function"},"yarn"),t(" gen:icon\n")])])],-1),D=a("ul",null,[a("li",null,"这里会让你选择本地还是在线生成，两种方式各有利弊。如下图所示")],-1),F=a("p",null,"local 表示本地，online 表示在线，回车确认",-1),N=a("p",null,[a("img",{src:"/images/genIcon.png",alt:""})],-1),$=a("ul",null,[a("li",null,"选择你要生成的图标集,回车确认")],-1),A=a("p",null,[a("img",{src:"/images/selectIconSet.png",alt:""})],-1),V=a("ul",null,[a("li",null,"选择图标输出的目录(项目默认 src/components/Icon/data)，可以直接回车选择默认")],-1),H=a("p",null,[a("img",{src:"/images/outDir.png",alt:""})],-1),L=a("p",null,"到这里图标集已经生成完成了，此时你的图标选择器已经是你所选的的图标集的图标了。",-1),M=a("div",{class:"danger custom-block"},[a("p",{class:"custom-block-title"},"注意不要频繁更新"),a("p",null,"如果前面选择的是本地生成的话，频繁更换图标集，可能会导致图标丢失或者显示不出来")],-1),O=a("h3",{id:"优缺点"},[a("a",{class:"header-anchor",href:"#优缺点","aria-hidden":"true"},"#"),t(" 优缺点")],-1),U=a("ul",null,[a("li",null,[a("strong",null,"在线图标(项目默认,推荐)")])],-1),B=a("p",null,"该方式会在图标选择器使用到图标的时候进行在线请求,然后缓存对应的图标到浏览器。可以有效减少代码打包体积。",-1),J=a("p",null,"如果你的项目可以访问外网，建议可以使用这种方式",-1),K=a("p",null,[a("strong",null,"缺点："),t(" 在局域网或者无法访问到外网的环境中图标显示不出来")],-1),Q=a("ul",null,[a("li",null,[a("strong",null,"本地图标")])],-1),X=a("p",null,"该方式会在打包的时候将图标选择器的图标全部打包到 js 内。在使用的时候不会额外的请求在线图标",-1),Y=a("p",null,[a("strong",null,"缺点："),t(" 打包体积会偏大，具体的体积增加得看前面选择图标集的时候选择的图标数量的多少决定")],-1);p.render=function(a,t,o,p,Z,nn){return n(),s("div",null,[c,e,l,u,k,i,r,g,d,f,m,y,v,w,h,S,I,b,T,x,C,q,_,z,j,G,R,E,P,W,D,F,N,$,A,V,H,L,M,O,U,B,J,K,Q,X,Y])};export default p;export{o as __pageData};
