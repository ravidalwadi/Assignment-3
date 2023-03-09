import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import AuthContext from '../auth-context'

const Sidebar = () => {
  let navigate = useNavigate()
  const authcontext = useContext(AuthContext);
  let signout = ()=>{
    localStorage.clear()
    authcontext.logout()
    navigate("/login")
     
  }
  return (
   <aside>
  <div className="logo">
    <img width="60px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
    <h1>REACTJS</h1>
  </div>
  <div className="menu-items">
    <li><i className="fa-solid fa-house-chimney" /><NavLink to="home" activeClassName="active">Home</NavLink></li>
    <li><i className="fa-solid fa-newspaper" /><NavLink to="news" activeClassName="active">News</NavLink></li>
    <li><i className="fa-solid fa-quote-left" /><NavLink to="quotes">Quotes</NavLink></li>
    <li><i className="fa-solid fa-cloud" /><NavLink to="weather">Weather</NavLink></li>
    <li><i className="fa-solid fa-right-from-bracket" /><button onClick={signout}>Sign Out</button></li>
  </div>
</aside>

  )
}

export default Sidebar