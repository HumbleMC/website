module.exports = {
    title: 'HumbleMC',
    description: 'Minecraft mod loader',
    dest: '../docs',
    locales: {
        '/': {
            lang: 'en-US',
            title: 'HumbleMC',
            description: 'Minecraft mod loader'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'HumbleMC',
            description: 'Minecraft模组加载器'
        }
    },
    themeConfig: {
        logo: 'hero.png',
        sidebar: 'auto',
        repo: 'HumbleMC/HumbleLoader',
        docsRepo: 'HumbleMC/website',
        docsDir: 'vuepress/docs',
        editLinks: true,
		smoothScroll: true,
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                ariaLabel: 'Select language',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated'
            },
            '/zh/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新'
            }
        }
    }
}