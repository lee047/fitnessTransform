import React from 'react'

export const ExerciseContainerDisplayEmpty = () => {
  return (
    <>
     <div className='exercise-container'>
            <div className='exercise-content-heading'>
                <p>Exercise Name</p>
                <p></p>
            </div>
            <div className='exercise-details-container'>
                <div className='exercise-details-wrapper'>
                    <div className='exercise-details'>
                        <p>Body Part</p>
                        <p><div className='text-box-lg animation-empty-text'></div></p>
                    </div>
                    <div className='exercise-details'>
                        <p>Target</p>
                        <p><div className='text-box-lg animation-empty-text'></div></p>
                    </div>
                    <div className='exercise-details'>
                        <p>Equipment</p>
                        <p><div className='text-box-lg animation-empty-text'></div></p>
                    </div>
                    <div className='exercise-details-second-container'>
                        <p>Secondary <br /> Muscles</p>
                        <div className='exercise-details-second'>
                            <div className='text-box-lg animation-empty-text'></div>
                        </div>
                    </div>
                </div>
                <div className='exercise-instructions-container'>
                    <h3>Instructions</h3>
                    <div className='exercise-instructions'>
                        <div className='text-box animation-empty-text'></div>
                    </div>
                    <div className='exercise-instructions'>
                        <div className='text-box animation-empty-text'></div>
                    </div>
                    <div className='exercise-instructions'>
                        <div className='text-box animation-empty-text'></div>
                    </div>
                    <div className='exercise-instructions'>
                        <div className='text-box animation-empty-text'></div>
                    </div>
                    <div className='exercise-instructions'>
                        <div className='text-box animation-empty-text'></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
