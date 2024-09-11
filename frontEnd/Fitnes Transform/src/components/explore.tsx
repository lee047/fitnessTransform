import React from 'react'
import '../pages/home/home.css'

export const Explore = () => {
  return (
    <div className='explore-exercise-hero'>
      <h1>Explore Workouts and Exercises</h1>
      <div className='explore-exercise-wrapper'>
        <div className='explore-exercise-results-wrapper'>
        <div><img src='../../public/images/arrow-right-solid-black.png'/></div>
         <div className='explore-exercise-results'>
          <p>Squats</p>
          <p>Squats</p>
          <p>Squats</p>
          <p>Squats</p>
          <p>Squats</p>
          <p>Squats</p>
         </div>
         <div><img src='../../public/images/arrow-right-solid-black.png'/></div>
        </div>
        <div className='explore-exercise-options-wrapper'>
        <div><img src='../../public/images/arrow-right-solid-black.png'/></div>
          <div className='explore-exercise-options'>
            <p>Legs</p>
            <p>Legs</p>
            <p>Legs</p>
            <p>Legs</p>
            <p>Legs</p>
            <p>Legs</p>
          </div>
          <div><img src='../../public/images/arrow-right-solid-black.png'/></div>
        </div>
      </div>
    </div>
  )
}
