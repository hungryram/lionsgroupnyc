const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = async ({node, getNode, actions, store, cache, getCache, createContentDigest }) => {

    const { createNode } = actions;

    // Generate Blog Post Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'blog' && node.base !== '_index.md'){
        const markdownNode = await getNode(node.children[0])
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNode({
            ...markdownNode,
            id: `${node.id}-blog`,
            slug: slug,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Blog',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }

    

    // Generate Legal Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'legal' && node.base !== '_index.md'){
        const markdownNode = await getNode(node.children[0])
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNode({
            ...markdownNode,
            id: `${node.id}-legal`,
            slug: slug,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Legal',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }

    // Generate Portfolio Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'portfolio' && node.base !== '_index.md'){
        const markdownNode = await getNode(node.children[0])
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNode({
            ...markdownNode,
            id: `${node.id}-portfolio`,
            slug: slug,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Portfolio',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }

    if(node.internal.type === 'File' && node.sourceInstanceName === 'comingsoon' && node.base !== '_index.md'){
        const markdownNode = await getNode(node.children[0])
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNode({
            ...markdownNode,
            id: `${node.id}-comingsoon`,
            slug: slug,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'ComingSoon',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }

}