import Hero from '@/features/public/home/ui/hero';
import ProductCarousel from '@/features/public/home/ui/product-carousel';
import Feature from '@/features/public/home/ui/feature';
import Faq from '@/features/public/home/ui/faq';
import Testimonials from '@/features/public/home/ui/testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCarousel />
      <Feature />
      <Faq />
      <Testimonials />
    </>
  );
}