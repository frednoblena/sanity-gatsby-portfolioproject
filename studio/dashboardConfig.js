export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '614599225f8f92023f92aa42',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolioproject-studio',
                  apiId: '54dfc4c7-9a47-4155-9eab-aa69039e75d8'
                },
                {
                  buildHookId: '6145992295e70fe9ab7b5d77',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolioproject',
                  apiId: '4e58530d-f368-416b-9517-64f13a32d08d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/frednoblena/sanity-gatsby-portfolioproject',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolioproject.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
