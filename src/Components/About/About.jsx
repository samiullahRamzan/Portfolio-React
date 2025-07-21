import React from 'react'
import './About.css';
import Profile_img from '../../assets/myprofile1.jpg';
import Title from '../Title/Title';
// import Profile_img from '../../assets/profileCoat.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
        <Title name='About Me' />
        <div className="about-section">
            <div className="about-left">
                <img src={Profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus necessitatibus architecto cum id laborum ipsa! Sunt dignissimos libero quibusdam iste maxime repudiandae nisi qui quas, architecto vitae dolorem veniam placeat.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A reprehenderit, quaerat nesciunt molestias repellendus at provident nisi corporis ex eveniet ut minima suscipit qui! Neque corporis nemo architecto tempora ad?</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:'50%'}} />
                    </div>
                    <div className="about-skill">
                        <p>React JS</p>
                        <hr style={{width:'70%'}} />
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p>
                        <hr style={{width:'60%'}} />
                    </div>
                    <div className="about-skill">
                        <p>Next JS</p>
                        <hr style={{width:'50%'}} />
                    </div>
                </div> 
            </div>
        </div>
        <div className="about-achievments">
            <div className="about-achievment">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED </p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>15+</h1>
                <p>Happy Clients</p>
            </div>
        </div>
    </div>
  )
}

export default About