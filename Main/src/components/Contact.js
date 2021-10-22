import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FcCellPhone, FcFeedback } from 'react-icons/fc'

const Contact = () => {


    return (

        <div>
            <h1>Get in Touch</h1>
            <p>Interested in learning more about my education or experience?</p>
           
            <div className='container'>
                <div className='card3'>
                    <p>Call me</p>
                    <br/>
                    <a className='contacts' href="tel:2676700941"><FcCellPhone /></a>
                </div>
                <div className='card3'>
                <p>Email me</p>
                <br/>
                <a className='contacts' href="mailto:kteagles21@gmail.com"><FcFeedback /></a>
                </div>   
            </div>
        

            
            <div className='container'>
                <div className='card3'>
                    <p>Find me on LinkedIn</p>
                    <br/>
                    <a className='contacts'href="https://www.linkedin.com/in/kate-eagles"><FaLinkedinIn /></a>
                </div>

            <div className='card3'>
                <p>Find me on Github</p>
                <br/>
                <a className='contacts' href="https://github.com/ktmac21"><FaGithub /></a>
                
                
            </div>

            </div>
            </div>

            
        
    )
}

export default Contact; 