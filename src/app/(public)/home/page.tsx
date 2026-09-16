import Navigation from '@/components/public/header/header';
import Footer from '@/components/public/footer/footer';

import Home from '@/features/public/home/home';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <Home />
      <Footer />
    </>
  );
}