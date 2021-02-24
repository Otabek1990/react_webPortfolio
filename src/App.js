import React from "react";
import MyNavbar from "./components/my-navbar/my-navbar";
import MyCarousal from "./components/my-carousal/my-carousal";
import MyTitleMessage from "./components/title-message/title-message";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import ContactForm from "./pages/contact-form/contact-form";
import { Parallax } from "react-parallax";
 import Particles from "react-particles-js";
 import { particlesOptions } from "./particlesOptions";
import FooterPanel from "./components/footer/footer";

import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal />
      <MyTitleMessage />
      <Particles className=" particles-box" params={particlesOptions}/>
      
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

          </Fade>
        </Container>
      </div>
    
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>

      <hr />
      <FooterPanel />
    </div>
  );
};

export default App;
