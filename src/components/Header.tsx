import { Navbar } from './Navbar';
import Image from 'next/image';

// LOGO FONT
import { Cinzel_Decorative } from 'next/font/google';
const cinzel = Cinzel_Decorative({ weight: '400', subsets: ['latin'] });

export const Header = () => {
  return (
    <header>
      {/* LOGO */}
      <Image src='/mglogo.png' alt='logo' width={50} height={50} />
      <div className='absolute -top-24 -left-24 w-48 h-48 bg-black -z-40 border border-palette-4 rotate-45' />

      {/* TITLE */}
      <div>
        <div
          className={`${cinzel.className} text-xl md:text-3xl text-palette-4 whitespace-nowrap`}
        >
          Life Beyond
        </div>
        <div
          className={`${cinzel.className} -mt-2 pt-0 text-palette-4 whitespace-nowrap text-center`}
        >
          ~ the Veil ~
        </div>
      </div>

      {/* NAVIGATION */}
      <Navbar />
    </header>
  );
};
