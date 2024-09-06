import { useState, useEffect } from "react";
import axios from "axios";
import React from "react"
import './Admin.css'
import { Link, Navigate } from "react-router-dom";
import logo from "../../assets/logo.png"

const Admin = () => {

    const [records, setRecords] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:8000/records/")
        .then(response => {
          setRecords(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the data!", error);
        });
    }, []);

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
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>User Name</th>
            <th>Visited Company</th>
            <th>Status</th>
            <th>Purpose</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td>{record.serial_number}</td>
              <td>{record.user_name}</td>
              <td>{record.visited_company}</td>
              <td>{record.status}</td>
              <td>{record.purpose}</td>
              <td>{new Date(record.date_created).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      
      </>
    )
  }
export default Admin