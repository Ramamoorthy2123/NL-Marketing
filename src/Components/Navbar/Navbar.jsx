import React from "react"
import './Navbar.css'
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { RiAdminFill } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";




const Navbar = () => {

  return (
    <>
    <header>
        <section id="logo">
            <img src={logo} alt="Logo" id="imgLogo"/>
            <h1>Neuro Labs Innovation Pvt Ltd</h1>
        </section>
        <section>
            {/* <button>Admin</button> */}
            <Link to="adminlogin" className="Link">Admin</Link>
            <Link to="userlogin" className="Link">User</Link>
        </section>
        
    
    </header>
    <hr id="hr"/>
    
    
    </>
  )
}
export default Navbar;