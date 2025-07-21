import React from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import './Contact.css'
import Title from '../Title/Title';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "56fdf88c-c8bc-4dcf-ac83-e95208f94118");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert('Form Submitted Successfully')
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
        <Title name='Get in touch' />
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quas fugiat veritatis ad maxime magnam repudiandae quaerat aliquam saepe, placeat, est suscipit laborum ratione id aliquid maiores culpa illum. A.</p>
                <div className="contact-details">
                    <div className="contact-detail"><img src={mail_icon} alt="" /><p>samidev336@gmail.com</p></div>
                    <div className="contact-detail"><img src={call_icon} alt="" /><p>+92307002179</p></div>
                    <div className="contact-detail"><img src={location_icon} alt="" /><p>CA, United States</p></div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
                <button className="contact-submit" type='submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact