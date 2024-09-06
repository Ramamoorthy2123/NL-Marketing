import { useState } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import adminphoto from '../../../assets/adminphoto.png';
import './AdminLogIn.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';
import iconAU from '../../../assets/iconAU.png';
import bcrypt from 'bcryptjs';

const AdminLogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (email && password) {
      try {
        // Generate salt rounds (adjust rounds as needed)
        const saltRounds = 10;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const response = await axios.post('http://localhost:8000/adminlogin', {
          email: email,
          password: hashedPassword
        });

        if (response.status === 200) {
          navigate('/admin');
        } else {
          alert('Login failed, please check your credentials.');
        }
      } catch (error) {
        console.error('Error during login:', error.response ? error.response.data : error.message);
        alert('An error occurred during login. Please try again.');
      }
    } else {
      alert('Please fill in both email and password.');
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
          <h1>Log In for Admin</h1>
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
            <p>New Register? </p>
            <Link to='/adminsignup' className='already-link'>Sign Up</Link>
          </div>
          <button 
            id='button' 
            onClick={handleLogin}
            className='Link'
          >
            Log In
          </button>
        </section>
      </main>
    </>
  );
};

export default AdminLogIn;
