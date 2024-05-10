import { AppProps } from 'next/app';
import Layout from '../components/layout';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';

// Font imports
import { Merriweather } from 'next/font/google';
const merriweather = Merriweather({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-merriweather',
});

import { Cinzel_Decorative } from 'next/font/google';
const cinzel = Cinzel_Decorative({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cinzel',
});
import { Della_Respira } from 'next/font/google';

const della = Della_Respira({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-della',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div
        className={`${cinzel.variable} ${merriweather.variable} ${della.variable}`}
      >
        <AnimatePresence mode='wait'>
          <Component {...pageProps} />
        </AnimatePresence>
      </div>
    </Layout>
  );
}
