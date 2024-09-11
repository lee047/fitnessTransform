import React,{useState} from 'react'
import { Store } from 'react-notifications-component';
interface  mySubscribeParams {
  emailSubscribe: string
}
export const Subscribe = () => {
  const [MySubscribeValues, setMySubscribeValues] = useState<mySubscribeParams>({emailSubscribe:''});
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function isEmailValid(email:string) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  function handleInputChange(e:any) {
    const input = e.target.value;
   
    setMySubscribeValues({emailSubscribe:input});
    
      if(!input.trim()){
        setIsError('This field is required');
      }else if (!isEmailValid(input)){
        setIsError('Email is not in right formate');
      }else{
        setIsError('');
        
      }
    
    
 }

  async function postSubscribe(e:any){
    e.preventDefault();

    if(MySubscribeValues.emailSubscribe){
    if(!isError){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({emailSubscribe:MySubscribeValues})
      };
      setIsLoading(true);
      const responseData = await fetch('http://localhost:3000/subscribe', requestOptions).then((response)=>{
        console.log(response.json());
        setIsLoading(false);
        if(response.ok){
            Store.addNotification({
              title: "Sucussfull Submitted!",
              message: "Thanks for subscribing",
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
        }else{
          Store.addNotification({
            title: "Submittion Failed",
            message: "Please try again",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
            duration: 5000,
            onScreen: true
            }
        });
        }
      }).catch((e) => console.log(e));
      // const data = await response.json();
      
      // console.log(data);
    }
  
  }
}
  return (
    <div className='subscribe-container'>
        <div className='subscribe-text-container'>
            <p>SUBSCRUBR TO OWR NEWS LETTER</p>
            <h1>STAY IN TOUCH</h1>
        </div>
        <div className='subscribe-btn-container'>
        <form >
        <div className=''>
          {isError && <div className='subscribeError'><p>{isError}</p></div>}
        <input type='text' placeholder='Email' name={"emailSubscribe"} value={MySubscribeValues?.emailSubscribe} onChange={handleInputChange}/> 
        <button type={'submit'} onClick={postSubscribe}>Subscribe</button>
        </div>
        </form>
        </div>
        
    </div>
  )
}
