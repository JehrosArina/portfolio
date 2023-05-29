// Accessing my project from github
// import React, { useState, useEffect } from 'react';

// const Portfolio = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         // Replace 'YOUR_GITHUB_USERNAME' with your actual GitHub username
//         const response = await fetch('https://api.github.com/users/JehrosArina/repos');
//         const data = await response.json();
//         setProjects(data);
//       } catch (error) {
//         console.error('Error fetching GitHub projects:', error);
//       }
//     };

//     fetchProjects();
//   }, []);

//   return (
//     <div>
//       <h1>My Projects</h1>
//       {projects.map((project) => (
//         <div key={project.id}>
//           <h2>{project.name}</h2>
//           <p>{project.description}</p>
//           <a href={project.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Portfolio;


///////////////////////////////////////////////////////////

//Access my project in vercel 

// import React, { useState, useEffect } from 'react';

// const Portfolio = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         // Replace 'YOUR_VERCEL_USERNAME' with your actual Vercel username
//         const response = await fetch(`https://api.vercel.com/v1/users/jehrosarina/projects`);
//         const data = await response.json();
//         setProjects(data.projects || []);
//       } catch (error) {
//         console.error('Error fetching Vercel projects:', error);
//       }
//     };

//     fetchProjects();
//   }, []);

//   return (
//     <div>
//       <h1>My Projects</h1>
//       {projects.length > 0 ? (
//         projects.map((project) => (
//           <div key={project.id}>
//             <h2>{project.name}</h2>
//             <p>{project.description}</p>
//             {project.alias && project.alias.length > 0 && (
//               <a href={`https://${project.alias[0]}`} target="_blank" rel="noopener noreferrer">Visit Project</a>
//             )}
//           </div>
//         ))
//       ) : (
//         <p>No projects found.</p>
//       )}
//     </div>
//   );
// };

// export default Portfolio;


////////////////////////////////////////////////////////

import './Portfolio.css'
import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(projects)
    const deploymentUrl = 'https://blog-post-content.vercel.app/'; // Replace with your actual deployment URL
    const deploymentUrl1 = 'https://jehrosarina.github.io/Website-Project/';
    const ecomerceApp = 'https://ecomerce-app-eight.vercel.app/'
    
    const blogImage = process.env.PUBLIC_URL + '/images/blog1.png';
    const blogImage1 = process.env.PUBLIC_URL + '/images/blog2.png';
    const blogImage2 = process.env.PUBLIC_URL + '/images/blog3.png';
    
    const blog1 = process.env.PUBLIC_URL + '/images/blog4.png';
    const blog2 = process.env.PUBLIC_URL + '/images/blog5.png';
    const blog3 = process.env.PUBLIC_URL + '/images/blog6.png';

    const app1 = process.env.PUBLIC_URL + '/images/app1.png';
    const app2 = process.env.PUBLIC_URL + '/images/app2.png';
    const app3 = process.env.PUBLIC_URL + '/images/app3.png';



  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Replace 'YOUR_GITHUB_USERNAME' with your actual GitHub username
        const response = await fetch('https://api.github.com/users/JehrosArina/repos');
        const data = await response.json(); //converted to json file to become an object
        setProjects(data);   // passing the data to my usate project
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
      }
    };

    setTimeout(fetchProjects, 2000); // Delay of 3 seconds (3000 milliseconds)
  }, []);

  if (isLoading) {
    return <p className='loadingData'>Loading while fetching data from Github and vercel...</p>;
  }

  const downloadProject = (url) => {
    window.open(url);
  };

  return (
    <div className='container'>
      <div className='Title'>
        <h1>My Portfolio</h1>
      </div>

      <div className='postfolioContainer'>
        <p>A react blog content project that allows you to upload images, add comments, add post content..</p>
        <div className='images'>
          <img className='imageIcon' src={blogImage} alt="My Image" />
          <img className='imageIcon' src={blogImage1} alt="My Image" />
          <img className='imageIcon' src={blogImage2} alt="My Image" />
        </div>
      <div className='linkBlog'>
        <a className='aLink' href={deploymentUrl} target="_blank" rel="noopener noreferrer">
          View App
        </a>
      </div>
      </div>

      <div className='postfolioContainer'>
        <p>A blog content using HTML/CSS/Javascript.. The app has functionality to delete card element,</p>
        <div className='images'>
          <img className='imageIcon' src={blog1} alt="My Image" />
          <img className='imageIcon' src={blog2} alt="My Image" />
          <img className='imageIcon' src={blog3} alt="My Image" />
        </div>

        <div className='linka'>
        <a className='aLink' href={deploymentUrl1} target="_blank" rel="noopener noreferrer">
          View App
        </a>
        </div>
      </div>

      <div className='projectAssignmentSection'>
        <h1 className='javascriptOrjectTitle'>JavaScript projects and Assignments</h1>
        <div>
          {projects.length > 0 ? (
            projects.map((project) => (
              <div key={project.id}>
                <div className='displayGitHubProject'>
                  <p className='projectName'>{project.name}</p>
                  <button className='downloadCode' onClick={() => downloadProject(project.clone_url)}>Download code</button>
                </div>
              </div>
            ))
          ) : (
            <p>No projects found.</p>
          )}
        </div>
      </div>

      <div className='InprogressProjectSection'>
        <h1>In progress</h1>
        <p className='remindertext'>Currently, my project is undergoing a comprehensive process of restructuring..</p>
        <div className='images'>
          <img className='imageIcon' src={app1} alt="My Image" />
          <img className='imageIcon' src={app2} alt="My Image" />
          <img className='imageIcon' src={app3} alt="My Image" />
        </div>
      
      </div>

      <div className='inprogressLink'>
         <a className='aLink' href={ecomerceApp} target="_blank" rel="noopener noreferrer">
          View App
        </a>
        </div>
       
    </div>
  );
};

export default Portfolio;