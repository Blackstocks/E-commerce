import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Home_Footer from '../components/Home-Footer'
import Funfact from '../components/funfact'

import Brand from "../components/Brand"
import ActionCall from "../components/Call"
const Home = () => {
  return (
    <div>
    
      <Hero />
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
     
      <Funfact/>
   
      <Brand/>
      <ActionCall/>
      
    </div>
  )
}

export default Home
