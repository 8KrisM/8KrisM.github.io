import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const Projects = () => {
  return (
    <div className='min-h-screen' id='projects'>
        <h3 className="text-4xl font-bold md:text-7xl mb-10">My projects</h3>
        <div className="projects flex-col md:px-8 space-y-4">
            <div className='p-2 space-y-5'>
                <h4 className='text-4xl'>Full stack booking app (WIP)</h4>
                <div className='flex p-3'>
                    <div className='w-full flex flex-col md:flex-row items-start md:space-x-7'>
                        <ReactCompareSlider className=" image-3d-left relative -top-1 transition-all rounded-xl"
                            itemOne={<ReactCompareSliderImage src="lets-travel-home-light.png" alt="light" />}
                            itemTwo={<ReactCompareSliderImage src="lets-travel-home-dark.png" alt="dark" />}
                        />
                        <img src='lets-travel-home-phone.png' alt="phone" className='image-3d-right w-full md:w-[21%] relative -bottom-2 transition-all rounded-xl'/>
                    </div>
                </div>
                <p>Personal full stack project, with React front-end and back-end built with Node.js, Express.js and MongoDB.
                It allows you to browse accomodations, book one or if you want to rent out your own accomodation you can do so after adding it in your profile.
                Fully responsive, so you can book your next adventure from any device. Uses Google Maps API.
            </p>
            </div>
            <div className='p-2 space-y-5'>
                <h4 className='text-4xl'>Nonogram</h4>
                    <img src='nonogram.png' alt="nonogram" className='image-3d-right md:w-[60%] relative transition-all rounded-xl'></img>
                <p>Full stack game made as a school project. Front-end made with Tailwind and back-end made with Java and Spring Boot.
                Players can register, add comments, rate the game, and if they are good enough they can join the leaderboard!
            </p>
            </div>
            <div className='mt-10'><a href='https://github.com/8KrisM' className='glassmorphism hover:bg-black hover:scale-105 px-6 py-3 mt-10'>See more on my GitHub</a></div>
        </div>

    </div>
  )
}

export default Projects