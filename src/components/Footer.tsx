import Link from 'next/link';

export const Footer = () => {
  const currentyear = new Date().getFullYear();
  return (
    <footer>
      <div>
        <p>© {currentyear} Life Beyond Team - Creative Commons BY-SA 4.0</p>
        <p>enterlifebeyond@gmail.com</p>
      </div>

      <div className="flex flex-col"></div>
    </footer>
  );
};
