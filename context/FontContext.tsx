"use client"

import { createContext, useContext, useState } from "react"

const FontContext = createContext({
  fontSize: 18,
  setFontSize: (_:number)=>{},
  activeFont: 0,
  setActiveFont: (_:number)=>{}
})

export function FontProvider({ children }: any){

  const [fontSize,setFontSize] = useState(18)
  const [activeFont,setActiveFont] = useState(0)

  return (
    <FontContext.Provider value={{
      fontSize,
      setFontSize,
      activeFont,
      setActiveFont
    }}>
      {children}
    </FontContext.Provider>
  )
}

export function useFont(){
  return useContext(FontContext)
}

