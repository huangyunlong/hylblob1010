module.exports = {
    title: '大前端',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: 'github', link: 'https://github.com/huangyunlong' },
            { text: '百度一下', link: 'https://www.baidu.com' },
            {
                text: '博客文章',
                items: [
                    { text: 'VUE间组件通信', link: '/component/' },
                    { text: 'JSX渲染函数', link: '/jsx/' },
                    { text: 'JWT验证', link: '/jwt/' },
                    { text: '级联组件的编写', link: '/d' },
                    { text: '单元测试', link: '/language/chinese' },
                    { text: 'vue权限', link: '/language/japanese' },
                    { text: '实现路由和状态管理', link: '/language/chinese' },
                    { text: 'vue原理剖析', link: '/language/japanese' },
                    { text: 'NuxtJS', link: '/language/chinese' },
                    { text: 'Vue+TypeScript', link: '/language/japanese' }
                ]
            }
        ],
        sidebar: {
            '/': [
                '/component/',
                '/jsx/',
                '/jwt/',
                '/operation/',
                '/优化/',
                '/webpack1/',
                '/webpack2/',
                '/webpack3/',
                '/webpack4/',
                '/webpack5/',
                '/webpack6/',
                '/webpack7/'
            ],

        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated', 
    }
}