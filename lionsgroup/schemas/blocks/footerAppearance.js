export default {
    title: 'Footer',
    name: 'footerAppearance',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,

    },
    fields: [
        {
            title: 'Footer Logo',
            name: 'footerLogo',
            type: 'image'
        },
        {
            name: "quickLinks",
            type: "array",
            title: "Quick links",
            of: [{ type: "navigationItem" }]
          },
    ]
}