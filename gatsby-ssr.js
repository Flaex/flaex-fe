import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/ubuntu-condensed-v16-latin/ubuntu-condensed-v16-latin-regular.ttf"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="ubuntuCondensedRegular"
    />,
    <link
      rel="preload"
      href="/fonts/ubuntu-condensed-v16-latin/ubuntu-condensed-v16-latin-regular.woff"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="ubuntuCondensedRegular"
    />,
    <link
      rel="preload"
      href="/fonts/ubuntu-condensed-v16-latin/ubuntu-condensed-v16-latin-regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="ubuntuCondensedRegular"
    />,

    /* */

    <link
      rel="preload"
      href="/fonts/ubuntu-v20-latin/ubuntu-v20-latin-300.ttf"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="ubuntuLight"
    />,
    <link
      rel="preload"
      href="/fonts/ubuntu-v20-latin/ubuntu-v20-latin-300.woff"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="ubuntuLight"
    />,
    <link
      rel="preload"
      href="/fonts/ubuntu-v20-latin/ubuntu-v20-latin-300.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="ubuntuLight"
    />,

    /* */

    <link
      rel="preload"
      href="/fonts/ubuntu-v20-latin/ubuntu-v20-latin-regular.ttf"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="ubuntuRegular"
    />,
    <link
      rel="preload"
      href="/fonts/ubuntu-v20-latin/ubuntu-v20-latin-regular.woff"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="ubuntuRegular"
    />,
    <link
      rel="preload"
      href="/fonts/ubuntu-v20-latin/ubuntu-v20-latin-regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="ubuntuRegular"
    />,
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1246144389550485"
      crossOrigin="anonymous"
      key="GoogleAds"
    ></script>,
  ]);
};
