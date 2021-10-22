import { Link } from 'react-router-dom'; 
const About = () => {
    
    return (
        <div className='flex'>

            <h1> About Kate Eagles </h1>

            <br />
            
            <p className='aboutme'> Welcome to my portfolio page! I am from Perkasie, Pennsylvania which is right 
                outside of Philadelphia. I am currently a student of University of Penn's Full Stack 
                Web Development coding bootcamp. I am very excited about making this transition into the challenging 
                and exciting world of technology. I approach any kind of change as an opportunity to grow. 
                I love coding and learning new technologies. I will never stop learning and challenging myself. 
                Take a look at my current projects below. If you want to learn more please don't hesitate to contact me.</p>
            
            <Link to='/projects'>
            <img className='about'src='./projects.png' alt='me'></img>
            </Link>
        </div>
    )
}

export default About;