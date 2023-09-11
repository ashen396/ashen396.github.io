import './App.css';
import {ReactComponent as WhatsappLogo} from './images/whatsapp-svgrepo-com.svg';
import {ReactComponent as LinkedInLogo} from './images/iconmonstr-linkedin-3.svg';
import {ReactComponent as GmailLogo} from './images/Gmail_icon_(2020).svg';
import {ReactComponent as GithubLogo} from './images/github-svgrepo-com.svg';
import {ReactComponent as SkipButton} from './images/skip-forward-circle-fill-svgrepo-com.svg';
import {ReactComponent as PlayButton} from './images/play-button-svgrepo-com.svg';
import { useState } from 'react';
import * as functions from './Functions.js';

function App() {

  var [animState, setAnimState] = useState(false);

  return (
    <div className="App">
      <div id='first-page' className='first-page'>
        <div className='nav-bar'>
          <ul>
            <li id='first' className='selected-page'><a href="/#first-page">Home</a></li>
            <li id='second'><a href="/#second-page">About</a></li>
            <li id='third'><a href="/#third-page">Education</a></li>
            <li id='fourth'><a href="/#fourth-page">Experiences</a></li>
            <li id='fifth'><a href="/#fifth-page">Skills</a></li>
            <li id='sixth'><a href="/#sixth-page">Projects</a></li>
            <li id='seventh'><a href="/#seventh-page">Contact</a></li>
          </ul>
        </div>
        <div className='first-page-decoration first-decoration'/>
        <div className='profile-picture-holder'>
          <h4>Hi, <br></br> Looking for me? <br></br><h1>Gimantha Ashen Easwarage</h1>
            <div className='list'>
              <ul>
                <li><h3>Undergraduate Software Engineer</h3></li>
                <li><h3>Full Stack Developer</h3></li>
                <li><h3>Following Degree At NIBM</h3></li>
                <li><h3>Interested On New Things</h3></li>
              </ul>
            </div>
          </h4>
          <a href='/#second-page'>View More</a>
          <img alt='profile_picture' src={require('./images/profile_picture.jpeg')}/>
        </div>
      </div>
      <div id='second-page' className='second-page'>
        <h1 className='page-title'>About Me</h1>
        <div className='second-container'>
          <div className='title-bar'>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div id='detail-window' className='details-window'>
            <div id='programming'>
              <p><span style={{color:'rgb(204, 120, 50)'}}></span><span style={{color:'rgb(169, 183, 198)'}}></span></p>
              <br></br>
              <p><span style={{color:'rgb(204, 120, 50)'}}></span><span style={{color:'rgb(169, 183, 198)'}}></span><span style={{color:'rgb(106, 135, 89)'}}></span><span style={{color:'rgb(204, 120, 50)'}}></span></p>
              <p><span style={{color:'rgb(204, 120, 50)'}}></span><span style={{color:'rgb(169, 183, 198)'}}></span><span style={{color:'rgb(106, 135, 89)'}}></span><span style={{color:'rgb(204, 120, 50)'}}></span></p>
              <p><span style={{color:'rgb(204, 120, 50)'}}></span><span style={{color:'rgb(169, 183, 198)'}}></span><span style={{color:'rgb(106, 135, 89)'}}></span><span style={{color:'rgb(169, 183, 198)'}}></span><span style={{color:'rgb(106, 135, 89)'}}></span><span style={{color:'rgb(169, 183, 198)'}}></span><span style={{color:'rgb(204, 120, 50)'}}></span></p>
              <br></br>
              <p><span style={{color:'rgb(204, 120, 50)'}}></span><span style={{color:'rgb(169, 183, 198)'}}></span></p>
              <p><span style={{color:'rgb(204, 120, 50)'}}></span><span style={{color:'rgb(169, 183, 198)'}}></span><span style={{color:'rgb(106, 135, 89)'}}></span><span style={{color:'rgb(204, 120, 50)'}}></span><span style={{color:'rgb(169, 183, 198)'}}></span><span style={{color:'rgb(204, 120, 50)'}}></span><span style={{color:'rgb(169, 183, 198)'}}></span><span style={{color:'rgb(204, 120, 50)'}}></span><span style={{color:'rgb(169, 183, 198)'}}></span><span style={{color:'rgb(104, 151, 187)'}}></span><span style={{color:'rgb(169, 183, 198)'}}></span><span style={{color:'rgb(204, 120, 50)'}}></span><span style={{color:'rgb(169, 183, 198)'}}></span><span style={{color:'rgb(104, 151, 187)'}}></span><span style={{color:'rgb(169, 183, 198)'}}></span><span style={{color:'rgb(204, 120, 50)'}}></span></p>
              <p><span style={{color:'rgb(169, 183, 198)'}}></span></p>
              <br></br>
              <p><span style={{color:'rgb(204, 120, 50)'}}></span><span style={{color:'rgb(169, 183, 198)'}}></span><span style={{color:'rgb(204, 120, 50)'}}></span><span style={{color:'rgb(169, 183, 198)'}}></span></p>
              <p><span style={{color:'rgb(169, 183, 198)'}}></span><span style={{color:'rgb(204, 120, 50)'}}></span><span style={{color:'rgb(169, 183, 198)'}}></span><span style={{color:'rgb(204, 120, 50)'}}></span></p>
              <p><span style={{color:'rgb(169, 183, 198)'}}></span><span style={{color:'rgb(204, 120, 50)'}}></span></p>
              <p><span style={{color:'rgb(169, 183, 198)'}}></span></p>
              <p><span style={{color:'rgb(169, 183, 198)'}}></span></p>
            </div>
            <div id='output-log' hidden>
              <p style={{color:'rgba(255, 255, 255, 0.6)'}}>output	&#62;</p>
              <p>Welcome to my portfolio.</p>
              <br></br>
              <p>By now you know my name. Well that's not enough for a person to know, so I'll tell about myself. I'm Gimantha Ashen Easwarage and everyone knows me by my middle name. I live in Sri Lanka and loves to travel with friends. Think I am an extrovert and love to make new friends. Love to learn new things and try new stuff. Spends most of the time programming. I think there are ups and downs in everyone's life but all you need is experience from those moments.  <br></br><br></br>Well you can find about my education, skills and more just keep scrolling.</p>
            </div>
          </div>
          <div id='run-button' className='run-button' onClick={() => {setAnimState(true);functions.runButtonClick();}}>{animState ? <PlayButton/> : <SkipButton/>}</div>
        </div>
      </div>
      <div id='third-page' className='third-page'>
        <h1 className='page-title'>Education</h1>
        <div className='third-container'>
          <div className='inner-div'>
          <div className='slider'>
            <div className='inner-slider' onMouseOver={() => functions.dragSliderOver()} onMouseOut={(ev) => functions.dragSliderOut(ev.clientY - 280)} onMouseMove={(ev) => functions.dragSlider(ev.clientY)}/>
          </div>
              <ul>
                <li id='year2014' className='selected-year' onClick={() => {functions.dragSlider(285)}}>2014</li>
                <li id='year2017' onClick={() => {functions.dragSlider(395)}}>2017</li>
                <li id='year2020' onClick={() => {functions.dragSlider(495)}}>2020 - Present</li> 
              </ul>
            </div>
            <div className='education-text'>
              <p id='education'>Successfully completed GCE O/L at Lyceum International School.</p>
            </div>
          </div>
      </div>
      <div id='fourth-page' className='fourth-page'>
        <h1 className='page-title'>Experience</h1>
        <div className='fourth-container'>
        <div className='inner-div'>
          <div className='slider'>
            <div className='inner-slider'/>
          </div>
              <ul>
                <li>2023</li>
              </ul>
              <p>Jan - Apr</p>
            </div>
            <div className='experience-text'>
              <p>Completed internship at Kapruka Holdings PLC</p>
            </div>
        </div>
      </div>
      <div id='fifth-page' className='fifth-page'>
        <h1 className='page-title'>Technical Skills</h1>
         <div className='fifth-container'>
            <div className='ul-container'>
              <ul id='technical-skills'>
                <li><img alt='java-logo' src={require("./images/Java-logo.png")}/>Java</li>
                <li><img alt='javascript-logo' src={require("./images/JavaScript-logo.png")}/>Javascript</li>
                <li><img alt='jsp-logo' src={require("./images/Java-logo.png")}/>JSP</li>
                <li><img alt='c-logo' src={require("./images/C_logo.png")}/><p>C Language</p></li>
                <li><img alt='cpp-logo' src={require("./images/CPP_logo.png")}/>C++</li>
                <li><img alt='csharp-logo' src={require("./images/CSharp_logo.png")}/>C#</li>
                <li><img alt='springboot-logo' src={require("./images/SpringBoot_logo.jpeg")}/>Spring Boot</li>
                <li><img alt='mysql-logo' src={require("./images/MySQL_logo.jpeg")}/>MySQL</li>
                <li><img alt='kotlin-logo' src={require("./images/Kotlin_logo.png")}/>Kotlin</li>
                <li><img alt='react-logo' src={require("./images/React_logo.png")}/>React</li>
              </ul>
            </div>
        </div>
      </div>
      <div id='sixth-page' className='sixth-page'>
        <h1 className='page-title'>Projects</h1>
         <div className='sixth-container'>
          <div className='projects-container'>
            <div id='projects-image-holder' onMouseEnter={() => {functions.setProjectMouseOver(true)}} onMouseLeave={() => {functions.setProjectMouseOver(false)}}>
              <ul>
                <div>
                  <li id='left-project' onClick={(ev) => functions.projectSlideClick(ev.currentTarget.id)}><img alt='apple-store' src={require("./images/apple_store.png")}/>Apple Store</li>
                  <li id='main-project' onClick={(ev) => functions.projectSlideClick(ev.currentTarget.id)}><img alt='app-count' src={require("./images/app_count.png")}/>App Count</li>
                  <li id='right-project' onClick={(ev) => functions.projectSlideClick(ev.currentTarget.id)}><img alt='menu' src={require("./images/menu.png")}/>Menu</li>
                  <li onClick={(ev) => functions.projectSlideClick(ev.currentTarget.id)}><img alt='free-through' src={require("./images/free_through.png")}/>Free Through</li>
                  {/* <li id='left-project' onClick={() => functions.projectSlideClick('left-project')}><img alt='apple-store' src={require("./images/apple_store.png")}/>Apple Store</li>
                  <li id='main-project' onClick={() => functions.projectSlideClick('main-project')}><img alt='app-count' src={require("./images/app_count.png")}/>App Count</li>
                  <li id='right-project' onClick={() => functions.projectSlideClick('right-project')}><img alt='menu' src={require("./images/menu.png")}/>Menu</li>
                  <li onClick={() => functions.projectSlideClick()}><img alt='free-through' src={require("./images/free_through.png")}/>Free Through</li> */}
                </div>
              </ul>
            </div>
            <div className='dots'>
              <div id='project-slide-dot1' className='checked' onClick={() => functions.projectSlide("slide-dot1")}></div>
              <div id='project-slide-dot2' onClick={() => functions.projectSlide("slide-dot2")}></div>
              <div id='project-slide-dot3' onClick={() => functions.projectSlide("slide-dot3")}></div>
              <div id='project-slide-dot4' onClick={() => functions.projectSlide("slide-dot4")}></div>
            </div>
          </div>
        </div>
        </div>
      <div id='seventh-page' className='seventh-page'>
        <h1 className='page-title'>Contact</h1>
         <div className='seventh-container'>
            <div className='contact-slider'>
              <a href='https://api.whatsapp.com/send?phone=94773960967' target='_blank' rel="noopener noreferrer"><WhatsappLogo id='whatsapp_logo'/></a>
              <a href='https://www.linkedin.com/in/gimantha-ashen-5ba043233/' target='_blank' rel="noopener noreferrer"><LinkedInLogo id='linkedin_logo'/></a>
              <a href='mailto:ashenrenon396@gmail.com' target='_blank' rel="noopener noreferrer"><GmailLogo id='gmail_logo'/></a>
              <a href='https://github.com/ashen396' target='_blank' rel="noopener noreferrer"><GithubLogo id='github_logo'/></a>
            </div>
         </div>
       </div>
    </div>
  );
}

export default App;
