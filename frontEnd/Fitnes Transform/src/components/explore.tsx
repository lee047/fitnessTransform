import React, {useEffect, useState} from 'react'
import '../pages/home/home.css'
import {getExerciseData} from '../../utilities/fetchData'

const URL = 'http://localhost:3000/'

export const Explore = () => {
  const[bodyPartsList, setBodyPartsList] = useState<string[]>([]);
  const [bodyPartsExerciseList, setBodyPartsExerciseList] = useState<any[]>([]);

  async function getBodyPartsNameData(){
    const URLbodypart = URL + 'bodyparts/'
    // const bodyPartsNameData = getExerciseData(URLbodypart);
    console.log('fetch call is make for bodyparts');
    console.log(URLbodypart);
    const bodyPartsDataList = await getExerciseData(URLbodypart)
    .then((res) => {
      console.log(res);
      setBodyPartsList(res);
    });
    
  }
  // console.log(bodyPartsList);
  useEffect( () =>{
    
     
      getBodyPartsNameData();
      getExerciseDetails('back')
  },[])
 
//  getBodyPartsNameData();

  async function getExerciseDetails(input:string){
    input = input.toLocaleLowerCase();
    // use before was exercisenamedetails and now bodypartsdetail TODO
    // if not using exercisenamedetails, remove the exercisenamedetails from server (index.js file)
    const exceriseDetailsListData = await getExerciseData(URL+ 'bodypartsdetail/' + input)
    .then((res:any) => {
      // console.log(res[0].Data);
      // setBodyPartsExerciseList(res);
      let extractData = res.map((e:any) => {
        // console.log(e.Data);
        return e.Data;
      });
      setBodyPartsExerciseList(extractData)
      console.log('Extract Data variable');
      console.log(extractData)
    });
    console.log(URL +'exercisenamedetails/' + input);
  }
  console.log(Object.keys(bodyPartsExerciseList).length)
  console.log(bodyPartsExerciseList);
  return (
    <div className='explore-exercise-hero'>
      <h1>Explore Workouts and Exercises</h1>
      <div className='explore-exercise-wrapper'>
        <div className='explore-exercise-results-wrapper'>
        <div><img src='../../public/images/arrow-right-solid-black.png' onClick={() => window.scrollTo({top: 100, behavior: "smooth"})}/></div>
         <div className='explore-exercise-results'>
          {bodyPartsExerciseList.map((e) => { return <p>{e.name}</p>})}
         </div>
         <div><img src='../../public/images/arrow-right-solid-black.png'/></div>
        </div>
        <div className='explore-exercise-options-wrapper'>
        <div><img src='../../public/images/arrow-right-solid-black.png'/></div>
          <div className='explore-exercise-options'>
          {bodyPartsList.map((e) => { return <p onClick={() => {  getExerciseDetails(e)}}>{e}</p>})}
          </div>
          <div><img src='../../public/images/arrow-right-solid-black.png'/></div>
        </div>
      </div>
    </div>
  )
}
