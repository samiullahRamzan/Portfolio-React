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
                    <p>I’m a Software Engineering graduate with a strong foundation in DSA, OOP, and Database Systems.With 2+ years of hands-on experience in Full Stack Web and Mobile App Development, I specialize in technologies like React.js, Node.js, Express, MongoDB, and React Native.</p>
                    <p> I’m a team player, an effective communicator, and always meet project timelines.I enjoy turning complex ideas into elegant, user-friendly solutions and continuously push myself to learn and adapt to new tools and technologies.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:'90%'}} />
                    </div>
                    <div className="about-skill">
                        <p>Javascript</p>
                        <hr style={{width:'65%'}} />
                    </div>
                    <div className="about-skill">
                        <p>MERN</p>
                        <hr style={{width:'65%'}} />
                    </div>
                    <div className="about-skill">
                        <p>SQL</p>
                        <hr style={{width:'65%'}} />
                    </div>
                    <div className="about-skill">
                        <p>Git/Github</p>
                        <hr style={{width:'65%'}} />
                    </div>
                    <div className="about-skill">
                        <p>Firebase</p>
                        <hr style={{width:'60%'}} />
                    </div>
                    <div className="about-skill">
                        <p>AWS-S3</p>
                        <hr style={{width:'60%'}} />
                    </div>
                </div> 
            </div>
        </div>
        <div className="about-achievments">
            <div className="about-achievment">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            {/* <hr />
            <div className="about-achievment">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED </p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>15+</h1>
                <p>Happy Clients</p>
            </div> */}
        </div>
    </div>
  )
}

export default About