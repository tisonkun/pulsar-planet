// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Pulsar Planet',
    tagline: 'Welcome to The Pulsar Planet!',
    url: 'https://pulsar-planet.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    path: 'connect',
                    routeBasePath: '/connect',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/tisonkun/pulsar-planet/tree/main',
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/tisonkun/pulsar-planet/tree/main',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'The Pulsar Planet',
                logo: {
                    alt: 'Pulsar Planet Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'dropdown',
                        position: 'right',
                        label: 'Learn',
                        className: 'navbar-item',
                        items: [
                            {
                                to: '/scenarios/overview',
                                label: 'Scenarios',
                                className: 'navbar-item',
                            },
                        ]
                    },
                    {
                        type: 'dropdown',
                        position: 'right',
                        label: 'Build',
                        className: 'navbar-item',
                        items: [
                            {
                                to: '/connect/overview',
                                label: 'Connect to Pulsar',
                                className: 'navbar-item',
                            },
                            {
                                to: '/integration/overview',
                                label: 'Integrate with Pulsar',
                                className: 'navbar-item',
                            },
                        ],
                    },
                    {
                        type: 'dropdown',
                        position: 'right',
                        label: 'Community',
                        className: 'navbar-item',
                        items: [
                            {
                                to: 'https://pulsar-summit.org/',
                                label: 'Pulsar Summit Conference',
                                className: 'navbar-item',
                            },
                            {
                                to: 'https://github.com/apache/pulsar/discussions',
                                label: 'Ask the Community',
                                className: 'navbar-item',
                            },
                        ]
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [],
                copyright: `Copyright © ${new Date().getFullYear()} The Pulsar Planet Community. All Rights Reserved.<br/>`
                    + `Apache, Pulsar, Apache Pulsar, and the Apache feather logo are trademarks or registered trademarks of The Apache Software Foundation.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['java', 'http'],
            },
        }),
    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
                indexDocs: false,
                indexPages: true,
            }
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'scenarios',
                path: 'scenarios',
                routeBasePath: '/scenarios',
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
                sidebarPath: require.resolve('./sidebars.js'),
                editUrl: 'https://github.com/tisonkun/pulsar-planet/tree/main',
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'integration',
                path: 'integration',
                routeBasePath: '/integration',
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
                sidebarPath: require.resolve('./sidebars.js'),
                editUrl: 'https://github.com/tisonkun/pulsar-planet/tree/main',
            },
        ],
    ]
};

module.exports = config;
