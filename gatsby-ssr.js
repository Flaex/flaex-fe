import * as React from "react";

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
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
  setPostBodyComponents([
    <script key="FacebookPixel">
      {`!function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '343133101556439');
    fbq('track', 'PageView');`}
    </script>,
  ]);
};
