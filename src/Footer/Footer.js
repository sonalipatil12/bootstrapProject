import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";

import { TiSocialFacebook } from "react-icons/ti"
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialDribbble } from "react-icons/ti";
import { useInView } from 'react-intersection-observer';

import { useTheme } from "styled-components";

const Wrapper = styled("section")`
background-color: #2c3e50;
margin: 3;
padding: 10px 10px;
color:white;
.container{
  padding-top:50px
}
.heading{
  font-weight:700;
}
.outer-icons{
 border:1px solid;
 width:50px;
 height:50px;
 border-radius:25px;
 &:hover{
  background-color:white;
 }
  
}
.icons{
  color:white;
  font-size:50px;
  &:hover{
      color:black;
  }
  
}
p{
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 1rem;
  display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
a{
  color:#1abc9c;
}

 
`;

const Footer = ({ takeNavLink }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  useEffect(() => {

    takeNavLink("")

  }, [inView])
  const theme = useTheme();
  return (
    <>
      <Wrapper ref={ref} theme={theme}>
        <section className="foother">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 pt-5 ">
                <div className="d-flex flex-column ">
                  <h4 className="heading">LOCATION</h4>
                  <p>2215 John Daniel Drive
                    Clark,<br /> MO 65243</p>
                </div>
              </div>
              <div className="col-12 col-md-4 pt-5 mb-5 mb-md-0">
                <div className="d-flex flex-column">
                  <h4 className="heading">AROUND THE WEB</h4>
                  <div className="d-flex" style={{ gap: "10px" }}>
                    <div className="outer-icons d-flex justify-content-center align-items-center">
                      <TiSocialFacebook className="icons" size={30} />
                    </div>
                    <div className="outer-icons d-flex justify-content-center align-items-center">
                      <TiSocialTwitter className="icons" size={30} />

                    </div>

                    <div className="outer-icons d-flex justify-content-center align-items-center">
                      <TiSocialLinkedin className="icons" size={30} />
                    </div>
                    <div className="outer-icons d-flex justify-content-center align-items-center">
                      <TiSocialDribbble className="icons" size={30} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 pt-5">
                <div className="d-flex flex-column">
                  <h4 className="heading">ABOUT FREELANCER</h4>
                  <p>Freelance is a free to use, MIT licensed Bootstrap theme created by <a href="http://startbootstrap.com">Start Bootstrap</a> .</p>
                </div>

              </div>
            </div>

          </div>

        </section>
      </Wrapper>
    </>
  );
};

export default Footer;

