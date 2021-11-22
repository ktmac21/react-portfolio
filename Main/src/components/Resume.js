import resume from '../../src/EaglesResume.pdf';
import penn from '../Images/penn.png';
import bloom from '../Images/bloom.png';
import nationwide from '../Images/nationwide.png';
import icon from '../Images/resume.png';

const Resume = () => {

    return (

        <div>
            <h2>Education</h2>
            <div className='container3'>
                
                <div className='card2'>
                    
                    <img className='logos'src={penn} alt='penn' />
                    <h3> University of Pennsylvania</h3>
                    <p>Full Stack Web Development Certificate</p>
                    <p>November 13, 2021</p>
                    
                    
                </div>

                <div className='card2'>
                    <img className='logos' src={bloom} alt='bloom'/>
                    <h3>Bloomsburg University</h3>
                    <p>Bachelor's of Art in Criminal Justice</p>
                    <p>Cume Laude</p>
                    
                </div>
            </div>
            <h2>Experience</h2>
            <div className='container3'>

            

                <div className='card2'>
                    
                    <img className='logos'src={nationwide} alt='nationwide' />
                    <h3>Nationwide Insurance Company</h3>
                    <p>Commercial Underwriting</p>
                    
                    
                </div>

                
                
                <div className='card2'>
               
                    <a href={resume} download="EaglesResume.pdf"><img className='resumepic' src={icon} alt='resume'/></a>
                    <h3>Download Resume</h3>
                </div>
                
            </div>
            </div>
        
    )
}

export default Resume;