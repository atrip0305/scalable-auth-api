"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import api from "../../lib/api"
import "../globals.css"

export default function Register() {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {

      await api.post("/auth/register",{
        email,
        password
      })

      alert("Registration successful")

      router.push("/")

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch(err:any){

      alert(err.response?.data?.message || "Registration failed")

    }
  }

  return (
    <div className="center-page">

      <div className="card">

        <h1>Register</h1>

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

          <button type="submit">Register</button>

        </form>

        <p className="auth-link">
          Already have an account? <Link href="/login">Login</Link>
        </p>

      </div>

    </div>
  )
}