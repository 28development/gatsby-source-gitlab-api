const { Gitlab } = require('@gitbeaker/node');

exports.onPreInit = () => console.log("Loaded gatsby-source-gitlab-api")

exports.sourceNodes = async ({ 
    actions,
    configOptions
}) => {

    if (!configOptions.accessToken) {
        console.error('You need to enter an accessToken');
    }
  
    const { createNode } = actions

    const api = new Gitlab({
        token: configOptions.accessToken || 'x',
    });

    const projects = await api.Projects.all();

    projects.forEach(project =>
        createNode({
            ...project,
        })
    )

    return;
};