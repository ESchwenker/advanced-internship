"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    console.log("Logging in:", email, password)

    router.push("/dashboard")
  }

  return (
    <section id="login">
      <div className="container">
        <div className="row">

          <div className="login__wrapper">

            <h2 className="login__title">Login</h2>

            <form onSubmit={handleLogin} className="login__form">
              <div className="login__input--wrapper">
                <label>Email</label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="login__input--wrapper">
                <label>Password</label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button className="btn login__btn">
                Login
              </button>

            </form>

            <p className="login__signup">
              Don't have an account?{" "}
              <Link href="/signup">Sign up</Link>
            </p>

          </div>

        </div>
      </div>
    </section>
  )
}