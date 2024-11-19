import { useEffect, useState } from 'react';
import websiteImg1 from '../assets/m4.jpeg';
import websiteImg2 from '../assets/z8.png';
import websiteImg3 from '../assets/m5.jpeg';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  const config = {
    projects: [
      {
        image: websiteImg1,
        description: 'A Ecommerce Website. Built with using Javascript.',
        link: 'https://cakeshop-website.vercel.app/'
      },
      {
        image: websiteImg2,
        description: 'CRUD Application Using PHP,SQL',
        link: 'https://github.com/Pradeep-pmk/pradeep-k/tree/main/CRUD%20-%20Copy'
      },
      {
        image: websiteImg3,
        description: 'Farming website Using React Project',
        link: 'https://github.com/jvlcode/blog'
      }
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="projects"
      className="flex flex-col py-20 px-5 justify-center bg-secondary text-white"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">
            Projects
          </h1>
          <p>
            These are some of my best projects. I have built these with React, MERN, and vanilla CSS. Check them out.
          </p>
        </div>
      </div>
      <div className="w-full">
        
        <div
          className={`flex flex-col md:flex-row px-10 gap-5 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {config.projects.map((project, index) => (
            <div
              key={index}
              className="relative group hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <img
                className="h-[300px] w-[500px] rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
                src={project.image}
                alt="Project screenshot"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex flex-col justify-center items-center h-full">
                  <p className="text-center text-white px-5 py-5">{project.description}</p>
                  <div className="flex justify-center">
                    <a
                      className="btn text-white bg-accent hover:bg-primary transition-all duration-300"
                      target="_blank"
                      href={project.link}
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
