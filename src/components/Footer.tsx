import Link from 'next/link';

export const Footer = () => {
  const currentyear = new Date().getFullYear();
  return (
    <footer>
      <div>
        <p>© {currentyear} Life Beyond Team - Creative Commons BY-SA 4.0</p>
        <p>enterlifebeyond@gmail.com</p>
      </div>

      <div className='flex flex-col'>
        <Link
          className='text-pink-600 text-xl font-bold'
          target='_blank'
          href='https://blush.lifebeyond.fi/'
        >
          BLUSH
        </Link>
        <Link
          className='text-green-600 text-xl font-bold'
          target='_blank'
          href='https://gk.lifebeyond.fi/'
        >
          Green Knights
        </Link>
        <Link
          className='text-cyan-600 text-xl font-bold'
          target='_blank'
          href='https://kuunsilta.lifebeyond.fi/'
        >
          Kuunsilta
        </Link>
      </div>
    </footer>
  );
};
