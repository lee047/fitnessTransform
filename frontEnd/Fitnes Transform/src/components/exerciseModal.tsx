import React from 'react'
import{ ExerciseModalContainerDisplay} from './exerciseModalContainerDisplay'
export const ExerciseModal = ( {setIsModalOpen,ExerciseDetailsData}:any) => {

   
  return (
    <div className='modal-dark-overlay-bg'>
        <div className='modal-background'>
        <div className='modal-close-btn'>
                <img src="../../public/images/close-btn.png" onClick={() => {setIsModalOpen(false)}} />
            </div>
        <ExerciseModalContainerDisplay ExerciseDetailData={ExerciseDetailsData} />
        {/* <p className='modal-text'>modal is working </p> */}
       
        </div>

    </div>
  )
}
