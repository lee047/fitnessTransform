import React from 'react'
import {PageHeader} from '../../components/pageHeader'
import './contactUs.css'

const contactPageBredcrumbs = [{ page : 'Home' , pageUrl: '/'},{page:'Contact Us',pageUrl:'/Contact-Us' }]

export const ContactUs = () => {
  return (
    <div>
        <PageHeader pageTitile={"Contact Us"} pageBreadcrums={contactPageBredcrumbs}/>
        <div className='contact-details-container'>
            <div className='contact-details'>
                <img src='../../../public/images/email-icon.png' />
                <p>example@email.com</p>
            </div>
            <div className='contact-details'>
                <img src='../../../public/images/email-icon.png' />
                <p>example@email.com</p>
            </div>
            <div className='contact-details'>
                <img src='../../../public/images/email-icon.png' />
                <p>example@email.com</p>
            </div>
        </div>
        <div className='contact-page-container'>
            <div className='contact-image-container'>
                {/* <img src="../../../public/images/contact1.jpg"  /> */}
            </div>
            <div className='contact-form-container'>
                <h1 className='section-header'>Send Message</h1>
                <p>Fill out this form, and our specialists will contact you soon for a consultation.</p>
                <div className='contact-form-wrapper'>
                    <form className='contact-form'>
                        <input type="text" name="name" className='contact-name' placeholder='Name' />
                        <input type="text" name="name" className='contact-email' placeholder='Email'/>
                        <textarea name="message" placeholder='Message'></textarea>
                        <a href="" className='btn contact-submit-btn'> Submit</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
