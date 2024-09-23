import React, {useRef} from 'react'
import '../pages/home/home.css'
import {motion, useScroll} from 'framer-motion'
export const ProductFeatuer = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
      target: sectionRef,
      offset: ["0 1", "1.33 1"],
  })
  return (
    <div className='product-featuer-container'>
      <motion.div ref={sectionRef} style={{ scale: scrollYProgress, opacity: scrollYProgress}}>
        <img src="../../public/images/product-featuer-1.jpg" alt="" />
      </motion.div> 
      <motion.div ref={sectionRef} style={{ scale: scrollYProgress, opacity: scrollYProgress}} className='product-featuer-text-container'>
          <h3>Promote Eco-Friendly Workout Gear</h3>
      </motion.div>
      <motion.div ref={sectionRef} style={{ scale: scrollYProgress, opacity: scrollYProgress}}>
        <img src="../../public/images/product-feature-2.jpg" alt="" />
      </motion.div>
    </div>
  )
}
