export default {
    title: 'Portfolio',
    name: 'portfolio',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'URL',
            type: 'slug',
            description: 'We recommend clicking generate. Changing URL after publishing may cause broken pages',
            options: {
              source: "title",
            },
          },
          {
            title: 'Coming Soon',
            name: 'comingSoon',
            type: 'boolean'
          },
          {
            title: 'Address',
            name: 'address',
            type: 'string'
          },
          {
            title: 'Number of Floors',
            name: 'floors',
            type: 'string'
          },
          {
            title: 'Number of Units',
            name: 'units',
            type: 'string'
          },
          {
            title: 'Built in',
            name: 'builtIn',
            type: 'string'
          },
          {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
          },
          {
            title: 'Search Engine Optimization',
            name: 'seo',
            type: 'seo'
          }
    ]
}