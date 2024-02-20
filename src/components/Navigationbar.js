import React from 'react'
import {Container,Navbar,Nav, NavLink,Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";

export default function Navigationbar() {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      }
      else{
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const updateActiveLink = (value) =>{
    setActiveLink(value)
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            WELCOME
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home" 
              className={activeLink === "home" ? 'active navbar-link' : 'navbar-link'}
              onClick={()=> updateActiveLink('home')}>About me</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? 'active navbar-link' : 'navbar-link'} onClick={()=> updateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#experience" className={activeLink === "experience" ? 'active navbar-link' : 'navbar-link'} onClick={()=> updateActiveLink('experience')}>Experience</Nav.Link>
            <NavLink href="#education" className={activeLink === "education" ? 'active navbar-link' : 'navbar-link'} onClick={()=> updateActiveLink('education')}>Education</NavLink>
            <NavLink href="#linkedin">
              <a href="https://www.linkedin.com/in/sai-sujan-banna-850083141/">
              <Image src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" rounded height={30}/>
              </a>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
  )
}
