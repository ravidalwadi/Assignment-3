import React, { useState } from 'react'
import { auth, db } from '../db'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
  let [email,setEmail] = useState("")
  let [pwd,setPwd] = useState("")

  let navigate = useNavigate()
  let login = async ()=>{
    let userCredentials = await signInWithEmailAndPassword(auth,email,pwd)
    
    if(userCredentials){
      localStorage.setItem("islogin","yes")
      navigate("/home")
    }
    else{
      toast("Please Enter Valid Username & Password!")
    }

    navigate("/home")
  }
  return (
    <div className="formdata">
            <ToastContainer />
            <h1>ACCOUNT LOGIN</h1>

            <div className='inputgroup'>
                <label>EMAIL</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div className='inputgroup'>
                <label>PASSWORD</label>
                <input type="password" onChange={(e)=>setPwd(e.target.value)} />
            </div>

            <button onClick={login}>Login</button>
    </div>
    
  )
}

export default Login