import { Header } from './Header';
import { Footer } from './Footer';
import { motion } from 'framer-motion';

const layoutVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <motion.div
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 2 }}
        variants={layoutVariants}
      >
        {children}
      </motion.div>
      <Footer />
    </>
  );
}
