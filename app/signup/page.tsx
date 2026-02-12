"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function SignupPage() {
  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignup(e: React.FormEvent) {
    e.preventDefault()

    console.log("Signing up:", name, email, password)
    router.push("/dashboard")
  }

  return (
    <section id="signup">
      <div className="container">
        <div className="row">

          <div className="signup__wrapper">

            <h2 className="signup__title">Create an Account</h2>

            <form onSubmit={handleSignup} className="signup__form">
              <div className="signup__input--wrapper">
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="signup__input--wrapper">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="signup__input--wrapper">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button className="btn signup__btn">
                Sign Up
              </button>

            </form>

            <p className="signup__login">
              Already have an account?{" "}
              <Link href="/login">Login</Link>
            </p>

          </div>

        </div>
      </div>
    </section>
  )
}