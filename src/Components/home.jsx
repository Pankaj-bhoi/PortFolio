import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import '../Styles/home.css';
import {Link} from 'react-router-dom';
import Wallpaper from '../images/Wallpaper.png';
import about from '../images/about.png';
import contact from '../images/contact.png';

 const Home =()=>(
  <ReactFullpage
  navigation
  css
  render={({state, fullpageApi}) => {
    return (
      <ReactFullpage.Wrapper>
        <div className="section">
        <div className="heading">
        <h2 id="hello">Hello, I'm</h2>
          <h1 id="pankaj">Pankaj Kumar</h1>
          <Fade up delay={1500}><h3 id="full-stack">I'm a <span id="web">Full Stack Web Developer</span></h3></Fade>
          <Fade up delay={1600}><h4 id="and">And <span id="ui">UI/UX</span><span id="design">Designer</span></h4></Fade>
          <Fade left delay={2400}><span id="bar1"></span></Fade>
          <Fade left delay={2400}><span id="bar2"></span></Fade>
              <Tilt className="wallpaper" options={{maxTilt:10,
                                                  speed:300,
                                                  easing:"cubic-bezier(1,1.78,1,.46)"}}>
                <Fade right delay={1500}><img id='wallpaper'src={Wallpaper} alt='wallpaper'
              height="420px" width="700px"
              /></Fade>
            </Tilt>
        </div>
        </div>
        <div className="section">
          <div className="heading-about-me">
            <h1 id="about-me-home">About Me</h1>
            <h3 id="full-stack">Passionate about Technology</h3>
            <h4 id="and-about">And Music</h4>
            <span id="bar1"></span>
            <span id="bar2"></span>
            <Link to='/about' id='about-show'>Show me more</Link>
              <Tilt className="wallpaper" options={{maxTilt:10,
                                                  speed:300,
                                                  easing:"cubic-bezier(1,1.78,1,.46)"}}>
                <img id='wallpaper'className='about' src={about} alt='about'
                height="420px" width="700px"
                />
              </Tilt>
          </div>
        </div>
        <div className="section">
          <div className="heading-contact">
            <h1 id="contact">Get In Touch</h1>
            <h3 id="full-stack">bhoipankaj6@gmail.com</h3>
            <h4 id="and">Contact me and say Hello !</h4>
            <span id="bar1"></span>
            <span id="bar2"></span>
            <Link to='/contact' id='contact-show'>Show me more</Link>
              <Tilt className="wallpaper" options={{maxTilt:10,
                                                  speed:300,
                                                  easing:"cubic-bezier(1,1.78,1,.46)"}}>
                  <img id='wallpaper' className='contact' src={contact} alt='about'
                  height="420px" width="700px"
                  />
                </Tilt>
          </div>
        </div>

      </ReactFullpage.Wrapper>
    );
  }}
  />
  );
 export default Home;