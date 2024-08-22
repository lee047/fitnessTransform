import React from 'react'
import '../pages/home/home.css'

export const ClassSchedule = () => {
  return (
    <div className='class-scheduler-container'>
        <h1 className='section-header'> Class Scheduler</h1>
        <div className='class-scheduler-options-container'>
            <a href=''>All</a>
            <a href=''>Gym</a>
            <a href=''>Yoga</a>
            <a href=''>Plates</a>
        </div>
        <div className='class-scheduler-results'>

        </div>
    </div>
  )
}
