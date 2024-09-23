import React, {useRef} from 'react'
import '../pages/home/home.css'
import {motion, useScroll} from 'framer-motion'


export const Featuers = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ["0 1", "1.33 1"],
    })
  return (
    <>
    <section className='first-featuer-container'>
        <motion.div ref={sectionRef} style={{ scale: scrollYProgress, opacity: scrollYProgress}} className='featuers-wrapper'>
            <img src='../../public/images/featuers-1.png' alt="" />
            <div className='featuers-text-wrapper'>    
                <p> Get Fit for Summer</p>
                <h3>Energizing Workouts to Shape Your Best Self</h3>
            </div>
        </motion.div>
        <motion.div ref={sectionRef} style={{ scale: scrollYProgress, opacity: scrollYProgress}} className='featuers-wrapper'>
            <img src='../../public/images/featuers-2.jpg' alt="" />
            <div className='featuers-text-wrapper'>    
                <p> Get Fit for Summer</p>
                <h3>Energizing Workouts to Shape Your Best Self</h3>
            </div>
        </motion.div>
        <motion.div ref={sectionRef} style={{ scale: scrollYProgress, opacity: scrollYProgress}} className='featuers-wrapper'>
            <img src='../../public/images/featuers-3.jpg' alt="" />
            <div className='featuers-text-wrapper'>    
                <p> Get Fit for Summer</p>
                <h3>Energizing Workouts to Shape Your Best Self</h3>
            </div>
        </motion.div>
        {/* <img src="../../public/images/featuers-2.jpg" alt="" />
        <img src="../../public/images/featuers-3.jpg" alt="" /> */}
    </section>
    </>
  )
}
