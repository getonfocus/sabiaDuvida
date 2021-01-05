import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Brands from '@sections/Brands';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Events from '@sections/Events';
import ContactUs from '@sections/ContactUs';
import Footer from '@sections/Footer';



const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Brands />
    <Team />
    <Faq />
    <Events />
    <ContactUs />
    <Footer />
    
  </Layout>
);

export default IndexPage;
