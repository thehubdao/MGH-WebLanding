import '../styles/globals.css';
import { Work_Sans, Poppins } from '@next/font/google';
import Humane from '@next/font/local';
import NeuePlak from '@next/font/local';
import ToogleIcons from '@next/font/local';
import SocialIcons from '@next/font/local';
import type { AppProps } from 'next/app';
import DefaultLayout from '../layouts/defatultLayout';

const workSans = Work_Sans({ subsets: ['latin'], display: 'block' });
const poppins = Poppins({ subsets: ['latin'], display: 'block', weight: '700' });
const humane = Humane({ src: '../styles/fonts/Humane-Medium.woff2', display: 'block' });
const toogleIcons = ToogleIcons({src: '../styles/fonts/icomoon-toogle-x.ttf', display: 'block'});
const socialIcons = SocialIcons({src: '../styles/fonts/icomoon.ttf', display: 'block'});
const neuePlak = NeuePlak({src: [{path: '../styles/fonts/Neue-Plak-Black.ttf', style: 'normal', weight:'900'}, {path: '../styles/fonts/Neue-Plak-Regular.ttf', style: 'normal', weight:'400'}, {path: '../styles/fonts/Neue-Plak-Extended-Black.ttf', style: 'normal', weight:'900'}], display: 'block' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --work-font: ${workSans.style.fontFamily};
            --humane-font: ${humane.style.fontFamily};
            --poppins-font: ${poppins.style.fontFamily};
            --neue-font: ${neuePlak.style.fontFamily};
            --toggle-icons-font: ${toogleIcons.style.fontFamily};
            --icons-font: ${socialIcons.style.fontFamily};
          }
        `}
      </style>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  )
}
