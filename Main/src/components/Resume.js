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
                    <img src={penn} alt='penn' />
                    <ul className='flex1 experience'>
                        <li>University of Penn's</li>
                        <li>LPS Coding Bootcamp</li>
                        <li>Full Stack Web Development</li>
                        <br/>
                    </ul>
                    <img src={bloom} alt='bloom' />
                    <ul className='flex1 experience'>
                        <li>Bloomsburg University</li>
                        <li>Bachelor of Arts in Criminal Justice</li>
                        <li>Cume Laude</li>
                    </ul>
                </div>

                <div className='card2'>
                    <h2>Experience</h2>
                    <img src={nationwide} alt='nationwide' />
                    <ul className='flex1 experience'>
                        <li>Nationwide Insurance</li>
                        <li>10 years Commercial Underwriting</li>
                        <li>5 Years Processing Specialist</li>
                    </ul>
                </div>
                <div className='card2'>
                    <h2>Resume</h2>
                    <a className='resume' href={resume} download="EaglesResume.pdf">Download here</a>
                    <img className='resumepic' src={icon} alt='resume' width='200' height='200' />
                </div>
            </div>
        </div>
    )
}

export default Resume;