import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import '../Styles/about.css';
import Fade from 'react-reveal/Fade';

import pankaj from '../images/pankaj.jpg';
import html5 from '../images/skills/html5.png';
import css3 from '../images/skills/css3.png' ;
import js from '../images/skills/js.png' ;
import jese6 from '../images/skills/jese6.png';
import react from '../images/skills/react.png';
import angular from '../images/skills/angular.png';
import bootstrap from '../images/skills/bootstrap.png';
import  gsap from '../images/skills/gsap.png';
import jquery from '../images/skills/jquery.png';
import materialize from '../images/skills/materialize.png';
import threejs from '../images/skills/threejs.png';
import ajax from '../images/skills/ajax.png';
import responsive from '../images/skills/responsive.png';
import dj from '../images/skills/dj.png';
import node from '../images/skills/node.png';
import api from '../images/skills/api.png';
import mongo from '../images/skills/mongo.png';
import mysql from '../images/skills/mysql.png';
import ae from '../images/skills/ae.png';
import ps from '../images/skills/ps.png';
import ai from '../images/skills/ai.png';
import xd from '../images/skills/xd.png';
import br from '../images/skills/br.png';

import fire from '../images/skills/fire.png';
import google from '../images/skills/google.png';
import aws from '../images/skills/aws.png';

import mobile from '../images/skills/mobile.png';
import Redux from '../images/skills/Redux.png';
import ionic from '../images/skills/ionic.png';
import wp from '../images/skills/wp.png';
// const section2 ={
//   backgroundColor:'#1F123A',
// }
const images ={
  position:'absolute',
}
const logoSkill = {
  marginTop:'-20px',
  position:'realative',
  paddingRight:'10px',
  paddingBottom:'40px'
}

