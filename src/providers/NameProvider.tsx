import { createContext,ReactNode,useState } from "react";

export const Name = createContext("aaaaa");

export const NameProvider = (props: {children: ReactNode}) => {
  const {children} = props
  const name = "text"
  return(
    <Name.Provider value={name}>
      {children}
    </Name.Provider>
  )
}