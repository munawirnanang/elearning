import Navigation from '@/app/Inc/navigation'
import Footer from '@/app/Inc/footer';

import Hero from '@/app/HomePage/hero';
import Feature from '@/app/HomePage/feature';
import Faq from '@/app/HomePage/faq';
import Testimonials from '@/app/HomePage/testimonials';

import Products from '@/app/ProductPage/products';

import DetailProduct from '@/app/DetailProductPage/detailProduct';

import Dashboard from '@/app/DashboardPage/dashboard_u2';

import Course from '@/app/CoursePage/course';

import Listcourse from '@/app/ListCoursePage/listCourse_u2';

import Formcourse from './FormCoursePage/formCourse_u2';


export default function Home () {
  return (
    <>
      <Navigation />
      <Hero />
      <Feature />
      <Faq />
      <Testimonials />
      <Products />
      <DetailProduct />
      <Dashboard />
      <Course />
      <Listcourse />
      <Formcourse />
      <Footer />
    </>
  );
}