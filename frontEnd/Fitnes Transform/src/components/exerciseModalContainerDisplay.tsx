import React from 'react'
import '../pages/home/home.css'
export const ExerciseModalContainerDisplay = ({ExerciseDetailData}:any) => {
  return (
    <>
     <div className='exercise-modal-container'>
            
            <div className='exercise-modal-content-heading'>
                <p>Exercise Name</p>
                <p>{ExerciseDetailData.name}</p>
            </div>
            <div className='exercise-modal-details-container'>
                <div className='exercise-modal-details-wrapper'>
                    <div className='exercise-modal-details'>
                        <p>Body Part</p>
                        <p>{ExerciseDetailData.bodyPart}</p>
                    </div>
                    <div className='exercise-modal-details'>
                        <p>Target</p>
                        <p>{ExerciseDetailData.target}</p>
                    </div>
                    <div className='exercise-modal-details'>
                        <p>Equipment</p>
                        <p>{ExerciseDetailData.equipment}</p>
                    </div>
                    <div className='exercise-modal-details-second-container'>
                        <p>Secondary <br /> Muscles</p>
                        <div className='exercise-modal-details-second'>
                            {ExerciseDetailData.secondaryMuscles.map((e: string) => {return <p>{e}</p>})}

                        </div>
                    </div>
                </div>
                <div className='exercise-modal-instructions-container'>
                    <h3>Instructions</h3>
                    <div className='exercise-modal-instructions'>
                        {ExerciseDetailData.instructions.map((e: string) => {return <p>{e}</p>})}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
