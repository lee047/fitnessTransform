import React from 'react'




export const ExerciseContainerDisplay = (ExerciseDetailData:any) => {
    // const item =   ExerciseDetailData
    // console.log( ExerciseDetailData)
  return (
    
    <>  
        {/* {console.log(ExerciseDetailData.ExerciseDetailData.instructions.map((e: string) => {return e}))} */}
        {console.log(ExerciseDetailData.ExerciseDetailData.instructions)}
        {console.log(typeof ExerciseDetailData)}
        <div className='exercise-container'>
            <div className='exercise-content-heading'>
                <p>Exercise Name</p>
                <p>{ExerciseDetailData.name}</p>
            </div>
            <div className='exercise-details-container'>
                <div className='exercise-details-wrapper'>
                    <div className='exercise-details'>
                        <p>Body Part</p>
                        <p>{ExerciseDetailData.bodyPart}</p>
                    </div>
                    <div className='exercise-details'>
                        <p>Target</p>
                        <p>{ExerciseDetailData.target}</p>
                    </div>
                    <div className='exercise-details'>
                        <p>Equipment</p>
                        <p>{ExerciseDetailData.equipment}</p>
                    </div>
                    <div className='exercise-details-second-container'>
                        <p>Secondary <br /> Muscles</p>
                        <div className='exercise-details-second'>
                            {/* {Object.keys(ExerciseDetailData.data.secondaryMuscles).map((item:string) => { return <p>{item}</p>})} */}
                            <p>Hamstrings</p>
                        </div>
                    </div>
                </div>
                <div className='exercise-instructions-container'>
                    <h3>Instructions</h3>
                    <div className='exercise-instructions'>
                        <p>{ExerciseDetailData.instructions}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
