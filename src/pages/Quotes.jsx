import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import AuthContext from '../auth-context';
import QuoteCard from '../components/QuoteCard';

const Quotes = () => {
    let [quotes,setQuotes] = useState("")
    const authcontext = useContext(AuthContext);
    useEffect(()=>{
        getquotes()

        if(localStorage.getItem("islogin")){
            authcontext.login()
       }
    },[])

    let getquotes = async () =>{
        let response = await fetch("https://api.quotable.io/quotes")
        let data  = await response.json()
        console.log(data)
        setQuotes(data.results)
    }

  return (
   
    <main>
    <Header />
    <div className="sub-heading">
        <h1>Top Quotes</h1>
    </div>
    
    {quotes && quotes.map((quote)=> <QuoteCard data = {quote} />)}
</main>)
}

export default Quotes