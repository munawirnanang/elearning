import Hero from '../../components/shared/hero/hero';
import Feature from '../../components/shared/feature/feature';
import Faq from '../../components/shared/faq/faq';
import Testimonials from '../../components/shared/testimonial/testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Feature />
      <Faq />
      <Testimonials />
    </>
  );
}