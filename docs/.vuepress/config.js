module.exports = {
  title: `Armouy's Blog`,
  description: '未来可期',
  base: '/',
  themeConfig: {
    search: false,      // 关闭搜索栏
    lastUpdated: 'Last Updated', // 最后更新时间
    nav: [
      {
        text: 'Blog',
        ariaLabel: 'Blog Menu',
        items: [
          { text: 'JavaScript', link: '/JavaScript/' },
          { text: 'TypeScript', link: '/TypeScript/' },
          { text: 'Vue', link: '/Vue/' },
          { text: 'React', link: '/React/' },
          { text: '项目经验', link: '/Project/' },
          { text: '面试题库', link: '/Interview/' },
          { text: '随笔', link: '/Essays/' }
        ]
      },
      { text: 'CSDN', link: 'https://blog.csdn.net/qq_34086980', target:'_blank' },
      { text: 'Github', link: 'https://github.com/Middletwo-Kid', target:'_blank' },
    ],
    sidebar: {
      "/JavaScript/": [{
        title: 'JavaScript', 
				children: [
					{ title: '事件循环', path:'/JavaScript/01', collapsable: false,},
					{ title: 'Promise', path:'/JavaScript/02', collapsable: false,}
				]
      }],
      "/TypeScript/": [{
        title: 'TypeScript',
        collapsable: false, 
				children: [
					{ title: '什么是TypeScript', path:'/TypeScript/'}
				]
      }],
      "/React/": [{
        title: 'React',
        collapsable: false, 
				children: [
					{ title: '对比shouldComponentUpdate、pureComponent和memo', path:'/React/01'},
					{ title: 'React hook', path:'/React/02'}
				]
      }]
    }
  },
}
