import React, { useState, useEffect,useRef } from 'react';
import {  FaTimes, FaPaperPlane } from 'react-icons/fa';
import './Modal.css';
import emailjs from '@emailjs/browser'; 

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showIcon, setShowIcon] = useState(true);

  const [isMessage, setMessage] =useState(false);
  const [confirmMessage, setconfirmMessage] = useState(''); 

  
    useEffect(() => {
    const modalTimer = setTimeout(() => {
      setShowModal(true);
    }, 8000);

    return () => clearTimeout(modalTimer);
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setShowIcon(true);
    setconfirmMessage('')
  };

  const openModal = () => {
    setShowModal(true);
    setShowIcon(false);
   
  };
  


  const form = useRef();

  const sendEmailForm = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_vggvmsc', 'template_busppth', form.current, '9jvttDonG7Zmx60p1')
      .then((result) => {
          console.log(result.text);
       setMessage(true)
       setconfirmMessage('Thank you for sending me a message. I will respond to your inquiry as soon as possible.! ' )
         // Clear input and textarea fields
         form.current.reset();
         
      }, (error) => {
          console.log(error.text);
        
      });
  };

  return (
    <>
    <div className='containerModal'>
      <div className='modalContainer'>
        
        {/* condition statement  */}
        {showModal ? (
          <div className="modal-content">
            <div className='btnClose'>
            <button className='btnEnvelop' onClick={closeModal}>  
              <FaTimes />   
            </button>
            </div>
      
         <form className='formFloating' ref={form} onSubmit={sendEmailForm}>
          <h3> Plese use the chatbox to send a me amessage</h3>
          <input className='formText' type="text" name="user_name" placeholder='Name' required />
        
          <input className='formText' type="email" name="user_email" placeholder='Example: johndoe@gmail.com' required />
          
          <textarea className='formTextArea' name="message" placeholder='Write a message' required />
        
            <button className='formBtn' type="submit" value="Send"><span className='btnsubmit'> <FaPaperPlane /></span></button>
        
         {/* if true then display message  */}
         {isMessage && 
            <div className='mesasgeSent'>{confirmMessage}</div>
          }

        </form>

          </div>
        ) : (
        
          showIcon && (
            <div className='envelopBtnContaienr'>
            <button className='btnEnvelop' onClick={openModal}>
              <FaPaperPlane />
            </button>
            </div>
            
          )
       
        )}
           
      </div>
     
    </div>
    </>
  );
};

export default Modal;