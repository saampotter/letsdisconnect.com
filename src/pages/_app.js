import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import '@/styles/tailwind.css';
import seoConfig from '../../seo.config';

import { ProvideApi } from '@/hooks/useApi';

const App = ({ Component, pageProps }) => (
  <ProvideApi>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <DefaultSeo {...seoConfig} />
    <Component {...pageProps} />
  </ProvideApi>
);

export default App;
