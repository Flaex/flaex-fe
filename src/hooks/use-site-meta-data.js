import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          image
          type
          siteUrl
          titleTemplate
          twitterUsername
          facebookDomainVerification
          facebookAppId
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
