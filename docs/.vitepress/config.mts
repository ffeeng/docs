import {defineConfig} from 'vitepress'
// @ts-ignore
import { getDirLink } from './fs-deal.mts'


getDirLink(__dirname+"/..")

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "博客",
    description: "我的站点",
    base:'/docs/',
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
        sidebar:{
            '/backend/': [
                { text: '2', link: '/backend/a/2' },
                { text: 'http', link: '/backend/http' },
                { text: 'index', link: '/backend/index' },
                { text: 'mysql', link: '/backend/mysql' },
                { text: 'nest', link: '/backend/nest' },
                { text: 'node', link: '/backend/node' },
                { text: '使用PM2实现高效的应用监控与管理', link: '/backend/使用PM2实现高效的应用监控与管理' },
                { text: '实时协作的艺术：构建高效共享白板系统', link: '/backend/实时协作的艺术：构建高效共享白板系统' }
            ],
            '/business/': [
                { text: 'ai', link: '/business/ai' },
                { text: 'editor', link: '/business/editor' },
                { text: 'sheet', link: '/business/sheet' },
                { text: 'tiptap', link: '/business/tiptap' },
                { text: 'index', link: '/business/index' },
                { text: 'lint', link: '/business/lint' },
                { text: 'microfronend', link: '/business/microfronend' },
                { text: 'playwright', link: '/business/playwright' },
                { text: 'video', link: '/business/rtc/video' },
                { text: 'webRTC1', link: '/business/rtc/webRTC1' },
                { text: 'webRTC2', link: '/business/rtc/webRTC2' },
                { text: 'zego', link: '/business/rtc/zego' },
                { text: 'sentry', link: '/business/sentry' },
                { text: 'techselect', link: '/business/techselect' },
                { text: 'whistle', link: '/business/whistle' },
                { text: 'workflow', link: '/business/workflow' },
                { text: '前端常见业务', link: '/business/前端常见业务' },
                { text: '工作流程', link: '/business/工作流程' },
                { text: '技术选型', link: '/business/技术选型' }
            ],
            '/devops/': [
                { text: 'deploy', link: '/devops/deploy' },
                { text: 'git', link: '/devops/git' },
                { text: 'index', link: '/devops/index' },
                { text: 'jenkins', link: '/devops/jenkins' },
                { text: 'nginx', link: '/devops/nginx' },
                { text: 'shell', link: '/devops/shell' },
                { text: '包管理', link: '/devops/包管理' },
                { text: '常用指令', link: '/devops/常用指令' },
                { text: '版本管理', link: '/devops/版本管理' },
                { text: '端口管理', link: '/devops/端口管理' },
                { text: '自动化部署', link: '/devops/自动化部署' },
                { text: '自动化部署', link: '/devops/自动化部署2' },
                { text: '进程原理', link: '/devops/进程原理' }
            ],
            '/faq/': [ { text: 'index', link: '/faq/index' } ],
            '/frontend/': [
                { text: 'CSS', link: '/frontend/CSS' },
                { text: 'JS核心', link: '/frontend/JS核心' },
                { text: 'Promise常见面试题', link: '/frontend/Promise常见面试题' },
                { text: 'axios', link: '/frontend/axios' },
                { text: 'console', link: '/frontend/console' },
                { text: 'cookie', link: '/frontend/cookie' },
                { text: 'dom', link: '/frontend/dom' },
                { text: 'fetch', link: '/frontend/fetch' },
                { text: 'index', link: '/frontend/index' },
                { text: 'react', link: '/frontend/react' },
                { text: 'sentry异常监控', link: '/frontend/sentry异常监控' },
                { text: 'sse', link: '/frontend/sse' },
                { text: 'vue3', link: '/frontend/vue3' },
                { text: 'vue3_refs', link: '/frontend/vue3_refs' },
                { text: '其他', link: '/frontend/其他' },
                {
                    text: '国内高速前端 Unpkg CDN 替代方案',
                    link: '/frontend/国内高速前端 Unpkg CDN 替代方案'
                },
                { text: '坐标位置', link: '/frontend/坐标位置' },
                { text: '布局', link: '/frontend/布局' },
                { text: '常用注入 Script 方法', link: '/frontend/常用注入 Script 方法' },
                { text: '断点调试', link: '/frontend/断点调试' },
                { text: '设计模式', link: '/frontend/设计模式' },
                { text: '面试', link: '/frontend/面试' }
            ],
            '/interview/': [
                { text: 'index', link: '/interview/index' },
                { text: '字符串问号排序', link: '/interview/字符串问号排序' },
                { text: '实现一个代理服务器', link: '/interview/实现一个代理服务器' },
                { text: '找单独的数', link: '/interview/找单独的数' },
                { text: '查找热点数据', link: '/interview/查找热点数据' }
            ],
            '/tools/': [
                { text: 'curl', link: '/tools/curl' },
                { text: 'postman', link: '/tools/postman' },
                { text: 'webstorm', link: '/tools/webstorm' },
                { text: '代码风格', link: '/tools/代码风格' },
                { text: '提效工具', link: '/tools/提效工具' },
                { text: '谷歌开发者工具', link: '/tools/谷歌开发者工具' }
            ]
        },

        editLink: {
            pattern: 'https://github.com/ffeeng/docs/edit/main/docs/:path',
            text: '在GitHub上编辑此页面'
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/ffeeng/myDocs'}
        ]
    }
})
