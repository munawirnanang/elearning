import Navigation from '@/components/public/header/header';
import Footer from '@/components/public/footer/footer';

import DetailProduct from '@/features/public/detailProduct/detail-product';

export default function DetailProductPage() {
  return (
    <>
      <Navigation />
      <DetailProduct />
      <Footer />
    </>
  );
}