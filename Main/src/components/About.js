import { Link } from 'react-router-dom'; 
import projects from '../Images/projects.png';
const About = () => {
    
    return (
        <div className='flex'>

            <h1> About Kate Eagles </h1>

            <br />
            
            <p className='aboutme'> Welcome to my portfolio page! I am from Perkasie, Pennsylvania which is right 
                outside of Philadelphia. I am a recent graduate of University of Penn's Full Stack 
                Web Development coding bootcamp. I am very excited about making this transition into technology. I approach any kind of change as an opportunity to grow. 
                I love coding and learning new technologies. I will never stop learning and challenging myself. 
                Take a look at my current projects below. If you want to learn more please don't hesitate to contact me.</p>
            
            <Link to='/projects'>
            <img className='about'src={projects} alt='projects' />
            </Link>
        </div>
    )
}

export default About;