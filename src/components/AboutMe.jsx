

const AboutMe = () => {
  return (
    <div className='min-h-screen animate-opacity flex flex-col md:justify-center' id="about">
      <div className='flex items-center justify-between relative md:top-5'>
        <h3 className="text-4xl font-bold md:text-7xl mb-10">About me</h3>
        <img src='me.jpg' className='w-[30%] md:w-[20%] 2xl:w-[15%] rounded-2xl'/>
      </div>
      <div className='space-y-4'>
        <h4 className="text-lg font-bold">School and project experiences</h4>
        <p>I am currently a third-year student studying <span className='font-bold'>informatics</span> at Faculty of Electrical Engineering and Informatics of the Technical University of Košice.
        There I have gained solid foundation in the field and learned languages like <span className='font-bold'>C, Java</span> and <span className='font-bold'>SQL</span>. 
        Before that, I have studied <span className='font-bold'>electrical engineering</span> at Secondary School of Electrical Engineering in Prešov.
        Even though I am yet to gain professional experience, in university I  have worked on multiple <span className='font-bold'> team projects</span>, which helped me to gain
        team work spirit and also how to effectively work with <span className='font-bold'>git</span>. 

        </p>
        <h4 className="text-lg font-bold">My exploration of the JavaScript world</h4>
        <p>I started to learn about web development in 2021 on a website called freeCodeCamp, 
          where I have built some tiny webpages using <span className='font-bold'>HTML</span> and <span className='font-bold'>CSS</span>. After learning <span className='font-bold'>JavaScript</span> fundamentals 
          I jumped to learning <span className='font-bold'>React</span> on my own in mid-2022.
          I also started to explore back-end built with <span className='font-bold'>Node.js, Express.js </span> and <span className='font-bold'>MongoDB</span>.
          Since then I have built several personal projects, which you can check below. As of now, I am getting to know Next.js and TypeScript.</p>
      </div>
    </div>
  )
}

export default AboutMe