// steps:
//create emailjs.com account
// need to install - npm install @emailjs/browser
//copy the react template under docs
// get the service id, tempalte id, user id

import React, { useRef, useState, useEffect } from 'react';  
import emailjs from '@emailjs/browser';  
import './Contact.css'
import { FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';  // must install this  npm install react-icons to get the icons


export const Contact = () => {
  
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const nameInputRef = useRef();

  useEffect(() => {
    nameInputRef.current.focus();  // focus the cursor in the name input field
  }, []);

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_vggvmsc', 'template_busppth', form.current, '9jvttDonG7Zmx60p1')
      .then((result) => {
          console.log(result.text);
         setIsMessageSent(true)
         console.log(isMessageSent) 

         // Clear input and textarea fields
         form.current.reset();
         
      }, (error) => {
          console.log(error.text);
        
      });
  };

  return (
 
    <div className='formContainer'>
    
      
      <div className='rightPortion'>
         <h1>Contact Information</h1>
         
          <div className='contactInfo'>
         
          <p className='contactInfo'>Tel# - +639279346651</p>
          <p className='contactInfo1'>Email:jehrosarina1984@gmail.com</p>
         
          <div className='favIcons'>
                   <a href='https://www.facebook.com/josh.mar.507679' target='blank'><span ><FaFacebook  className='links'/></span></a>
                    <a href='https://www.linkedin.com/in/jehros-rina-a67770251/' target='blank'><span ><FaLinkedin className='links' /></span></a>
                    <a href='https://www.linkedin.com/in/jehros-rina-a67770251/' target='blank'><span><FaEnvelope  className='links'/></span></a>
          </div>
        </div>
      </div>

   
        <form ref={form} onSubmit={sendEmail}>
          {/* <label>Name</label> */}
          <input type="text" name="user_name" placeholder='Name' required ref={nameInputRef}/>
          {/* <label>Email</label> */}
          <input type="email" name="user_email" placeholder='Example: johndoe@gmail.com' required />
          {/* <label>Message</label> */}
          <textarea name="message" placeholder='Write a message' required />
           {isMessageSent && <div className='message'>Thank you for reaching out. This is to confirm that your message has been successfully sent. I appreciate you taking the time to contact me, and I will respond to your inquiry as soon as possible.!</div>}
          <input className='btn' type="submit" value="Send"  />
          
        </form>
    
    </div>

  
  
    

  );
};