import React from 'react'
import './Footer.css'
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';  // must install this  npm install react-icons to get the icons
import { Link } from 'react-router-dom';
const Footer = () => {

    const handlePhoneClick = () => {
    window.location.href = 'tel:+639279346651'; // Replace with your phone number
  };

  const handleMapMarkerClick = () => {
    const latitude = '10.37405'; // Replace with the latitude of your location
    const longitude = '123.92724'; // Replace with the longitude of your location
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

    window.open(mapUrl, '_blank');
  };

  return (
    <>
    <div className='footerContainer'>

       <div className='container1'>
        <div className='IconEach'>
        < div className='favcon'>
           <FaPhone onClick={handlePhoneClick}/>
           
         </div>
        <div>
            <span className='detail'>(+6) 39279346651
            </span>
       </div>
     </div>


  <div className='IconEach'>
        <Link to="/contact">
            <div className="favcon">
                 <FaEnvelope />
            </div>
        </Link>

      <div>
        <span className='detail'>jehrosarina1984@gmail.com
            </span>
     </div>
</div>
 <div className='IconEach'>
          <div className='favcon'>  
             <FaMapMarker onClick={handleMapMarkerClick}/>
          
        </div>
       <div>
        <span className='detail' >Tawason, Mandaue city, Phillipines
            </span>
        </div>
       </div>
      </div>
    </div>

    <div className='subFooter'>
        <div className='card'>
            <div className='cardTitle'>
            <h3>About</h3>
            <p>Our Story</p>
            <Link to='/Service'><p>Skills</p></Link>
            <p>Awards</p>
            <p>Career</p>
            </div>
        </div>
         <div className='card'>
            <div className='cardTitle'>
            <h3>Company</h3>
            <p>Qualfon</p>
            <p>Teleperformace</p>
            <p>Teletech</p>
            <p>Sykes</p>
        </div>
        </div>
        <div className='card'>
            <div className='cardTitle'>
            <h3>Projects</h3>
           <Link to='/portfolio'><p>React Blog Content</p></Link>
            <p>Javascript Blog Project</p>
            <p>Vaccination App</p>
            <p>Ecommerce App</p>
            </div>
        </div>
         <div className='card'>
            <div className='cardTitle'>
                <h3>Subscribe</h3>
               <input className='inputsubscribe' placeholder='email address'></input>
               <p>Get update on your mailbox</p>
          
            </div>
        </div>
       
    </div>
    
    </>
  )
}

export default Footer