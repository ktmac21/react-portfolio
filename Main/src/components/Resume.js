import resume from '../../src/EaglesResume.pdf';
import penn from '../Images/penn.png';
import bloom from '../Images/bloom.png';
import nationwide from '../Images/nationwide.png';
import icon from '../Images/resume.png';

const Resume = () => {

    return (

        <div>
            <h1>Experience</h1>
            <div className='container3'>
                
                <div className='card2'>
                    <h2>Education</h2>
                    <img className='logos'src={penn} alt='penn' />
                    <h3> University of Pennsylvania</h3>
                    <p>Full Stack Web Development Bootcamp</p>
                    <img className='logos' src={bloom} alt='bloom' />
                    <h3>Bloomsburg University</h3>
                    <p>Bachelor's of Art in Criminal Justice</p>
                    <p>Cume Laude 2003</p>
                    
                </div>

                <div className='card2'>
                    <h2>Experience</h2>
                    <img className='logos'src={nationwide} alt='nationwide' />
                    <h3>Nationwide Insurance Company</h3>
                    <p>Commercial Underwriting</p>
                    
                    
                </div>
                
                <div className='card2'>
                    <h2>Resume</h2>
                    <a className='resume' href={resume} download="EaglesResume.pdf"><img className='resumepic' src={icon} alt='resume' width='200' height='200' /></a>
                    <img className='resumepic' src={icon} alt='resume' width='200' height='200' />
                </div>
            </div>
        </div>
    )
}

export default Resume;