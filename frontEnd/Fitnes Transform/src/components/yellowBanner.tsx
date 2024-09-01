import React from 'react'
import '../pages/home/home.css'
import {yellowBannerData} from '../../utilities/data'

export const YellowBanner = () => {
  return (
    <div className="yellow-banner">
     <div className='yellow-banner-scroll'>
      {yellowBannerData.map((e: string) => (<span>{e}   \\ </span>))}
     </div>
    </div>
  )
}