const style_html5={
  float:'left', 
  marginLeft:'55px',
  marginTop:'0',
  color:'#ffffff'
}
const style_css3 ={
  float:'left',
  marginLeft:'54px',
  marginTop:'0',
  color:'#ffffff'
}
const style_js ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_jese6 ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_react ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_angular ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_bootstrap ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_gsap ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_jquery ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_materialize ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_threejs ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_ajax ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_responsive ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_django ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_node ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_api ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_mongo ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_mysql ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_ae ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_ps ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_fire ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_google ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_aws ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_mobile ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_Redux ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_ionic ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_wp ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_ai ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_xd ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
const style_br ={
  float:'left',
  marginLeft:'56px',
  marginTop:'0',
  color:'#ffffff'
}
// this is span
const style_html_span={
  marginLeft:'120px'
}
const style_css3_span={
  marginLeft:'135px'
}
const style_js_span={
  marginLeft:'95px'
}
const style_jese6_span={
  marginLeft:'143px'
}
const style_react_span={
  marginLeft:'115px'
}
const style_angular_span={
  marginLeft:'95px'
}
const style_gsap_span={
  marginLeft:'130px'
}
const style_bootstrap_span={
  marginLeft:'96px'
}
const style_jquery_span={
  marginLeft:'120px'
}
const style_materialize_span={
  marginLeft:'85px'
}
const style_threejs_span={
  marginLeft:'113px'
}
const style_ajax_span={
  marginLeft:'137px'
}
const style_responsive_span={
  marginLeft:'78px'
}
const style_django_span={
  marginLeft:'116px'
}
const style_node_span={
  marginLeft:'116px'
}
const style_api_span={
  marginLeft:'143px'
}
const style_mongo_span={
  marginLeft:'96px'
}
const style_mysql_span={
  marginLeft:'118px'
}
const style_ae_span={
  marginLeft:'150px'
}
const style_ps_span={
  marginLeft:'152px'
}
const style_fire_span={
  marginLeft:'107px'
}
const style_google_span={
  marginLeft:'116px'
}
const style_aws_span={
  marginLeft:'135px'
}
const style_mobile_span={
  marginLeft:'118px'
}
const style_Redux_span={
  marginLeft:'122px'
}
const style_ionic_span={
  marginLeft:'130px'
}
const style_wp_span={
  marginLeft:'130px'
}
const style_ai_span={
  marginLeft:'152px'
}
const style_xd_span={
  marginLeft:'150px'
}
const style_br_span={
  marginLeft:'112px'
}
const About =()=>(
  <ReactFullpage
  render={() => {
    return (
      <ReactFullpage.Wrapper>
            <div className="section"> 
              <div className="clearfix">
                <div className="box" id="about" >
                <Fade up delay={1000}>
                <div>
                  <h2 id="about-header">About Me</h2>
                  <img  id='photo' src={pankaj} alt="pankaj" width='200px' />
                  <h3 id="who-is-this">Who is this guy ?</h3>
                  <div className="about-me-paragraph">
                  <p id="about-paragraph" >Hi, I'm Pankaj. Born in Koraput Odisha in 1996. Now pursuing my B.Tech degree from CET Bhubaneswar in Information Technology. Now I live in Bhubaneswar. I've always been drawn to the overlap between design and development. My journey began as a freelance designer nearly 3 years ago. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. My skills are broad  from UX to design, front end to back end development.
                      I'm available for remote work.</p>
                </div>
                </div>
                </Fade>
                </div>

                <div className="box" id="passion">
                  <h2 id="passion-header">Passion</h2>
                  <div className="passion-list">
                    <div className="technology">
                      <h4 id="technology-header">Technology</h4>
                      <div className="technology-paragraph">
                      <p id="tech-paragraph">Technology has the ability to impact lives at a level and scale that has never been realized in the history of mankind.
It certainly has had a huge impact in upbringing the new revolution which eventually changes the lifestyle of all the correspondant humans. The idea that something 
I create can impact someone across the world now,or in the future is what drives my passion for technology.I always try to catch up with the latest technology and 
be someone who is flexible to change. I certainly believe that spreading technology along with innovation is a mission that needs to be carried out by designers 
along with engineers.</p>
                      </div>
                    </div>
                    <div className="music-paragraph" >
                    <h4 id="technology-paragraph">Music</h4>
                      <div className="technology-paragraph">
                        <p>In the words of Stevie Wonder, Music at its essence, is what gives us memories. And the longer a song has existed in our lives, the more memories we have of it.
Music, a melody that stirs a number of emotions and feelings in the person listening to it has since long been learnt and appreciated by many. The fact that I am 
passionate about music speaks a lot about my personality. It enchances my innovation and help me remain calm under tense situations. It helps me find my inner self
 because words make you think a thought, music makes you feel a feeling but a song makes you feel a thought.</p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
          </div>
          <div className="section" >
          <div className='skillSet'> 
            <h1 id="skill">Skills</h1>
            <span id="bar"></span>
              <div className="front-end">
                <h3 id="front-end">Front-end</h3>
                  <div className="flex-container">
                    <div style={logoSkill}>
                      <img  src={html5}  alt='html5' style={images} />
                      <h5 style={style_html5}>HTML5<span style={style_html_span}>90%</span></h5>
                        <div className="container">
                          <div className="skill html"></div>
                      </div>
                    </div>

                    <div style={logoSkill}>
                      <img src={css3} alt="css3" style={images} />
                    <h5 style={style_css3}>CSS3<span style={style_css3_span}>85%</span></h5>
                    <div className="container">
                        <div className="skill css"></div>
                    </div>
                    </div>

                    <div style={logoSkill}>
                      <img src={js} alt="css3" style={images} />
                    <h5 style={style_js}>Javascript<span style={style_js_span}>70%</span></h5>
                    <div className="container">
                        <div className="skill js"></div>
                    </div>
                    </div>

                    <div style={logoSkill}>
                      <img src={jese6} alt="jese6" style={images} />
                    <h5 style={style_jese6}>ES6<span style={style_jese6_span}>65%</span></h5>
                    <div className="container">
                        <div className="skill es6"></div>
                    </div>
                    </div>

                    <div style={logoSkill}>
                      <img src={react} alt="react" style={images} />
                    <h5 style={style_react}>ReactJs<span style={style_react_span}>60%</span></h5>
                    <div className="container">
                        <div className="skill react"></div>
                    </div>
                    </div>

                    <div style={logoSkill}>
                      <img src={angular} alt="angular" style={images} />
                    <h5 style={style_angular}>AngularJs<span style={style_angular_span}>60%</span></h5>
                    <div className="container">
                        <div className="skill angular"></div>
                    </div>
                    </div>

                    <div style={logoSkill}>
                      <img src={bootstrap} alt="bootstrap" style={images} />
                    <h5 style={style_bootstrap}>Bootstrap<span style={style_bootstrap_span}>70%</span></h5>
                    <div className="container">
                        <div className="skill bootstrap"></div>
                    </div>
                    </div>

                    <div style={logoSkill}>
                      <img src={gsap} alt="gsap" style={images} />
                    <h5 style={style_gsap}>GSAP<span style={style_gsap_span}>50%</span></h5>
                    <div className="container">
                        <div className="skill gsap"></div>
                    </div>
                    </div>
                    
                    <div style={logoSkill}>
                      <img src={jquery} alt="jquery" style={images} />
                    <h5 style={style_jquery}>jQuery<span style={style_jquery_span}>70%</span></h5>
                    <div className="container">
                        <div className="skill jquery"></div>
                    </div>
                    </div>

                    <div style={logoSkill}>
                      <img src={materialize} alt="materialize" style={images} />
                    <h5 style={style_materialize}>Materialize<span style={style_materialize_span}>85%</span></h5>
                    <div className="container">
                        <div className="skill materialize"></div>
                    </div>
                    </div>

                    <div style={logoSkill}>
                      <img src={threejs} alt="threejs" style={images} />
                    <h5 style={style_threejs}>ThreeJs<span style={style_threejs_span}>30%</span></h5>
                    <div className="container">
                        <div className="skill threejs"></div>
                    </div>
                    </div>

                    <div style={logoSkill}>
                      <img id='ajax'src={ajax} alt="ajax" style={images} />
                    <h5 style={style_ajax}>Ajax<span style={style_ajax_span}>90%</span></h5>
                    <div className="container">
                        <div className="skill ajax"></div>
                    </div>
                    </div>

                    <div style={logoSkill}>
                      <img src={responsive} alt="responsive" style={images} />
                    <h5 style={style_responsive}>Responsive<span style={style_responsive_span}>50%</span></h5>
                    <div className="container">
                        <div className="skill responsive"></div>
                    </div>
                    </div>
                    {/* Flex-container div */}
                  </div>

                  {/* front-end */}
              </div> 
            </div>
          </div>
          
          <div className="section">
            <div class="back-end">
              <h3 id="back-end">Back-end</h3>
              <div className="flex-container">

              <div style={logoSkill}>
                    <img src={dj} alt="dj" style={images} />
                    <h5 style={style_django}>Django<span style={style_django_span}>55%</span></h5>
                    <div className="container">
                        <div className="skill django"></div>
                    </div>
              </div>

              <div style={logoSkill}>
                    <img src={node} alt="node" style={images} />
                    <h5 style={style_node}>NodeJs<span style={style_node_span}>60%</span></h5>
                    <div className="container">
                        <div className="skill node"></div>
                    </div>
              </div>

              <div style={logoSkill}>
                    <img src={api} alt="api" style={images} />
                    <h5 style={style_api}>API<span style={style_api_span}>35%</span></h5>
                    <div className="container">
                        <div className="skill api"></div>
                    </div>
              </div>

              <div style={logoSkill}>
                    <img src={mongo} alt="mongo" style={images} />
                    <h5 style={style_mongo}>MongoDB<span style={style_mongo_span}>50%</span></h5>
                    <div className="container">
                        <div className="skill mongo"></div>
                    </div>
              </div>

              <div style={logoSkill}>
                    <img src={mysql} alt="mysql" style={images} />
                    <h5 style={style_mysql}>MySQL<span style={style_mysql_span}>60%</span></h5>
                    <div className="container">
                        <div className="skill mysql"></div>
                    </div>
              </div>
              </div>            
            </div>

            <div class="prototype">
              <h3 id="prototype">Prototype / Design / Animation</h3>
              <div class="flex-container">
                
                <div style={logoSkill}>
                      <img src={ae} alt="ae" style={images} />
                      <h5 style={style_ae}>Ae<span style={style_ae_span}>20%</span></h5>
                      <div className="container">
                          <div className="skill ae"></div>
                      </div>
                </div>

                <div style={logoSkill}>
                      <img src={ps} alt="ps" style={images} />
                      <h5 style={style_ps}>Ps<span style={style_ps_span}>50%</span></h5>
                      <div className="container">
                          <div className="skill ps"></div>
                      </div>
                </div>

                <div style={logoSkill}>
                      <img src={ai} alt="ai" style={images} />
                      <h5 style={style_ai}>Ai<span style={style_ai_span}>50%</span></h5>
                      <div className="container">
                          <div className="skill ai"></div>
                      </div>
                </div>

                <div style={logoSkill}>
                      <img src={xd} alt="xd" style={images} />
                      <h5 style={style_xd}>Xd<span style={style_xd_span}>90%</span></h5>
                      <div className="container">
                          <div className="skill xd"></div>
                      </div>
                </div>

                <div style={logoSkill}>
                      <img src={br} alt="br" style={images} />
                      <h5 style={style_br}>Blender<span style={style_br_span}>15%</span></h5>
                      <div className="container">
                          <div className="skill br"></div>
                      </div>
                </div>

              </div>
            </div>

          </div>

          <div className="section">
            <div className="cloud">
              <h3 id="cloud">Cloud</h3>
              <div className="flex-container">

                <div style={logoSkill}>
                      <img src={fire} alt="fire" style={images} />
                      <h5 style={style_fire}>Firebase<span style={style_fire_span}>35%</span></h5>
                        <div className="container">
                          <div className="skill fire"></div>
                    </div>
                </div>

                <div style={logoSkill}>
                      <img src={google} alt="google" style={images} />
                      <h5 style={style_google}>Google<span style={style_google_span}>20%</span></h5>
                        <div className="container">
                          <div className="skill google"></div>
                    </div>
                </div>

                <div style={logoSkill}>
                      <img src={aws} alt="aws" style={images} />
                      <h5 style={style_aws}>AWS<span style={style_aws_span}>20%</span></h5>
                        <div className="container">
                          <div className="skill aws"></div>
                    </div>
                </div>
              </div>
            </div>

            <div className="apps">
              <h3 id="apps">Apps</h3>
              <div className="flex-container">
                
                <div style={logoSkill}>
                        <img src={mobile} alt="mobile" style={images} />
                        <h5 style={style_mobile}>Mobile<span style={style_mobile_span}>80%</span></h5>
                          <div className="container">
                            <div className="skill mobile"></div>
                      </div>
                  </div>

                  <div style={logoSkill}>
                        <img src={Redux} alt="Redux" style={images} />
                        <h5 style={style_Redux}>Redux<span style={style_Redux_span}>40%</span></h5>
                          <div className="container">
                            <div className="skill redux"></div>
                      </div>
                  </div>

                  <div style={logoSkill}>
                        <img src={ionic} alt="ionic" style={images} />
                        <h5 style={style_ionic}>Ionic<span style={style_ionic_span}>50%</span></h5>
                          <div className="container">
                            <div className="skill ionic"></div>
                      </div>
                  </div>
              </div>
            </div>

            <div className="cms">
              <h3 id="cms">CMS</h3>
              <div className="flex-container">
              <div style={logoSkill}>
                        <img src={wp} alt="wp" style={images} />
                        <h5 style={style_wp}>WordPress<span style={style_wp_span}>40%</span></h5>
                          <div className="container">
                            <div className="skill wp"></div>
                      </div>
                  </div>

              </div>
            </div>
          </div>
      </ReactFullpage.Wrapper>
    );
  }}
/>
  )

  export default About;