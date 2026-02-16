"use client";

import { useState, useEffect } from "react";
import LoginModal from "@/components/LoginModal";
import SignupModal from "@/components/SignupModal";

export default function AppClientShell({ children }) {

  const [isLoginOpen,setIsLoginOpen]=useState(false);
  const [signupOpen,setSignupOpen]=useState(false);

  useEffect(()=>{

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
