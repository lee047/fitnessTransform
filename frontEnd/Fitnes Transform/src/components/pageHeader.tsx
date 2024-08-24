import React from 'react'
import '../index.css'
interface pageHeader {
    pageTitile: string,
    pageBreadcrums: pageHeaderBreadCrumb[],
}

interface pageHeaderBreadCrumb{
    page:string,
    pageUrl: string,
}
export const PageHeader = ({pageTitile , pageBreadcrums} :pageHeader) => {
  return (
    <div className='page-header'>
        <h1>{pageTitile}</h1>
        <p>{pageBreadcrums.map(e => {
            return (<><a href={e.pageUrl}>{e.page} </a> <span> // </span></>)
        }
        )}</p>
    </div>

  )
}
// (e.page)