const { Gitlab } = require('@gitbeaker/node');

exports.onPreInit = () => console.log("Loaded gatsby-source-gitlab-api")

const GITLAB_NODE_TYPE = `Gitlab`

exports.sourceNodes = async ({
    actions,
    createContentDigest,
    createNodeId,
}, configOptions) => {
    
    if (!configOptions.accessToken) {
        console.error('You need to enter an accessToken');
    }

    const { createNode } = actions;

    const api = new Gitlab({
        token: configOptions.accessToken || 'x',
    });

    const projects = await api.Projects.all();

    projects.forEach(project =>
        createNode({
            ...project,
            id: createNodeId(`${GITLAB_NODE_TYPE}-${project.id}`),
            parent: null,
            children: [],
            internal: {
                type: GITLAB_NODE_TYPE,
                content: JSON.stringify(project),
                contentDigest: createContentDigest(project),
            },
        })
    )

    return;
};
