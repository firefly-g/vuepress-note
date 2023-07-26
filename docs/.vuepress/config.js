module.exports = {
    title: 'firefly-g 的博客',
    description: 'take our time,step by step',
    // them:'reco',
    base:'/vuepress-note/',
    themeConfig: {
        nav: [
            {
                text: '首页', link: '/'
            }, {
                text: 'firefly-g 的博客',
                items: [
                    { text: '掘金', link: '/' },
                    { text: 'Github', link: '/' }
                ]
            }
        ],
        sidebar: [
            {
                title: '引言',
                path: '/',
                collapsable: false,
                children: [
                    {
                        title: '简介', path: '/handbook/brief/introduction'
                    },
                    {
                        title: '目标', path: '/handbook/brief/target'
                    }
                ]

            }, {
                title: '基础篇',
                collapsable: false,
            }, {
                title: '基础',
                path: '/handbook/basics/1',
                collapsable: true,
                children: [
                    {
                        title: '基础(1)', path: '/handbook/basics/1'
                    },
                    {
                        title: '基础(2)', path: '/handbook/basics/2'
                    }
                ]
            }, {
                title: '中级',
                path: '/handbook/basics1/1',
                collapsable: true,
                children: [
                    {
                        title: '中级(1)', path: '/handbook/basics1/1'
                    },
                    {
                        title: '中级(2)', path: '/handbook/basics1/2'
                    }
                ]

            }
        ]
    }
}