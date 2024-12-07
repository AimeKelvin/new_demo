"use client";
import Hero from './sections/Hero'
import { Navbar } from "./components/Navbar"
import Theme from "./components/Theme";
import About from "./sections/About"
import Skills from './sections/Skills'

const links = [
  { label: "Home", href: "#Home" },
  { label: "About", href: "#About" },
  { label: "Projects", href: "#Projects" },
  { label: "Contact", href: "#Contact" }
];

export default function Home() {
  return (
    <>
    <Navbar links={links} >
        <Theme />
    </Navbar>
   <Hero /> 
   <About />
   <Skills />
    </>
  )
}

