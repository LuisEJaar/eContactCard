import React from "react"
import About from "./About"
import NameWTitle from "./NameWTitle"
import Socials from "./Socials"
import HeadshotCropped from './assets/HeadshotCropped.jpg'

export default function App () {
  return (
    <div className ="card bg-dark text-white topLevel">
      <img className="mx-auto d-block pt-2" aria-label="profile picture" src={HeadshotCropped}/>  
      <NameWTitle />
      <About />
      <Socials />
    </div>
  )
} 