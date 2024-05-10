/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import { useState } from 'react';
import { Merriweather } from 'next/font/google';
const merriweather = Merriweather({ weight: '400', subsets: ['latin'] });

const navList = [
  {
    name: 'Etusivu',
    href: '/',
  },
  {
    name: 'In-Game',
    href: '/in-game',
  },
  {
    name: 'Käytäntö',
    href: '/kaytanto',
  },
  {
    name: 'Hae mukaan',
    href: '/haku',
  },
  {
    name: 'Taustalla',
    href: '/taustalla',
  },
];
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className={`${merriweather.className}`}>
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row text-lg whitespace-nowrap text-palette-4">
        {navList.map((item) => (
          <Link
            className="mx-2 p-2 text-center hover:bg-white hover:bg-opacity-10 transition-all duration-300"
            key={item.name}
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden flex-col whitespace-nowrap text-palette-4">
        <button onClick={() => setOpen(!open)}>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect
              className="fill-palette-4"
              y="10"
              width="100"
              height="10"
            ></rect>
            <rect
              className="fill-palette-4"
              y="35"
              width="100"
              height="10"
            ></rect>
            <rect
              className="fill-palette-4"
              y="60"
              width="100"
              height="10"
            ></rect>
          </svg>
        </button>

        <div
          className={`pb-96 flex flex-col justify-center text-center -z-10 transition-all duration-500 ease-in-out bg-black backdrop-blur-sm bg-opacity-80 absolute top-20 left-0 w-screen h-screen overflow-hidden ${
            open ? ' left-0 opacity-100' : 'left-[100%] opacity-0'
          }`}
        >
          {' '}
          {navList.map((item) => (
            <Link
              className="py-4 text-3xl"
              onClick={() => setOpen(!open)}
              key={item.name}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
