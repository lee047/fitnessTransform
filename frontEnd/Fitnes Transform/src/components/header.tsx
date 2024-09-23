import React, {useState} from 'react'

export const Header = () => {
    const [isMoblieNav, setIsMoblieNav] = useState(false);
  return (
    <>
    {isMoblieNav && 
          <div className='moblie-nav-container'>
            <div className='mobile-nav-wrapper'>
                <div className='moblie-nav-btn'>
                    <img src="./public/images/close-btn.png" onClick={ () => {setIsMoblieNav(false); console.log('menu nav is closed');}} />
                </div>
                <div className='mobile-nav-options-wrapper'>
                    <ul>
                        <li><a href='/'>HOME</a> </li>
                        <li><a href='/Exercise'>EXERCISE</a> </li>
                        <li><a href='/Contact-Us'>CONTACT US</a> </li>
                    </ul> 
                </div>
            </div>
          </div>
          }
    <div className='header-container'>
          
      
            <div className='header-logo'>
                <img src="../../public/images/Logo-main.svg" alt="" />
            </div>
          <div className='nav-container'>
            <ul>
              <li><a href='/'>HOME</a> </li>
              <li><a href='/Exercise'>EXERCISE</a> </li>
              <li><a href='/Contact-Us'>CONTACT US</a> </li>
            </ul>  
          </div>
          {!isMoblieNav && 
            <div className='moblie-nav'>
                <img src='./public/images/menu-bar.png' onClick={ () => {setIsMoblieNav(true); console.log('menu nav is pressed');}}/>
            </div>
            }
          
      </div>
      </>
  )
}
