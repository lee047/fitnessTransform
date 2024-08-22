import React from 'react'
import '../pages/home/home.css'

export const Featuers = () => {
  return (
    <>
    <section className='first-featuer-container'>
        <div className='featuers-wrapper'>
            <img src='../../public/images/featuers-1.png' alt="" />
            <div className='featuers-text-wrapper'>    
                <p> Get Fit for Summer</p>
                <h3>Energizing Workouts to Shape Your Best Self</h3>
            </div>
        </div>
        <div className='featuers-wrapper'>
            <img src='../../public/images/featuers-2.jpg' alt="" />
            <div className='featuers-text-wrapper'>    
                <p> Get Fit for Summer</p>
                <h3>Energizing Workouts to Shape Your Best Self</h3>
            </div>
        </div>
        <div className='featuers-wrapper'>
            <img src='../../public/images/featuers-3.jpg' alt="" />
            <div className='featuers-text-wrapper'>    
                <p> Get Fit for Summer</p>
                <h3>Energizing Workouts to Shape Your Best Self</h3>
            </div>
        </div>
        {/* <img src="../../public/images/featuers-2.jpg" alt="" />
        <img src="../../public/images/featuers-3.jpg" alt="" /> */}
    </section>
    </>
  )
}
