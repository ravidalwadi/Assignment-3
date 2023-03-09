import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import Header from '../components/Header'
import AuthContext from '../auth-context'

const News = () => {

    let [news,setNews] = useState("")

    const authcontext = useContext(AuthContext);

    useEffect(()=>{
        getnews()

    },[])

    let getnews = async () =>{
        let response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=019da60503234ea1993411a74186c8c7")
        let data  = await response.json()
        console.log(data.articles)
        setNews(data.articles)
    }

  return (
   
    <main>
    <Header />
    <div className="sub-heading">
        <h1>Top News</h1>
    </div>
   
   {news && news.map((data)=> <NewsCard data = {data} />)}

    
</main>
  )
}

export default News