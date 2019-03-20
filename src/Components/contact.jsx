import React,{Component} from 'react'; 
import ReactFullpage from '@fullpage/react-fullpage';
import Tilt from 'react-tilt';
import axios from 'axios';
import '../Styles/contact.css';
import smoke from '../images/smoke.png';
import facebook from '../images/social/facebook.png';
import git from '../images/social/git.png';
import instagram from '../images/social/instagram.png';
import linked from '../images/social/linked.png';
import Notifications, {notify} from 'react-notify-toast';

// const ContactPage = () => (
//   <ReactFullpage
//     render={() => {
//       return (
//         <ReactFullpage.Wrapper>
//           <div className="section"> 
//           <div className="left">
//               <div className="get-in-touch">
//                   <h1 id="get-in-touch-header">Get In Touch</h1>
//                   <div className="contact-paragraph">
//                       <p id="contact-p">For project collaboration or just to say hi, get in touch and contact me...</p>
//                       <p id="contact-p-2">Let's build something together...</p>
//                   </div>
//               </div>
//           </div>
//           <form action="" method="post">
//               <div className="full-name">
//                   <input onChange={this.handleChange} type="text"  id="full_name" className="input" name="name" placeholder="Full Name" autoComplete="off" /> 
//               </div>
//               <div className="phone-number">
//               <input onChange={this.handleChange} type="text"  id="phone_number" className="input"  name="Phone" placeholder="Phone" autoComplete="off" />
//               </div>
//               <div className="email-address">
//               <input onChange={this.handleChange} type="text" id="email-ad" className="input"  name="email" placeholder="E-mail" autoComplete="off" />
//               </div>
//               <div className="text">
//               <textarea onChange={this.handleChange} name="message" id="message" cols="30" rows="10" placeholder="Your Message..." autoComplete="off"></textarea>
//               </div>
//               <div className="radio-button-submit">
//               <div className="radio-button">
//               <input type="radio" id="radio" name="send" value="send" /><span id="send-copy">Send copy to my-email</span>
//               </div>
//               <div className="submmit-button">
//                   <input id="submit" type="submit" value="SEND" />
//               </div>
//               </div>
//           </form>
//           <div className="right">
//             <Tilt id="smoke-image" options={{max:10,
//                                                   scale:1.1,
//                                                   speed:300,
//                                                   easing:"cubic-bezier(1,1.78,1,.46)"}}>
//               <img id="smoke-photo" src={smoke} alt="smoke" height="422px" width="700px" />
//             </Tilt>
//             <h4 id="follow-social">Follow me on Facebook and Profiles on Instagram, LinkedIn and github</h4>
//             <div className="social-icon">
//               <a href="##" id="facebook-icon"><img id="facebook" src={facebook} alt="facebook" /></a>
//               <a href="##" id="linkedin-icon"><img id="linked" src={linked} alt="linked" /></a>
//               <a href="##" id="insta-icon"><img id="insta" src={instagram} alt="instagram" /></a>
//               <a href="##" id="github-icon"><img id="git" src={git} alt="git" /></a>
//             </div>
//           </div>
//           </div>
//         </ReactFullpage.Wrapper>
//       );
//     }}
//   />
// );

class Contact extends Component{  

  constructor(){
    super()

    this.state ={
      name: '',
      phone: '',
      email: '',
      message:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = e =>{
    this.setState({[e.target.name]:e.target.value})
  }
  async handleSubmit(e){
    e.preventDefault()

      const {name,phone,email,message} = this.state

      const form = await axios.post('/api/form',{
      name:name,
      phone:phone,
      email:email,
      message:message
    })
  }

  submitAndClear = () => { 
    document.getElementById("contact_form").reset();
    let myColor = { background: '#FFFFFF', text: "#1A0742" }
    notify.show(<b>Your message has been sent successfully!</b>,"custom",5000, myColor);
    
  }

  render(){
    return(
      <div id="contactPage">
      <Notifications />
      <ReactFullpage.Wrapper >
      <div className="section" >
      <div className="left">
          <div className="get-in-touch">
              <h1 id="get-in-touch-header">Get In Touch</h1>
              <div className="contact-paragraph">
                  <p id="contact-p">For project collaboration or just to say hi, get in touch and contact me...</p>
                  <p id="contact-p-2">Let's build something together...</p>
              </div>
          </div>
      </div>
      <form id='contact_form' onSubmit={this.handleSubmit} >
          <div className="full-name">
              <input onChange={this.handleChange} type="text"  id="full_name" className="input" name="name" placeholder="Full Name" autoComplete="off" /> 
          </div>
          <div className="phone-number">
          <input onChange={this.handleChange} type="text"  id="phone_number" className="input"  name="phone" placeholder="Phone" autoComplete="off" />
          </div>
          <div className="email-address">
          <input onChange={this.handleChange} type="text" id="email-ad" className="input"  name="email" placeholder="E-mail" autoComplete="off" />
          </div>
          <div className="text">
          <textarea onChange={this.handleChange} name="message" id="message" cols="30" rows="10" placeholder="Your Message..." autoComplete="off"></textarea>
          </div>
          <div className="radio-button-submit">
          <div className="radio-button">
          <input type="radio" id="radio" defaultChecked name="send" value="send" /><span id="send-copy">Send copy to my-email</span>
          </div>
          <div className="submmit-button">
              <input id="submit" onClick={this.submitAndClear} type="submit" value="SEND" />
          </div>
          </div>
      </form>
      <div className="right">
        <Tilt id="smoke-image" options={{max:10,
                                              scale:1.1,
                                              speed:300,
                                              easing:"cubic-bezier(1,1.78,1,.46)"}}>
          <img id="smoke-photo" src={smoke} alt="smoke" height="422px" width="700px" />
        </Tilt>
        <h4 id="follow-social">Follow me on Facebook and Profiles on Instagram, LinkedIn and github</h4>
        <div className="social-icon">
          <a href="https://www.facebook.com/dian.tras" id="facebook-icon"><img id="facebook" src={facebook} alt="facebook" /></a>
          <a href="##" id="https://www.linkedin.com/in/pankaj-bhoi-50931b166/"><img id="linked" src={linked} alt="linked" /></a>
          <a href="##" id="https://www.instagram.com/pankajkumarbhoi/"><img id="insta" src={instagram} alt="instagram" /></a>
          <a href="##" id="https://github.com/Pankaj-bhoi"><img id="git" src={git} alt="git" /></a>
        </div>
      </div>
      </div>
    </ReactFullpage.Wrapper>
    </div>
    )
  }
}
export default Contact;