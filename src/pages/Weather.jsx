import React,{useContext, useEffect,useState} from 'react'
import Header from '../components/Header'
import AuthContext from '../auth-context'

const Weather = () => {

    let [weather,setWeather] = useState("")
    const authcontext = useContext(AuthContext);
    useEffect(()=>{
        getweather()


        if(localStorage.getItem("islogin")){
            authcontext.login()
        }
    },[])

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
        <h1>Weather Data</h1>
    </div>
    <div className="cards">
        <div className="weathercard">
            <div className='row'>
                <h1 style={{fontSize:'120px'}}>{weather && weather.main.temp} ℃</h1>
                <i style={{ fontSize: 140, padding: 20 }} className="fa-solid fa-cloud-sun" />
            </div>
            <h3 style={{fontSize:'30px'}}>{ weather && weather.name}</h3>
            <h3 style={{textAlign:'center',fontSize:'60px',marginTop:'30px'}}>•••</h3>
        </div>
       
    </div>
    
</main>
  
  )
}

export default Weather