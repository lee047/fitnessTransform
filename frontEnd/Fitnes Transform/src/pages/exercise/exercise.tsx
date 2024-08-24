import React from 'react'
import { PageHeader } from '../../components/pageHeader'

import './exercise.css'

export const ExercisePage = () => {
    
const exercisePageBredcrumbs = [{ page : 'Home' , pageUrl: '/'},{page:'Exercise',pageUrl:'/Exercise' }]
  return (
    <>
        <PageHeader pageTitile={"Contact Us"} pageBreadcrums={exercisePageBredcrumbs}/>
        <div className='exercise-header'>
            <h3>ExercisePage</h3>
            <div className='exercise-options-container'>
                <span>BodyParts</span>
                <span>Equipment</span>
                <span>Target Muscle </span>
            </div>
            <div className='exercise-results-container'>
                <span>Back</span>
                <span>Cardio</span>
                <span>Chest </span>
                <span>Lower Arms</span>
                <span>Neck</span>
                <span>Target Muscle </span>
            </div>
        </div>
    </>
  )
}
