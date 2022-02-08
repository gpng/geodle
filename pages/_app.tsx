import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import React, { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        title="Geodle :: Singapore MRT & LRT Stations"
        description="How familiar are you with Singapore MRT & LRT stations?"
        additionalLinkTags={[
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/static/favicon/apple-touch-icon.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/static/favicon/favicon-32x32.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/static/favicon/favicon-16x16.png',
          },
          {
            rel: 'manifest',
            href: '/static/favicon/site.webmanifest',
          },
        ]}
      />
      <ChakraProvider resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
