import Navigation from '@/components/public/header/header';
import Footer from '@/components/public/footer/footer';

import ProductGrid from '@/features/public/product/product-grid';

export default function ProductPage() {
  return (
    <>
      <Navigation />
      <ProductGrid />
      <Footer />
    </>
  );
}     