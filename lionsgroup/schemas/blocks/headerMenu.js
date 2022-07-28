export default {
    title: 'Header Menu',
    name: 'headerMenu',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,

    },
    fields: [
        {
            title: 'Left navigation',
            name: 'leftNav',
            description: 'Select menu for left side navigation',
            type: 'reference',
            to: { type: 'navigation' },
        },
        {
            title: 'Right navigation',
            name: 'rightNav',
            description: 'Select menu for right side navigation',
            type: 'reference',
            to: { type: 'navigation' },
        },
        {
            name: 'headerColor',
            title: 'Header color',
            type: 'color'
          }
    ]
}