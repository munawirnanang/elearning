import Navigation from '@/components/public/header/header';
import Footer from '@/components/public/footer/footer';

import DetailProduct from '@/features/public/detail-product/detail-product';

export default function DetailProductPage() {
  return (
    <>
      <Navigation />
      <DetailProduct />
      <Footer />
    </>
  );
}