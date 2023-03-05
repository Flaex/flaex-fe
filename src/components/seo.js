import React from "react";
import { useSiteMetadata } from "../hooks/use-site-meta-data";

export const SEO = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    type,
    twitterUsername,
    titleTemplate,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
    type,
    siteUrl
  };

  return (
    <>
      <title>{seo.title + titleTemplate}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title + titleTemplate} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:url" content={seo.siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.siteUrl} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {children}
    </>
  );
};

export default SEO;
