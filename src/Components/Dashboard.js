import React, { useEffect, useState } from 'react'
import axios from "axios"
import styles from "./Dashboard.module.css";
import { useNavigate } from 'react-router-dom'
export default function Dashboard() {
    const [appliedOppurtunites,setAppliedOppurtunities] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:3000/auth/verify").then((res)=>{
           if(!res.data.status){
            navigate("/login")
           } else {
            fetchAppliedOppurtunities()
           }
        })
    },[navigate])
    const fetchAppliedOppurtunities =async()=>{
        try {
            const response = await axios.get("http://localhost:3000/auth/applied-oppurtunities")
            setAppliedOppurtunities(response.data)
        } catch (error) {
            
        }
    }
    const handleLogout=()=>{
        axios.get("http://localhost:3000/auth/logout")
        .then((res)=>{
            if(res.data.status){
                navigate("/login")
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>Dashboard</h1>
        <h2 className={styles.header}>Applied Oppurtunities</h2>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
        <div className={styles.grid}>
          {appliedOppurtunites.map((oppurtunity, index) => (
            <div className={styles.card} key={index}>
              <h1>{oppurtunity.profile_name}</h1>
              <p>
                <strong>Company: </strong> {oppurtunity.company_name}
              </p>
              <p>
                <strong>Stipend: </strong> {oppurtunity.stipend}
              </p>
              <p>
                <strong>Duration: </strong> {oppurtunity.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
