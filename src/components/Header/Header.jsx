
import './Header.css';
import {  useEffect, useState } from "react";

import { ToastContainer } from "react-toastify";
import { Link } from "react-scroll";

const Header = () => {

   
   
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
       
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme])

   

    const links = <>
   
        <li><Link to="aboutMe" smooth={true} duration={500}>About Me </Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact </Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills </Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects </Link></li>
        <li><Link to="education" smooth={true} duration={500}>Education </Link></li>

      
        <div className="flex items-center">
            <label className="flex cursor-pointer gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>

                <input type="checkbox" onClick={handleToggle}
                    checked={theme == "light" ? false : true}
                    value="synthwave" className="toggle theme-controller" />

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
        </div>
    </>

    return (
     
        <div className="navbar fixed z-10 bg-opacity-25 bg-black text-white w-[px] md:w-full h-28">
            
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                 
                    <ul tabIndex={0} className="menu menu-sm bg-opacity-25 bg-black dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        {links}
                    </ul>
                </div>




            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Header;