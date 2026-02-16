"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: Props) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loginAsGuest } = useAuth();

  if (!isOpen) return null;

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    login(email);
    router.push("/dashboard");
    onClose();
  }

  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          ✕
        </button>

        <h2 className="modal__title">Log in to Summarist</h2>

        <button
          className="modal__guest-btn"
          onClick={() => {
            loginAsGuest();
            router.push("/dashboard");
          }}
        >
          <div className="modal__guest-icon">
            <FaUser />
          </div>
          <span className="modal__btn-text">Login as a Guest</span>
        </button>

        <div className="modal__divider">
          <span>or</span>
        </div>

        <button className="modal__google-btn">
          <div className="modal__google-wrapper">
            <img src="/google.png" alt="google" />
          </div>
          <span className="modal__btn-text">Login with Google</span>
        </button>

        <div className="modal__divider">
          <span>or</span>
        </div>

        <form onSubmit={handleLogin} className="modal__form">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn modal__login-btn">
            Login
          </button>
        </form>

        <p className="modal__forgot">Forgot your password?</p>
        <div className="modal__signup">Don't have an account?</div>
      </div>
    </div>
  );
}
