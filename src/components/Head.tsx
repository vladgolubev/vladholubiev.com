import Head from 'next/head';
import React from 'react';

export default function () {
  return (
    <Head>
      <meta charSet="utf-8" />

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-108459948-1" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];

        function gtag() {
          dataLayer.push(arguments);
        }

        if (window.location.hostname !== 'localhost') {
          gtag('js', new Date());
          gtag('config', 'UA-108459948-1');
        }
        `
        }}
      />
      <meta name="author" content="Vladyslav Holubiev" />
      <meta
        name="description"
        content="I enjoy building hip back-end tech using Node.js, TypeScript and AWS. Most of the time I design serverless event-driven architectures and REST/GraphQL APIs."
      />
      <meta name="viewport" content="width=900" />

      <link rel="apple-touch-icon-precomposed" href="/static/favicon-256.png" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content="/static/favicon-256.png" />
      <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/static/favicon-256.png" />
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon-256.png" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@vladholubiev" />
      <meta name="twitter:creator" content="@vladholubiev" />

      <title>Vlad Holubiev</title>
    </Head>
  );
}
