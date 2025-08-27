import { Heading } from "../components/Heading"
import { Inputbox } from "../components/inputbox"
import { Subheading } from "../components/Subheading"
import { Buttonwaring } from "../components/Buttonwarning"
import {Button} from "../components/Button"
import { useState } from "react"
import axios from "axios"
export const Signup=()=>{
    const [firstName,setFirstName]=useState("")
    const [lastName,setlastName]=useState("")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center  p-2 h-max px-4">

            <Heading label={"Sign Up"}/>
             <Subheading label={"Enter the Credentials correctly to access eveything please  this sign in page"}/>
              <Inputbox onChange={e=>{
                setFirstName(e.target.value)
              }}laceholder="Abhi" label={"firstname"} value={firstName}/>
              <Inputbox onChange={e=>{
                setlastName(e.target.value)
              }} placeholder="Singh" label={"lastname"} value={lastName} />
              <Inputbox onChange={e=>{
                setUsername(e.target.value)
              }} placeholder="abhi@gmail.com" label={"email"} value={username}/>
              <Inputbox onChange={e=>{
                setPassword(e.target.value)
              }} placeholder="******" label={"password"} value={password}/>  
              <div className="pt-4">
                <Button onclick={()=>{
                    axios.post("http://localhost:3000/api/v1/user/signup",{
                        username,
                        firstName,
                        lastName,
                        password
                    })
                }} label={"Sign Up"}/>
                </div> 
                <Buttonwaring label={"Already an account ?"} buttonText={"Sign In"} to={"/signin"}></Buttonwaring>
          </div>
        </div>
    </div>
    
}