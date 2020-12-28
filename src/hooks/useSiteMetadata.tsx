import { graphql, useStaticQuery } from 'gatsby'

type SiteMetaData = {
  title: string
  shortHash: string
  hash: string
  branch: string
  lastUpdated: Date
  package: {
    version: string
  }
}
export const useSiteMetadata = (): SiteMetaData => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            shortHash
            hash
            branch
            lastUpdated
            package {
              version
            }
          }
        }
      }
    `
  )

  return {
    ...site.siteMetadata,
    lastUpdated: new Date(site.siteMetadata.lastUpdated),
  }
}

export default useSiteMetadata
