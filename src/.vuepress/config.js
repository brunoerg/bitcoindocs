const { description } = require('../../package')

const fs = require("fs");
const path = require("path");


function getSideBar(folder, title) {
  const extension = [".md"];

  let files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      (item) =>
        item.toLowerCase() != "readme.md" &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
        extension.includes(path.extname(item))
    );
    
  files.sort((a, b) => a.localeCompare(b, "en-US" || "en-US", {numeric: true, ignorePunctuation: true}));

  return [{ title: title, children: ["", ...files] }];
}


module.exports = {

  markdown: {
    lineNumbers: true
  },
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Bitcoin Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#ff7e00' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "bitcoin.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "bitcoin.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "bitcoin.png"}],
    ['link', { rel: "mask-icon", href: "bitcoin.png", color: "#3a0839"}],
    ['link', { rel: "shortcut icon", href: "favicon.ico"}],
    ['link', { rel: 'icon', href: 'bitcoin.png' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Whitepaper',
        link: '/whitepaper/',
      },
      {
        text: 'Releases',
        link: '/releases/'
      },
      {
        text: 'BIPs',
        link: '/bips/'
      }
    ],
    sidebar: {
      '/whitepaper/': [
        {
          title: 'Whitepaper',
          collapsable: false,
          children: [
            '',
            'errata'
          ]
        }
      ],
      '/releases/': getSideBar(
        "releases",
        "Releases"
      ),
      '/bips/': getSideBar(
        "bips",
        "BIPs"
      ),
      '/segwit/': getSideBar(
        "segwit",
        "SegWit"
      )
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}