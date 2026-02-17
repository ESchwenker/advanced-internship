"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  openSignup: () => void;
}

export default function LoginModal({ isOpen, onClose, openSignup }: Props) {
  const { login, loginAsGuest } = useAuth();

  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const result = login(email, password);

    if (result) {
      setError(result);
      return;
    }

    onClose();
  }

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          ✕
        </button>

        <h2 className="modal__title">Log in to Summarist</h2>

        {error && (
          <p className="modal__error-top">
            {error}
          </p>
        )}

        {/* GUEST LOGIN */}
        <button
          className="modal__guest-btn"
          onClick={() => {
            loginAsGuest();
            onClose();
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
        <div
          className="modal__signup"
          style={{ cursor: "pointer" }}
          onClick={openSignup}
        >
          Don't have an account?
        </div>
      </div>
    </div>
  );
}
