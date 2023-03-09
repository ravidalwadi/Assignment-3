import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from '../db'
import { collection, addDoc } from "firebase/firestore"; 

const Register = () => {
    let [email,setEmail] = useState("")
    let [pwd,setPwd] = useState("")
    let [name,setName] = useState("")
    let register = async ()=>{
        let userCredentials = await createUserWithEmailAndPassword(auth,email,pwd)
        await updateProfile(auth.currentUser,{displayName: name})
        console.log(auth.currentUser)
        await addDoc(collection(db,"users"),{name:auth.currentUser.displayName,email:auth.currentUser.email,uid:auth.currentUser.uid})
    }
  return (
    <div className="formdata">
            <h1>ACCOUNT REGISTER</h1>

            <div className='inputgroup'>
                <label>Name</label>
                <input type="name" onChange={(e)=>setName(e.target.value)} />
            </div>

            <div className='inputgroup'>
                <label>EMAIL</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div className='inputgroup'>
                <label>PASSWORD</label>
                <input type="password" onChange={(e)=>setPwd(e.target.value)} />
            </div>

            <button onClick={register}>Register</button>
    </div>
  )
}

export default Register