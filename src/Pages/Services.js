//fetch data from array and has settimeout applied
import React, { useEffect, useState } from 'react';
import './Services.css'
import {FaCheck} from 'react-icons/fa';  // must install this  npm install react-icons to get the icons


const Services = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchSkills();
      setData(result.data);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div className='loading'>Loading while fetching data...</div>;
  }

  return (
    <div className='containerAllSkilss'>
   
    <div className='softSkills'>
      <h1 className='skillTitle'>Soft Skills</h1>
      <ul>
        {data.softSkills.map((item, index) => (
          <li key={index}><span className='checkIcon'><FaCheck /></span><p className='listItem'>{item}</p></li>
        ))}
      </ul>
    </div>

  <div className='techSkills'>
    <h1  className='skillTitle' >Technical Skills</h1>
      <ul>
        {data.techSkills.map((item, index) => (
          <li key={index}><span className='checkIcon'><FaCheck /></span><p className='listItem'>{item}</p></li>
        ))}
      </ul>
    </div>
    </div>
   
  );
};

export default Services;

export const fetchSkills = async () => {
  const techSkills = [
    'HTML/CSS: Proficiency in creating and styling web pages using HTML for structure and CSS for presentation.',
    'Strong knowledge of JavaScript for creating interactive elements, handling events, and manipulating data on web pages.',
    'Ability to develop websites that adapt and display correctly on different devices and screen sizes.',
    'Experience with popular frameworks like React, to build dynamic and scalable user interfaces.',
    ' Familiarity with tools like Git for managing code repositories, tracking changes, and collaborating with other developers.',
    'Knowledge of integrating and consuming APIs, working with JSON and utilizing web services for functionality.'
  ];

  const softSkills = [
    'Ability to effectively convey ideas and collaborate with clients, designers, and team members.',
    'Capacity to analyze issues, identify solutions, and troubleshoot errors in code.',
    ' Willingness to learn and adjust to new technologies, frameworks, and industry trends.',
    'Efficiently managing tasks, prioritizing work, and meeting deadlines.',
    'Ability to work well in a team environment, collaborate with colleagues, and contribute to collective',
    'Understanding client requirements, maintaining good relationships, and providing excellent customer service.',
    'Taking initiative, staying updated with industry trends, and continuously improving skills.'
  ];

 return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        resolve({ data: { softSkills, techSkills } });
      } else {
        reject(new Error('Failed to fetch skills.'));
      }
    }, 3000);
  });
};


//////////////////////////////////////////////////

// Fetch data from API syntax

// import React, { useEffect, useState } from 'react';

// const Services = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint
//         if (!response.ok) {
//           throw new Error('Failed to fetch data.');
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error(error);
//         // Handle error, e.g., show an error message or retry
//       }
//     };

//     fetchData();
//   }, []);

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {data.map((item, index) => (
//         <div key={index}>
//           <p>{item.property1}</p>
//           <p>{item.property2}</p>
//           <p>{item.property3}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Services;