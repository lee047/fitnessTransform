import React, {useState} from 'react'
import {PageHeader} from '../../components/pageHeader'
import './contactUs.css'
import { Store } from 'react-notifications-component';

const contactPageBredcrumbs = [{ page : 'Home' , pageUrl: '/'},{page:'Contact Us',pageUrl:'/Contact-Us' }]

interface contactUSParams{
    name: string,
    email:string,
    message: string
}


export const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [buttonText, setButtonText] = useState('Submit');

    function isEmailValid(email:string) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
      };

    console.log('isLoading : ' + isLoading);
    function handleInputChange(e:any){
        // console.log(e.target.getAttribute('name'));
        // console.log(e.target.value);
        
        if(e.target.getAttribute('name') == 'name'){
            setName(e.target.value);
        } 
        if (e.target.getAttribute('name') == 'email'){
            setEmail(e.target.value);
        } 
        if (e.target.getAttribute('name') == 'message'){
            setMessage(e.target.value);
        }
        
        if(!name.trim()){
            setNameError('This field is required');
        } else{
            setNameError('');
        }
    
        if(!email.trim()){
            setEmailError('This field is requried');
        } else if(!isEmailValid(email)){
            setEmailError('Please enter right email');
        }else {
            setEmailError('');
        }

        if(!message.trim()){
            setMessageError('This field is requried')
        } else{
            setMessageError('');
        }
        
    }

    async function postContactUs(e:any){
        e.preventDefault();
        if(name && email && message){
                // if(!isLoading){console.log(' -------------->>>>>>>>>>>>>>>>   the loading button is enabled')
                if(!nameError && !emailError && !messageError){
                    setIsLoading(true);
                    setButtonText("Loading.....");
                    console.log('isLoading : ' + isLoading);
                    const data = { name: name, email: email, message: message}
                    console.log('data need to be posted');
                    console.log(data);
                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data)
                    };
                    const responseFromAPI = await fetch('http://localhost:3000/contactus', requestOptions)
                    .then((response) =>{ 
                        console.log(response);
                        setIsLoading(false);
                        setButtonText("Submitted");
                            Store.addNotification({
                                title: "Sucussfull Submitted!",
                                message: "Thanks "+ name +". We will get back to you shortly",
                                type: "success",
                                insert: "top",
                                container: "top-right",
                                animationIn: ["animate__animated", "animate__fadeIn"],
                                animationOut: ["animate__animated", "animate__fadeOut"],
                                dismiss: {
                                duration: 5000,
                                onScreen: true
                                }
                            });
                        })
                    .then(() => {   
                            console.log('waiting for fetch data')
                    });
                
                    }
                
            }

            if(name == ''){
                setNameError('This field is requried');
            }
            if(email ==''){
               setEmailError('This field is requried');
            }
            if(message == ''){
                setMessageError('This field is requried');
            }

        }
    

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
                        <input type="text" name="name" className={'contact-name' + nameError? 'error':''} placeholder='Name' onChange={handleInputChange}/>
                        {nameError &&
                                 <div className={'contact-error-meesage' }><p>{nameError}</p></div>}
                        <input type="text" name="email" className={'contact-email' + emailError? 'error':''} placeholder='Email' onChange={handleInputChange}/>
                        {emailError && 
                                <div className={'contact-error-meesage' }><p>{emailError}</p></div>}
                        <textarea name="message" className={'contact-email' + messageError? 'error':''}placeholder='Message'onChange={handleInputChange}></textarea>
                        {messageError && 
                                <div className={'contact-error-meesage'}><p>{messageError}</p></div>}
                        <a onClick={postContactUs} className={`btn contact-submit-btn ${isLoading ? ' loading':''}`}> {buttonText}</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
