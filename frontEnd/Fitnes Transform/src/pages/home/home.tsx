import React from 'react'
import './home.css'
import {YellowBanner} from '../../components/yellowBanner'
import {Featuers} from '../../components/featuers'
import {Explore} from '../../components/explore'
import {ProductFeatuer} from '../../components/productFeatuer'
import {ParallexBanner} from '../../components/parallexBanner'
import {ClassSchedule} from '../../components/classSchedule'

export const Home = () => {
  return (
   <>
     <section className='hero-container'>
      <div className='hero-text-container'>
        <p className='hero-header'>Transform Your Fitness Journey</p>
        <p className='hero-header-subtext'>We empower you to reach your full potential</p>
      </div>
    </section>

      <YellowBanner />
      <Featuers />
      <Explore />
      <ProductFeatuer />
      <ParallexBanner />
      <ClassSchedule />
   </>
  )
}
