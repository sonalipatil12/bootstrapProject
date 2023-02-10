import React, { useEffect, useRef, useState } from "react";
import Copyright from "../CopyRights/Copyright";
import Divider from "../Divider/Divider";
import Footer from "../Footer/Footer";
import "./contact.css";
import Form from "./Form";
import styled from "styled-components";
import { useInView } from 'react-intersection-observer';

const Conatct = ({ takeNavLink }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  useEffect(() => {

    takeNavLink("contact")

  }, [inView])
  return (
    <>
      <section ref={ref} className="contact" id="contact">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-second mb-0">
            CONTACT ME
          </h2>
          <Divider />
          <Form />
          <br />
        </div>
      </section>

    </>
  );
};
export default Conatct;
