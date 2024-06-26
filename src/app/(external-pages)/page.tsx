import CTA from '@/components/CTA/CTA';
import FAQ from '@/components/FAQ/FAQ';
import FeatureCrd from '@/components/FeatureCard/FeatureCrd';
// import FeatureCard from '@/components/FeatureCard/FeatureCard'
import Home from '@/components/Home/Home';
import IntegrationSec from '@/components/IntegrationSec/IntegrationSec';
import LogoScroll from '@/components/LogoScroll/LogoScroll';
import Pricing from '@/components/Pricing/Pricing';
import Quotetion from '@/components/Quotetion/Quotetion';
import Testinomial from '@/components/Testinomial/Testinomial';
import React from 'react';

const page = () => {
  return (
    <>
      <div>
        <Home />
        <LogoScroll />
        {/* <FeatureCard /> */}
        <FeatureCrd />
        <Quotetion />
        <IntegrationSec />
        <Testinomial />
        {/* Testinomial error de rha h  */}
        <Pricing />
        <FAQ />
        <CTA />
      </div>
    </>
  );
};

export default page;
