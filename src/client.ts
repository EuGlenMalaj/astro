import * as prismic from '@prismicio/client'

const routes = [
  {
    type: 'project',
    path: '/projects',
  },
  {
    type: 'cv_entry',
    path: '/resume',
  }
]

const repoName = 'glenmalaj'
const endpoint = prismic.getRepositoryEndpoint(repoName)
export const client = prismic.createClient(endpoint, { routes, fetch, accessToken: import.meta.env.PRISMIC_ACCESS_TOKEN })
