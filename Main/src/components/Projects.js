import blog from '../Images/techBlog.png';
import nfl from '../Images/NFLbets.png';
import quiz from '../Images/quiz.png';
import streamin from '../Images/streamin.png';
import marioKart from '../Images/marioKart.png';
import forced from '../Images/forced.png';

const Projects = () => {

    return (
    
    <div>

            <h1>Projects</h1>

            <div className='container'>
            <div className='card1'>
                
                <a href="https://fast-plateau-75151.herokuapp.com/">Tech Blog
                <img className='project-img' src={blog} alt='techBlog'/></a>
                <a className='rep' href="https://github.com/ktmac21/Tech-Blog">Github Repository</a>
                
            </div>

            <div className='card1'>
                
                <a href="https://stark-escarpment-53173.herokuapp.com/">Forced Fun
                <img className='project-img' src={forced} alt='forced-fun'/></a>
                <a className='rep' href="https://github.com/ktmac21/Engagement-Question-Generator">Github Repository</a>
                
            </div>
            </div>
    
            <div className='container'>
            <div className='card1'>
                
                <a href="https://vast-eyrie-51403.herokuapp.com/">NFL Bets
                <img className='project-img' src={nfl} alt='NFLbets'/></a>
                <a className='rep' href="https://github.com/aungy5/NFL_Bets">Github Repository</a>
               
            </div>

            <div className='card1'>
                
                <a href="https://shobes572.github.io/Whats_Streamin/">What's Streamin'
                <img className='project-img' src={streamin} alt='Whats_Streamin'/></a>
                <a className='rep' href="https://github.com/shobes572/Whats_Streamin">Github Repository</a>
                
            </div>
            </div>

            <div className='container'>

           

            <div className='card1'>
                
                <a href="https://ktmac21.github.io/Kates-portfolio-page/">Mario Portfolio Page
                <img className='project-img' src={marioKart} alt='marioKart'/></a>
                <a className='rep' href="https://github.com/ktmac21/Kates-portfolio-page">Github Repository</a>
                
            </div>
            
            <div className='card1'>
                
                <a href=" https://ktmac21.github.io/java-quiz/">Javascript Quiz
                <img className='project-img' src={quiz} alt='quiz'/></a>
                <a className='rep' href=" https://github.com/ktmac21/java-quiz">Github Repository</a>
                
            </div>
            
        </div>
        </div>

    )

}

export default Projects;