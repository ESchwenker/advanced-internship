"use client";

import { useState, useEffect } from "react";
import LoginModal from "@/components/LoginModal";
import SignupModal from "@/components/SignupModal";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AppClientShell({ children }) {

  const [isLoginOpen,setIsLoginOpen]=useState(false);
  const [signupOpen,setSignupOpen]=useState(false);

  useEffect(()=>{

    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true
    });

    function openLogin(){
      setIsLoginOpen(true);
    }

    window.addEventListener("open-login",openLogin);

    return ()=>window.removeEventListener("open-login",openLogin);

  },[]);

  return (
    <>
      {children}

      <LoginModal
        isOpen={isLoginOpen}
        onClose={()=>setIsLoginOpen(false)}
        openSignup={()=>{
          setIsLoginOpen(false);
          setSignupOpen(true);
        }}
      />

      <SignupModal
        isOpen={signupOpen}
        onClose={()=>setSignupOpen(false)}
        openLogin={()=>{
          setSignupOpen(false);
          setIsLoginOpen(true);
        }}
      />
    </>
  );
}
