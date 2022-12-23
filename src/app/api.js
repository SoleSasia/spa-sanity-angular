const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'butoupa4',
  dataset: 'production',
  apiVersion: '2022-12-22', // use current UTC date - see "specifying API version"!
  //token: 'sanity-auth-token', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})