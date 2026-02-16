"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  openLogin: () => void;
}

export default function SignupModal({ isOpen, onClose, openLogin }: Props) {
  const router = useRouter();
  const { register } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    const result = register(email, password);

    if (result) {
      setError(result);
      return;
    }

    onClose();
    // redirect handled in AuthContext
  }

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          ✕
        </button>

        <h2 className="modal__title">Sign up to Summarist</h2>

        {/* GOOGLE BUTTON (visual only) */}
        <button className="modal__google-btn">
          <div className="modal__google-wrapper">
            <img src="/google.png" alt="google" />
          </div>
          <span className="modal__btn-text">Sign up with Google</span>
        </button>

        <div className="modal__divider">
          <span>or</span>
        </div>

        <form onSubmit={handleSignup} className="modal__form">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p style={{ color: "red", marginTop: "6px" }}>{error}</p>}

          <button className="btn modal__login-btn">Sign up</button>
        </form>

        <div
          className="modal__signup"
          style={{ cursor: "pointer" }}
          onClick={openLogin}
        >
          Already have an account?
        </div>
      </div>
    </div>
  );
}
