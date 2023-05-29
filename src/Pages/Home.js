import React from 'react'
import './Home.css'
import { FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';  // must install this  npm install react-icons to get the icons


const Home = () => {

  //accessing the image file
  const imagePath = process.env.PUBLIC_URL + '/images/sorj.png'; // accessing the image in a public folder
  
  // downloading the image
  const handleDownload = () => {

  const fileUrl =  process.env.PUBLIC_URL + '/images/resume.pdf';  // path to my iamge

  const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'resume.pdf'; // Optional: Specify the filename for the downloaded file
    link.target = '_blank';

    // Programmatically trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up the temporary anchor element
    document.body.removeChild(link);
  };
  
  return (
    <div className='myProfile'>

              <div className='name'>
                <h1 className='name'>Hi, <span className='name'>I'm Jehros Riña</span></h1>
                <p className="typing-animation">Front-End Developer</p>
             
              <div className='description'>
               <p className="animationText" >As a front-end developer, I specialize in creating user interfaces and experiences for websites and web applications. With a strong foundation in HTML, CSS, and JavaScript, React, I have the skills to transform design concepts into functional and visually appealing web interfaces.</p>
              </div> 

                 

              <div className='downloadContainer'>
                  <a href='https://sorj-design.github.io/Rina-CV/resume.html' target='blank' className='download downloadResume'>Resume Link</a>
                  <button className='downloadResume' onClick={handleDownload}>Download Resume</button>
              </div>

             <div className='Icons'>
                    <a href='https://www.facebook.com/josh.mar.507679' target='blank'><span  className='links'><FaFacebook /></span></a>
                    <a href='https://www.linkedin.com/in/jehros-rina-a67770251/' target='blank'><span className='links'><FaLinkedin /></span></a>
                    <a href='https://www.linkedin.com/in/jehros-rina-a67770251/' target='blank'><span className='links'><FaEnvelope /></span></a>
                
             </div>

            </div>    
        

            <div className='image'>
              <img className='imageIcon' src={imagePath} alt="My Image" />
            </div>
    </div>
  )
}

export default Home