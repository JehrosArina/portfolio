
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import NavBarLayout from "./Layouts/NavBarLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import {Contact} from "./Pages/Contact";
import Porfolio from "./Pages/Porfolio";
import Services  from "./Pages/Services";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBarLayout />}>
        <Route index element={<Home />} />
       
         <Route path="about" element={<About  />} />
    
         <Route path="service"element={<Services  />}/>
        <Route path="portfolio" element={<Porfolio />} />
        <Route path="contact" element={<Contact />} />     
           
      </Route>
 
  )
);

  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
