import {defineConfig} from 'vitepress'
// @ts-ignore
import { getDirLink } from './fs-deal.mts'




// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "博客",
    description: "我的站点",
    // base:'/docs/',
    themeConfig: {
        outline:{
            label:"本页目录"
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索',
                        buttonAriaLabel: '搜索文档'
                    },
                    modal: {
                        noResultsText: '没有找到结果',
                        resetButtonTitle: '清除搜索',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换',
                            closeText: '关闭'
                        }
                    }
                }
            }
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '导航', items:[
            {
                text: '资源工具',
                link: 'https://nav.poetries.top/'
            },
            {
                text: 'cheatSheet',
                link: 'https://devhints.io/'
            },
            {
                text: 'feHelper',
                link: 'https://www.baidufe.com/fehelper/regexp/index.html'
            },
            {
                text: '正则可视化',
                link: 'https://www.jyshare.com/front-end/854/'
            },{
                text: '正则可视化',
                link: 'https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24'
            },
            {
                text:'执行过程可视化',
                link:'https://pythontutor.com/render.html#mode=display'
            },
            {
                text: 'babelRepl',
                link: 'https://www.babeljs.cn/repl#?browsers=&build=&builtIns=false&corejs=false&spec=false&loose=false&code_lz=IYZwngdgxgBAZgV2gFwJYHsI2MAFASgG8AoGM7Ad2FWRggFMKYAFAJ3QFtUR7dX6Q6ADYA3egF4AfCXKyYPZABVUHeugTJcBKTLl6omQUPoA6IegDmuAIz5SeufyNiC9vQF8ANNYAMfu7Ludu7EpDiuBhBGpuZWAEx2QA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=&prettier=false&targets=&version=7.24.4&externalPlugins=&assumptions=%7B%7D'
            }
            ]},
            {text: '前端', link: '/frontend'},
            {text: '后端', link: '/backend'},
            {text: '运维', link: '/devops'},
            {text: '业务', link: '/business'},
            {text: '工具', link: '/tools/curl.html'},
        ],
        sidebar: getDirLink(__dirname+"/.."),

        editLink: {
            pattern: 'https://github.com/ffeeng/docs/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/ffeeng/myDocs'}
        ]
    }
})
