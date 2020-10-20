export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8edaf4ea76e600a5bc1d3a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kok344rz',
                  apiId: '14ae7212-706c-4267-875f-22e7b4bbb054'
                },
                {
                  buildHookId: '5f8edaf4e76788014a8fcdfe',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-jazmx2t4',
                  apiId: '924b0f44-384a-4ee4-887b-0c84e1ca17a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ioannisth/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-jazmx2t4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
