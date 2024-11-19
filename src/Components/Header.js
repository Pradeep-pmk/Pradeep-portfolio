import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Link } from 'react-scroll'; // Import from 'react-scroll' for smooth scrolling between sections

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  // Handle link click for mobile and update active state
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setToggleMenu(false); // Close the mobile menu after clicking
  };

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-primary z-50 shadow-md px-5 py-2 transition-all duration-300">
      <div className="flex justify-between items-center">
        <a className="font-bold text-black text-xl" href="#">Pradeep K</a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-white">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className={`cursor-pointer hover:text-accent ${activeLink === 'home' ? 'text-accent' : ''}`}
                onClick={() => setActiveLink('home')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className={`cursor-pointer hover:text-accent ${activeLink === 'about' ? 'text-accent' : ''}`}
                onClick={() => setActiveLink('about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className={` cursor-pointer hover:text-accent ${activeLink === 'skills' ? 'text-accent' : ''}`}
                onClick={() => setActiveLink('skills')}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className={`cursor-pointer hover:text-accent ${activeLink === 'projects' ? 'text-accent' : ''}`}
                onClick={() => setActiveLink('projects')}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className={`cursor-pointer hover:text-accent ${activeLink === 'contact' ? 'text-accent' : ''}`}
                onClick={() => setActiveLink('contact')}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="block md:hidden focus:outline-none"
          aria-label="Toggle Navigation"
        >
          <Bars3Icon className="text-white h-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`md:hidden ${toggleMenu ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}
        aria-hidden={toggleMenu ? 'false' : 'true'}
      >
        <ul
          className="flex flex-col items-center text-white space-y-4 pt-6 pb-4"
          onClick={() => setToggleMenu(false)}
        >
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className={`hover:text-accent ${activeLink === 'home' ? 'text-accent' : ''}`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className={`hover:text-accent ${activeLink === 'about' ? 'text-accent' : ''}`}
              onClick={() => handleLinkClick('about')}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className={`hover:text-accent ${activeLink === 'skills' ? 'text-accent' : ''}`}
              onClick={() => handleLinkClick('skills')}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className={`hover:text-accent ${activeLink === 'projects' ? 'text-accent' : ''}`}
              onClick={() => handleLinkClick('projects')}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={`hover:text-accent ${activeLink === 'contact' ? 'text-accent' : ''}`}
              onClick={() => handleLinkClick('contact')}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
