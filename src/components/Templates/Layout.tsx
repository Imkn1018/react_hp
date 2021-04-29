import { ReactNode } from "react"
import { Header } from "../Organisms/Header"

export const Layout = (props : {children: ReactNode}) => {
  const {children} = props
  return(
    <>
    <Header />
    {children}
    <div></div>
    </>
  )
}