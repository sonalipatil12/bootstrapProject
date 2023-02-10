import React, { useState, useEffect } from 'react'

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import FullLayoutRoutes from "./FullLayoutRoutes";
import styled from "styled-components";
import "./FullLayout.css";
import { HiOutlineBars3 } from "react-icons/hi2";
const FullLayout = ({ navLink }) => {
  const [nav, setNav] = useState(false)

  useEffect(() => {
    const navbarSize = () => {

      if (window.screenY >= 80) {
        setNav(true)
      }
      else {
        setNav(false)
      }
    }
    window.addEventListener("scroll", navbarSize)
    return () => window.removeEventListener('scroll', navbarSize)
  }, [nav])
  return (
    <Navbar
      className="fixed-top"
      collapseOnSelect
      expand="lg"
      id="mainNav"
      style={{ backgroundColor: "#2c3e50", fontWeight: "700" }}
    >
      <Container  >

        <Navbar.Brand
          href="#home"
          style={{

            fontSize: "1.75em",
            color: "#ffff",

          }}
        >
          START BOOTSTRAP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          MENU
          <HiOutlineBars3 />
        </Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ justifyContent: "end" }}
        >
          <Nav>
            {Array.isArray(FullLayoutRoutes) &&
              FullLayoutRoutes.filter((route, i) => route.showInMenu).map(
                (route, i) => (
                  <Nav.Link href={`#${route?.label}`} >
                    <span style={{ backgroundColor: route?.label == navLink ? " #1abc9c" : "", padding: "20px", borderRadius: "4px" }}> {route?.label.toUpperCase()}</span>
                  </Nav.Link>
                )
              )}
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};


export default FullLayout;
