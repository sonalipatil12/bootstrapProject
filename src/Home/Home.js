import React, { useEffect, useState, useRef } from "react";
import About from "../About/About";
import Conatct from "../Contact/Contact";
import Header from "../Header/Header";
import PortFolio from "../PortFolio/PortFolio";
import Footer from "../Footer/Footer";
import Copyright from "../CopyRights/Copyright";
import { useInView } from 'react-intersection-observer';
import FullLayout from "../FullLayout/FullLayout";

const Home = () => {

  const [navLink, setNavLink] = useState();

  const takeNavLink = (link) => {
    setNavLink(link)
  }
  return (
    < >
      <FullLayout navLink={navLink} />
      <Header takeNavLink={takeNavLink} />
      <PortFolio takeNavLink={takeNavLink} />
      <About takeNavLink={takeNavLink} />
      <Conatct takeNavLink={takeNavLink} />
      <Footer takeNavLink={takeNavLink} />
      <Copyright />
    </ >
  );
};

export default Home;
