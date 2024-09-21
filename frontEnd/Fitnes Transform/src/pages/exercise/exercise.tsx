"use strict";

import React, { useState, useRef } from 'react'
import { PageHeader } from '../../components/pageHeader'
import {bodyparts, equipments, targets} from '../../../utilities/data'
import { ExerciseContainerDisplay } from '../../components/exerciseContainerDisplay';
import {ExerciseContainerDisplayEmpty} from'../../components/exerciseContainerDisplayEmpty';

import './exercise.css'

import {getExerciseData} from '../../../utilities/fetchData'
const URL = 'http://localhost:3000/'

export const ExercisePage = () => {
    const exercisePageBredcrumbs = [{ page : 'Home' , pageUrl: '/'},{page:'Exercise',pageUrl:'/Exercise' }]
    const [TargetData, setTargetData] = useState<string[]>([]);
    const [SubTargetData, setSubTargetData] = useState<any[]>([]);
    const [ExerciseDetailsData, setExerciseDetailsData] = useState<any[]>([]);
    const [isMainElementActive, setisMainElementActive] = useState('');
    const scrollRef = useRef<HTMLInputElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    // console.log(TargetData);
    // console.log(Array.isArray(TargetData));

    function getTragetData(input: string){
    if(input == "bodyparts"){
        const bodyPartsData = getExerciseData(URL+'bodyparts');
        bodyPartsData.then((res:any) => {
            console.log(res)
            setTargetData(res);
        });
        // setTargetData(bodyPartsData);
        setisMainElementActive('bodyparts');
    }
    else if(input == 'equipment'){
        const equipmentData = getExerciseData(URL+'equipmentlist');
        equipmentData.then((res:any) => {
            console.log(res)
            setTargetData(res);
        });
        setisMainElementActive('equipment');
    }else if(input == 'target'){
        const equipmentData = getExerciseData(URL+'targetlist');
        equipmentData.then((res:any) => {
            console.log(res)
            setTargetData(res);
        });
        setisMainElementActive('target');
    }
    // console.log(TargetData);
    return true
}

async function getSubTragetData(input:string){
    console.log(input.toLocaleLowerCase())
    input = input.toLocaleLowerCase()
    if(input){
       if(isMainElementActive == 'bodyparts' ){
            const subTargetContent = await getExerciseData(URL+'bodypartsdetail/'+ input);
            console.log(URL+'bodypartsdetail/'+ input);
            setSubTargetData(subTargetContent);
        }else if (isMainElementActive == 'equipment'){
            
            const subTargetContent = await getExerciseData(URL+'equipmentlistdetail/'+ input);
            setSubTargetData(subTargetContent);
        }else if (isMainElementActive == 'target'){
            console.log(URL+'targetlistdetail/'+ input);
            const subTargetContent = await getExerciseData(URL+'targetlistdetail/'+ input);
            setSubTargetData(subTargetContent);
        }
        
        }
    }

async function getExerciseDetailsData(input:string){
    console.log('exercise details from ' + URL+'exercise/'+input)
    console.log(ExerciseDetailsData);
    const exerciseData = await getExerciseData(URL+'exercise/'+input)
    setExerciseDetailsData(exerciseData[0].Data);
    console.log(exerciseData[0].Data)
}
    
function handleScroll(direction: 'up' | 'down'){
    const {current } = scrollRef;
    
    if(current){
      const scrollOffSet = direction === 'down' ? -150 : 150;
      
      let scrollAmount = scrollPosition + scrollOffSet;
      console.log('moving position ' + direction + '  scroll OffSet : ' + scrollOffSet + '  scroll amount : ' + scrollAmount + ' scroll positions: ' + scrollPosition )
      setScrollPosition(scrollAmount);
      current.scrollTo({top: scrollPosition, behavior: "smooth"})
    }
  }

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
                   TargetData.map((e) => { return <p className={e} onClick={() =>{getSubTragetData(e)}}>{e}</p>})
                }
            {TargetData.length == 0 && 
            <div className='no-data-wrapper'>
                <p className='no-data'>Please select the categories above</p>
            </div>
            }
           </div>
          </div>
        </div>
        {SubTargetData.length > 0 && 
        <div className='exercise-content-container'>
            <div className='exercise-suboptions-container'> 
                <h3>Exercise</h3>
                <div className='top-arrow'>
                    <img src='../../../public/images/arrow-up-black.png' onClick={() => {handleScroll('up')}}/>
                </div>
                <div className='exercise-suboptions-wrapper' ref={scrollRef}>
                    
                    {SubTargetData.map((e) => { return <p className={e.Data.id} onClick={() => {getExerciseDetailsData(e.Data.id)}}>{e.Data.name}</p>})}
                </div>
                <div className='bottom-arrow'>
                    <img src='../../../public/images/arrow-down-black.png' onClick={ () => {handleScroll('down')}}/>
                </div>
            </div>
         
           
            { Object.keys(ExerciseDetailsData).length > 0 && 
           
            <ExerciseContainerDisplay ExerciseDetailData={ExerciseDetailsData} />}
            { Object.keys(ExerciseDetailsData).length == 0 &&  <ExerciseContainerDisplayEmpty />}
           
        </div>
        }
    </>
  )
}
