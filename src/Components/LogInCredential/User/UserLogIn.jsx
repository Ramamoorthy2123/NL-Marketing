import { useState } from 'react';
import { AiOutlineMail } from "react-icons/ai";
// import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import adminphoto from '../../../assets/adminphoto.png';
import './UserLogIn.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';
import iconAU  from '../../../assets/iconAU.png'

const UserLogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (email  && password) {
      try {
        // Sending a POST request to the FastAPI backend on localhost
        const response = await axios.post('http://localhost:8000/userlogin', {
          email: email,
          password: password
        });

        if (response.status === 201) {
          // Successfully signed up, redirect to the login page
          navigate('/userlogin');
        } else {
          // Handle other responses
          alert('Sign-up failed, please try again.');
        }
      } catch (error) {
        console.error('Error during sign-up:', error);
        alert('An error occurred during sign-up. Please try again.');
      }
    } else {
      // Some fields are missing, show an alert
      alert('Please fill in all the details.');
    }
  };

  return (
    <>
    <Navbar />
      <main className='main'>
        <section className="left">
          <img src={adminphoto} alt="Admin" />
        </section>
        <section className='right'>
          <img src={iconAU} alt="icon" />
          <h1>Log In for User</h1>
          <div>
            <label htmlFor="email">
              <AiOutlineMail />
              Email
            </label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div>
            <label htmlFor="password">
              <RiLockPasswordLine />
              Password
            </label>
            <input 
              type="password" 
              id='password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <div id='already'>
            <p>New Register </p>
            <Link to='/usersignup' className='already-link'>Sign Up</Link>
          </div>
          <button 
            id='button' 
            onClick={handleSignUp}
            className='Link'
          >
            Log In
          </button>
        </section>
      </main>
    </>
  );
};

export default UserLogIn;
