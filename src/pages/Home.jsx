import React, { useContext, useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import '../App.css'
import {  db } from '../db';
import AuthContext from '../auth-context';
import Header from '../components/Header';

const Home = () => {
    let [users,setUsers] = useState([])
    let [data,setData] = useState([])

    let [jokecount,setJokecount] = useState(0)
    let [newscount,setNewscount] = useState(0)
    let [userscount,setUserscount] = useState(0)
    let [weather,setWeather] = useState("")

    const authcontext = useContext(AuthContext);
    useEffect( ()=>{
       getUsers()
       
       if(localStorage.getItem("islogin")){
            authcontext.login()
       }

       getquotes()
       getnews()
       getweather()
    },[])


    let getquotes = async () =>{
        let response = await fetch("https://api.quotable.io/quotes")
        let data  = await response.json()
        console.log(data.count)
        setJokecount(data.count)
    }

    let getnews = async () =>{
        let response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=019da60503234ea1993411a74186c8c7")
        let data  = await response.json()
        console.log(data.articles.length)
        setNewscount(data.articles.length)
    }


    let getUsers = async ()=>{
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc)=> data.push(doc.data()))
        console.log(data.length)

        setUserscount(data.length)
        setUsers(data)
    }

    let getweather = async () =>{
        let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=hamilton&appid=152c2cf11d2a280a4ecc4ce4dc334790&units=metric")
        let data  = await response.json()
        console.log(data)
        setWeather(data)
    }

    
    return (
        <main>
            <Header />
            <div className="sub-heading">
                <h1>Dashboard</h1>
            </div>
            <div className="cards">
                <div className="card">
                    <i><i style={{ fontSize: 40, padding: 20 }} className="fa-solid fa-user" /></i>
                    <div>
                        <h2>{userscount && userscount}</h2>
                        <p>Total Users</p>
                    </div>
                </div>
                <div className="card">
                    <i><i style={{ fontSize: 40, padding: 20 }} className="fa-solid fa-newspaper" /></i>
                    <div>
                        <h2>{newscount && newscount}</h2>
                        <p>Total News</p>
                    </div>
                </div>
                <div className="card">
                    <i><i style={{ fontSize: 40, padding: 20 }} className="fa-solid fa-face-smile-wink" /></i>
                    <div>
                        <h2>{jokecount && jokecount }</h2>
                        <p>Total Jokes</p>
                    </div>
                </div>
                <div className="card">
               <i style={{ fontSize: 40, padding: 20 }} className="fa-solid fa-cloud-sun" />
                    <div>
                        <h2>{weather && weather.main.temp} ℃</h2>
                        <p>{ weather && weather.name}</p>
                    </div>
                </div>
            </div>
            <div className="userslist">
                <table bgcolor="white" border={0} cellSpacing={0} className="users">
                    <tbody>
                    <tr bgcolor="#F9FAFC">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Status</th>
                    </tr>
                   
                   {
                     users && users.map((user)=>(
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <th>•••••••••</th>
                            <td><span>Active</span></td>
                        </tr>
                     ))
                   }
                     
                    </tbody>
                    </table>
            </div>
           
        </main>

    )
}

export default Home