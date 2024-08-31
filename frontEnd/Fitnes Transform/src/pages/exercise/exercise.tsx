import React from 'react'
import { PageHeader } from '../../components/pageHeader'

import './exercise.css'

export const ExercisePage = () => {
    function me(input: string){
    alert("you clicked this " + input);
    return true
}
const exercisePageBredcrumbs = [{ page : 'Home' , pageUrl: '/'},{page:'Exercise',pageUrl:'/Exercise' }]
  return (
    <>
        <PageHeader pageTitile={"Exercise"} pageBreadcrums={exercisePageBredcrumbs}/>
        <div className='exercise-header'>
            <h3>Explore Workouts</h3>
            <div className='exercise-options-container'>
                <span onClick={()=> {me("bodyparts")}}>BodyParts</span>
                <span onClick={()=> {me("bodyparts")}}>Equipment</span>
                <span onClick={()=> {me("bodyparts")}}>Target Muscle </span>
            </div>
        </div>
        <div className='exercise-results-container'>
          <div className='exercise-results-wrapper'>
            {/* <div className='exercise-results-scroll-start'></div> */}
          <div className='exercise-results-scroll'>
                <p>Back</p>
                <p>Cardio</p>
                <p>Chest </p>
                <p>Lower Arms</p>
                <p>Neck</p>
                <p>Target Muscle </p>
                <p>Back</p>
                <p>Cardio</p>
                <p>Chest </p>
                <p>Lower Arms</p>
                <p>Neck</p>
                <p>Target Muscle </p>
           </div>
          </div>
        </div>
        <div className='exercise-content-container'>
            <div className='exercise-options-container'> 
                <h3>Exercise Body Parts</h3>
                <div className='exercise-options-wrapper'>
                    <p>All Four Squad Strech</p>
                    <p>All Four Squad Strech</p>
                    <p>All Four Squad Strech</p>
                    <p>All Four Squad Strech</p>
                    <p>All Four Squad Strech</p>
                    <p>All Four Squad Strech</p>
                </div>
            </div>
            <div className='exercise-container'>
                <div className='exercise-content-heading'>
                    <p>Exercise Name</p>
                    <p>All Four Squad Strech</p>
                </div>
                <div className='exercise-details-container'>
                    <div className='exercise-details-wrapper'>
                        <div className='exercise-details'>
                            <p>Body Part</p>
                            <p>Upper Legs</p>
                        </div>
                        <div className='exercise-details'>
                            <p>Target</p>
                            <p>Quads</p>
                        </div>
                        <div className='exercise-details'>
                            <p>Equipment</p>
                            <p>Body Weight</p>
                        </div>
                        <div className='exercise-details-second-container'>
                            <p>Secondary <br /> Muscles</p>
                            <div className='exercise-details-second'>
                                <p>Hamstrings</p>
                                <p>Hamstrings</p>
                            </div>
                        </div>
                    </div>
                    <div className='exercise-instructions-container'>
                        <h3>Instructions</h3>
                        <div className='exercise-instructions'>
                            <p> Start on all fours with your hands directly under your shoulders and your knees directly under your hips. Extend one leg straight back, keeping your knee bent and your foot flexed. Slowly lower your hips towards the ground, feeling a stretch in your quads. Hold this position for 20-30 seconds. Switch legs and repeat the stretch on the other side."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
