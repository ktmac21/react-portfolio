import { FcViewDetails } from 'react-icons/fc';
import resume from '../../src/EaglesResume.pdf';

const Resume = () => {

    return (

     
      
        <div>
        <h1>Experience</h1>
        <div className='container3'>

        
           
            <div className='card2'>

                <h2>Education</h2>

                <p>University of Pennsylvania</p>
                <p> LPS Coding Bootcamp</p>
                <p>Full Stack Web Development</p>

                <p>Bloomsburg University</p>
                <p>Bachelor of Arts in Criminal Justice</p>
                <p>Cume Laude</p>
                
                

                
            </div>

            <div className='card2'>

                <h2>Experience</h2>

                <p>Nationwide Insurance</p>
                <p>Commercial Underwriting</p>
                <p>Processing Specialist</p>

                <p>Insurance</p>
                
             
                

                
            </div>

             <div className='card2'>

                <h2>Resume</h2>

                <p className='color'>Check it out</p>
                <a className='resume' href={resume} download="EaglesResume.pdf"><FcViewDetails /></a>
                

                
            </div>


         



        </div>
        </div>
    
       

    )
}

export default Resume;