import React from 'react';
import HeroSection from '../components/HeroSection';
import Header from '../components/common/Header';
import ProductShowcase from '../components/ProductShowcase';
import FeelSpecial from '../components/common/FeelSpecial';
import CredExperience from '../components/CredExperience';
import CredSecurity from '../components/CredSecurity';
import BrandsLove from '../components/BrandsLove';
import WindowPeak from '../components/Windowpeak';
import MobileScroll from '../components/MobileScroll';
import CredStory from '../components/CredStory';
import AppRating from '../components/AppRating';
const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandsLove />
      <CredExperience />
      <MobileScroll />
      <div className='non-mobile'>
      <WindowPeak />
      </div>
      
      <CredSecurity />
      <CredStory />
      <AppRating />
      
    </>
  )
}

export default HomePage;