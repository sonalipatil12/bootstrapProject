import React, { useEffect, useState } from "react";
import Divider from "../Divider/Divider";
import "./header.css";
import { useInView } from 'react-intersection-observer';

const Header = ({ takeNavLink }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  useEffect(() => {

    takeNavLink("")

  }, [inView])
  return (
    <>
      <div ref={ref} className="bootstrap-header">
        <div className="header-content">
          <img src="img/avataaars.svg" alt="..." style={{ width: "15rem" }} />
          <h1 className="main-header">START BOOTSTARP</h1>
          <Divider clsName="divider-light" />
          <p className="subheading font-weight-light mb-0">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
