import React, { useState } from 'react'
import { PageHeader } from '../../components/pageHeader'
import {bodyparts, equipments, targets} from '../../../utilities/data'

import './exercise.css'

export const ExercisePage = () => {


    const [TargetData, setTargetData] = useState<string[]>([]);
    const [isMainElementActive, setisMainElementActive] = useState('');
    console.log(TargetData);
    console.log(Array.isArray(TargetData));
    function getTragetData(input: string){
    if(input == "bodyparts"){
        setTargetData(bodyparts);
        setisMainElementActive('bodyparts');
    }
    else if(input == 'equipment'){
        setTargetData(equipments);
        setisMainElementActive('equipment');
    }else if(input == 'target'){
        setTargetData(targets);
        setisMainElementActive('target');
    }
    console.log(TargetData);
    return true
}


const exercisePageBredcrumbs = [{ page : 'Home' , pageUrl: '/'},{page:'Exercise',pageUrl:'/Exercise' }]
  return (
    <>
    
        <PageHeader pageTitile={"Exercise"} pageBreadcrums={exercisePageBredcrumbs}/>
        <div className='exercise-header'>
            <h3>Explore Workouts</h3>
            <div className='exercise-options-container'>
                <span onClick={()=> {getTragetData("bodyparts")}} className={isMainElementActive =='bodyparts' ? 'selected': ''}>BodyParts</span>
                <span onClick={()=> {getTragetData("equipment")}} className={isMainElementActive =='equipment' ? 'selected': ''}>Equipment</span>
                <span onClick={()=> {getTragetData("target")}}    className={isMainElementActive =='target' ? 'selected': ''}>Target Muscle </span>
            </div>
        </div>
        <div className='exercise-results-container'>
          <div className='exercise-results-wrapper'>
          <div className='exercise-results-scroll'>
            {TargetData.length > 0 &&
                   TargetData.map((e) => { return <p>{e}</p>})
                }
            {TargetData.length == 0 && 
            <div className='no-data-wrapper'>
                <p className='no-data'>Please select the categories above</p>
            </div>
            }
           </div>
          </div>
        </div>
        <div className='exercise-content-container'>
            <div className='exercise-suboptions-container'> 
                <h3>Exercise</h3>
                <div className='top-arrow'>
                    <img src='../../../public/images/arrow-right-solid-black.png'/>
                </div>
                <div className='exercise-suboptions-wrapper'>
                    <p>All Four Squad Strech</p>
                    <p>All Four Squad Strech</p>
                    <p>All Four Squad Strech</p>
                    <p>All Four Squad Strech</p>
                    <p>All Four Squad Strech</p>
                    <p>All Four Squad Strech</p>
                    <p>All Four Squad Strech</p>
                    <p>All Four Squad Strech</p>
                    <p>All Four Squad Strech</p>
                    <p>All Four Squad Strech</p>
                    <p>All Four Squad Strech</p>
                    <p>All Four Squad Strech</p>
                </div>
                <div className='bottom-arrow'>
                    <img src='../../../public/images/arrow-right-solid-black.png'/>
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
