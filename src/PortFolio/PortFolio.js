import React, { useState, useEffect, useRef } from "react";
import PortFolioItemsList from "./PortFolioItemsList";
import "./portfolio.css";
import Modal from "react-bootstrap/Modal";
import PortFolioItem from "./PortFolioItem";
import Divider from "../Divider/Divider";
import { CgMathPlus } from "react-icons/cg";
import { useInView } from 'react-intersection-observer';
const PortFolio = ({ takeNavLink }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  useEffect(() => {

    takeNavLink("portfolio")

  }, [inView])
  // const ref = useRef();
  // const [navLink, setNavLink] = useState();
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0]
  //     if (entry?.isIntersecting) {
  //       setNavLink(entry?.target?.id)
  //     }
  //     else {
  //       setNavLink("")

  //     }
  //     console.log("enntry", entry?.target?.id)
  //   },)
  //   observer.observe(ref.current)
  // }, [])
  // useEffect(() => {
  //   console.log("reff", ref)
  // }, [])

  const [show, setShow] = useState(false);
  const [item, setItem] = useState();
  const handleClick = (portFolio) => {
    setItem(portFolio);
    setShow(!show);
  };
  const handleClose = () => {
    setShow(false);
  };



  return (
    <>

      <section ref={ref} className="page-section" id="portfolio" >

        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-second mb-0">
            Portfolio
          </h2>
          <Divider />
          <div className="row justify-content-center  ">
            {Array.isArray(PortFolioItemsList) &&
              PortFolioItemsList.map((portFolio, i) => {
                return (
                  <div
                    onClick={() => {
                      handleClick(portFolio);
                    }}
                    key={i}
                    className="portfolio-item rounded-4 col-md-4   mt-5"
                  >
                    <div className="img">
                      <div className="inner-img">
                        <img
                          className="rounded-4"
                          src={portFolio?.Image}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <div className="inner-img2">
                        <CgMathPlus
                          size={80}
                          className="plus"
                          color="white"

                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <PortFolioItem
        show={show}
        handleClose={handleClose}
        className="col-8"
        item={item}
      />
    </>
  );
};

export default PortFolio;


