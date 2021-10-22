import blog from '../Images/techBlog.png';
import nfl from '../Images/NFLbets.png';
import quiz from '../Images/quiz.png';
import streamin from '../Images/streamin.png';

const Projects = () => {

    return (
    
    <div className='container2'>

            <h1>Projects</h1>


            <div className='card1'>
                
                <a href="https://fast-plateau-75151.herokuapp.com/">Tech Blog
                <img className='project-img' src={blog} alt='techBlog'/></a>
                
            </div>
    

            <div className='card1'>
                
                <a href="https://vast-eyrie-51403.herokuapp.com/">NFL Bets
                <img className='project-img' src={nfl} alt='NFLbets'/></a>
               
            </div>

            <div className='card1'>
                
                <a href="https://shobes572.github.io/Whats_Streamin/">What's Streamin'
                <img className='project-img' src={streamin} alt='Whats_Streamin'/></a>
                
            </div>

            <div className='card1'>
                
                <a href=" https://ktmac21.github.io/java-quiz/">Javascript Quiz
                <img className='project-img' src={quiz} alt='quiz'/></a>
                
            </div>
        </div>

    )

}

export default Projects;