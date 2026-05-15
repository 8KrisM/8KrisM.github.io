import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const Projects = () => {
  return (
    <div className='min-h-screen' id='projects'>
        <h3 className="text-4xl font-bold md:text-7xl mb-10">My projects</h3>
        <div className="projects flex-col md:px-8 space-y-4">
            <div className='p-2 space-y-5'>
                <h4 className='text-4xl'>System for managing and automated testing of programming assignments at a secondary school</h4>
                <div className='flex p-3'>
                    <div className='w-full flex flex-col md:flex-row items-start md:space-x-7'>
                        <ReactCompareSlider className=" image-3d-left relative -top-1 transition-all rounded-xl"
                            itemOne={<ReactCompareSliderImage src="8krism.site_light.png" alt="light" />}
                            itemTwo={<ReactCompareSliderImage src="8krism.site_dark.png" alt="dark" />}
                        />
                    </div>
                </div>
                <p>Designed and implemented a system for automated testing of programming assignments at a secondary school. The system is a web application, built with React on front-end and Express.js on backend.
                    Has a PostgreSQL database and assignments are executed in Docker containers. The system allows teachers to create assignments, students to submit their solutions, and teachers can easily test and grade them.
                    Application is deployed via Docker Compose. 
            </p>
            </div>
            <div className='p-2 space-y-5'>
                <h4 className='text-4xl'>Nonogram</h4>
                    <img src='nonogram.png' alt="nonogram" className='image-3d-right md:w-[60%] relative transition-all rounded-xl'></img>
                <p>Full stack game made as a school project. Front-end made with Tailwind and back-end made with Java and Spring Boot.
                Players can register, add comments, rate the game, and if they are good enough they can join the leaderboard!
            </p>
            </div>
            <div className='mt-10'><a href='https://github.com/8KrisM' className='glassmorphism main-button'>See more on my GitHub</a></div>
        </div>

    </div>
  )
}

export default Projects