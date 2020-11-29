import React from 'react'
import { AboutSection } from '../components/AboutSection'
import { FaqSection } from '../components/FaqSection'
import { ServicesSections } from '../components/ServicesSections'
// Page Components

// Animation
import {motion} from 'framer-motion';
import { pageAnimation } from '../animation';
import { ScrollTop } from '../components/ScrollTop';


export const ABoutUs = () => {


  return (
    <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
      <AboutSection />
      <ServicesSections />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
}
