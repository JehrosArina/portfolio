import { NavLink, Outlet } from "react-router-dom";
import { useState } from 'react';
import './NavBarLayout.css';
import Footer from "../Footer";
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBarLayout = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

   const closeMenu = () => {
    setMenuOpen(false);
  };


  const style = {
    textDecoration: 'none',
    color: 'white',
    fontWeight: '300',
    fontSize: '16px',
    fontWeight: '300',
  };

  return (
    <div className="navbar-layout">
      <header>
        <h1 className="slide-in">Jehros</h1>
        <nav className="navigation">
          
           <NavLink className='nav-link' style={style} to='/'>Home</NavLink>
              <NavLink className='nav-link' style={style} to='about'>About</NavLink>
              <NavLink className='nav-link' style={style} to='service'>Services</NavLink>
              <NavLink className='nav-link' style={style} to='portfolio'>Portfolio</NavLink>
              <NavLink className='nav-link' style={style} to='contact'>Contact</NavLink>
        </nav>

        <div className="hamburger-menu" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {isMenuOpen && (
          <div className="menu-container">
           
            <nav className='navigation'>
              <NavLink className='nav-link close-button' to='/' onClick={closeMenu}><FaTimes /></NavLink>
              <NavLink className='nav-link' style={style} to='/' onClick={closeMenu}>Home</NavLink>
              <NavLink className='nav-link' style={style} to='about' onClick={closeMenu}>About</NavLink>
              <NavLink className='nav-link' style={style} to='service' onClick={closeMenu}>Services</NavLink>
              <NavLink className='nav-link' style={style} to='portfolio' onClick={closeMenu}>Portfolio</NavLink>
              <NavLink className='nav-link' style={style} to='contact' onClick={closeMenu}>Contact</NavLink>   
            </nav>
          </div>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default NavBarLayout;