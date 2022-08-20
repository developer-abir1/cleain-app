import React from 'react';
import Layout from '../../Layout';
import Header from '../Header/Header';
import Package from '../package/Package';
import Products from '../products/Product/Products';
import Review from '../review/Review';
import Services from '../servers/Services';

export default function Home() {
  return (
    <Layout>
      <Header />
      <Services />
      <Products />
      <Package />
      <Review />
    </Layout>
  );
}
