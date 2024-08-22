import React from 'react'
import '../pages/home/home.css'
import {yellowBannerData} from '../../utilities/data'

export const YellowBanner = () => {
  return (
    <div className="yellow-banner">
      {yellowBannerData.map((e: string) => (<span>{e}   \\ </span>))}
    </div>
  )
}
