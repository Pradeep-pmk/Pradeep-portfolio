import websiteImg1 from '../assets/z1.jpeg';
import websiteImg2 from '../assets/z2.png';
import websiteImg3 from '../assets/z3.jpeg';
import websiteImg4 from '../assets/z4.png';
import websiteImg5 from '../assets/z5.png';
import websiteImg6 from '../assets/z6.png';
import websiteImg7 from '../assets/z7.png';

export default function Project() {
    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'HyperText Markup Language',
                link: 'https://www.w3schools.com/html/default.asp',
                alt: 'HTML logo',
            },
            {
                image: websiteImg2,
                description: 'Cascading Style Sheets',
                link: 'https://www.w3schools.com/html/default.asp',
                alt: 'CSS logo',
            },
            {
                image: websiteImg3,
                description: 'JavaScript',
                link: 'https://www.w3schools.com/js/default.asp',
                alt: 'JavaScript logo',
            },
            {
                image: websiteImg4,
                description: 'React is a JavaScript library for building user interfaces.',
                link: 'https://www.w3schools.com/react/default.asp',
                alt: 'React logo',
            },
            {
                image: websiteImg5,
                description: 'Express.js is a web application framework for Node.js.',
                link: 'https://expressjs.com/',
                alt: 'Express.js logo',
            },
            {
                image: websiteImg6,
                description: 'JavaScript code on the server-side.',
                link: 'https://www.w3schools.com/nodejs/default.asp',
                alt: 'Node.js logo',
            },
            {
                image: websiteImg7,
                description: 'Database (MongoDB)',
                link: 'https://www.mongodb.com/docs/v5.0/tutorial/install-mongodb-on-windows/',
                alt: 'MongoDB logo',
            }
        ]
    };

    return (
        <section id="skills" className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[100px] font-bold">Skills</h1>
                    <p>Showcase your technical expertise in web development, design, tools, and soft skills, with examples of projects and proficiency.</p>
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-col md:flex-row px-10 gap-5">
                    {config.projects.map((project, index) => (
                        <div key={index} className="relative project-item">
                            <img
                                className="h-[200px] w-[200px] rounded-lg project-image"
                                src={project.image}
                                alt={project.alt}
                            />
                            <div className="project-desc bg-secondary rounded-lg p-4 mt-2 text-center">
                                <p>{project.description}</p>
                                <div className="flex justify-center mt-3">
                                    <a className="btn project-btn" target="_blank" rel="noopener noreferrer" href={project.link}>
                                        Learn Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
