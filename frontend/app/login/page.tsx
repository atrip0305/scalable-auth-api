/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import api from "../../lib/api"
import "../globals.css"

export default function Login() {

  const router = useRouter()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = async (e:any)=>{
    e.preventDefault()

    const res = await api.post("/auth/login",{
      email,
      password
    })

    localStorage.setItem("token",res.data.access_token)

    router.push("/dashboard")
  }

  return (
  <div className="login-page">

    <div className="login-box">

      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <p className="auth-link">
          Do not have an account?? <Link href="/register">Register</Link>
        </p>

        <button type="submit">Login</button>

      </form>

    </div>

  </div>
)
}