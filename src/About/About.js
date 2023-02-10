import React, { useEffect, useRef, useState } from "react";
import "./about.css";
import Divider from "../Divider/Divider";
import { useInView } from 'react-intersection-observer';

const About = ({ takeNavLink }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  useEffect(() => {

    takeNavLink("about")

  }, [inView])


  return (
    <>
      <section ref={ref} className="about   mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white mb-0">
            ABOUT
          </h2>
          <Divider clsName="divider-light" />
          <div className="row">
            <div class="col-lg-4 ms-auto">
              <p className="lead text-white">
                Freelancer is a free bootstrap theme created by Start Bootstrap.
                The download includes the complete source files including HTML,
                CSS, and JavaScript as well as optional SASS stylesheets for
                easy customization.
              </p>
            </div>
            <div class="col-lg-4 me-auto">
              <p className="lead text-white">
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </p>
            </div>
          </div>
          <div className="download">
            <div>
              <a
                className="btn btn-xl btn-outline-light"
                href="https://startbootstrap.com/theme/freelancer/"
              >
                <svg
                  className="svg-inline--fa fa-download me-2"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="download"
                  role="img"
                  style={{ width: "23px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"
                  ></path>
                </svg>
                Free Download!
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
