import React, {useEffect, useState, useRef} from 'react'
import '../pages/home/home.css'
import {getExerciseData} from '../../utilities/fetchData'

const URL = 'http://localhost:3000/'

export const Explore = () => {
  const[bodyPartsList, setBodyPartsList] = useState<string[]>([]);
  const [bodyPartsExerciseList, setBodyPartsExerciseList] = useState<any[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [resultScrollPosition, setResultScrollPosition] = useState(0);
  const MainRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLInputElement>(null);

  async function getBodyPartsNameData(){
    const URLbodypart = URL + 'bodyparts/'
    // const bodyPartsNameData = getExerciseData(URLbodypart);
    console.log('fetch call is make for bodyparts');
    console.log(URLbodypart);
    const bodyPartsDataList = await getExerciseData(URLbodypart)
    .then((res) => {
      // console.log(res);
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
      // console.log('Extract Data variable');
      // console.log(extractData)
    });
    // console.log(URL +'exercisenamedetails/' + input);
  }
  // console.log(Object.keys(bodyPartsExerciseList).length)
  // console.log(bodyPartsExerciseList);

  function handleScrollBodyParts(direction: 'up' | 'down'){
    const {current } = MainRef;
    
    if(current){
      const scrollOffSet = direction === 'down' ? -150 : 150;
      let scrollAmount = scrollPosition + scrollOffSet;
      console.log('moving position ' + direction + '  scroll OffSet : ' + scrollOffSet + '  scroll amount : ' + scrollAmount  )
      setScrollPosition(scrollAmount);
      current.scrollTo({top: scrollAmount, behavior: "smooth"})
    }
  }

  
  function handleScrollResults(direction: 'up' | 'down'){
    const {current } = resultsRef;
    
    if(current){
      const scrollOffSet = direction === 'down' ? -150 : 150;
      let scrollAmount = resultScrollPosition + scrollOffSet;
      console.log('moving position ' + direction + '  scroll OffSet : ' + scrollOffSet + '  scroll amount : ' + scrollAmount  )
      setResultScrollPosition(scrollAmount);
      current.scrollTo({top: scrollAmount, behavior: "smooth"})
    }
  }
  return (
    <div className='explore-exercise-hero'>
      <h1>Explore Workouts and Exercises</h1>
      <div className='explore-exercise-wrapper'>
        <div className='explore-exercise-results-wrapper'>
        <div className="explore-exercise-scroll-btn">
          <img src='../../public/images/arrow-up-black.png' onClick={(e) => handleScrollBodyParts('up') }/>
        </div>
         <div className='explore-exercise-results' ref={MainRef}>
          {bodyPartsExerciseList.map((e) => { return <p>{e.name}</p>})}
         </div>
          <div className="explore-exercise-scroll-btn">
            <img src='../../public/images/arrow-down-black.png' onClick={(e) => handleScrollBodyParts('down') }/>
          </div>
        </div>
        <div className='explore-exercise-options-wrapper'>
        <div className='explore-exercise-options-scroll-btn'>
          <img src='../../public/images/arrow-up-black.png' onClick={(e) => handleScrollResults('up')}/>
        </div>
          <div className='explore-exercise-options' ref={resultsRef}>
          {bodyPartsList.map((e) => { return <p onClick={() => {  getExerciseDetails(e)}}>{e}</p>})}
          </div>
          <div className='explore-exercise-options-scroll-btn'>
            <img src='../../public/images/arrow-down-black.png' onClick={(e) => handleScrollResults('down')}/>
          </div>
        </div>
      </div>
    </div>
  )
}
