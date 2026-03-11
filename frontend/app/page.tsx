"use client"

import { useRouter } from "next/navigation"
import "./globals.css"

export default function Home(){

  const router = useRouter()

  return(

    <div className="center-page">

      <div className="card">

        <h1>Task Manager</h1>

        <button onClick={()=>router.push("/login")}>
          Login
        </button>

        <button onClick={()=>router.push("/register")}>
          Register
        </button>

      </div>

    </div>

  )
}