# gatsby-source-gitlab-api

A Gatsby plugin to retrieve data from Gitlab
> The plugin uses https://github.com/jdalrymple/gitbeaker under the hood.

Learn more about [Gatsby](https://www.gatsbyjs.org/) and its plugins here: [https://www.gatsbyjs.org/docs/plugins/](https://www.gatsbyjs.org/docs/plugins/) <br />

## Install

```bash
npm install gatsby-source-gitlab-api
```

## How to use

```js
// gatsby-config.js
plugins: [
  {
    resolve: `gatsby-source-gitlab-api`,
    options: {
      // Put your gitlab access token here
      // docs -> https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html
      accessToken: 'YOUR-GITLAB-ACCESS-TOKEN',
    }
  },
]
```

## GraphQL Queries

To see all possible queries please use the GraphiQL editor which is available under ``http://localhost:8000/___graphql``

### Get all projects of the user:

```graphql
query {
  allGitlab {
    edges {
      node {
        id
        description
      }
    }
  }
}
```

## License
[MIT](./license) &copy; [Umut Tufanoglu](https://twitter.com/utdev28/). <br />
[Buy me a coffee](https://www.buymeacoffee.com/xle6nFH)