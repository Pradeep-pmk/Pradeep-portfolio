import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { useEffect, useState } from 'react';
import './Hero.css'

export default function Hero() {
  const config = {
    subtitle: 'I\'m a Full-stack developer and Designer',
    social: {
      facebook: 'https://www.facebook.com/share/15bjc1NULS/',
      linkedin: 'https://www.linkedin.com/in/pradeep-k-61a742285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation when component is mounted
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Delay for the animation to start
    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
      {/* Text Section */}
      <div
        className={`md:w-1/2 flex flex-col transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="text-white text-6xl font-hero-font">
          Hi, <br /> I'm <span className="text-black">Pradeep</span> K
          <p className="text-2xl mt-4">{config.subtitle}</p>
        </h1>

        {/* Social Icons with Hover Animation */}
        <div className="flex py-10">
          <a
            href={config.social.facebook}
            className="pr-5 hover:text-white transform transition-all duration-300 hover:scale-110"
          >
            <AiOutlineFacebook size={40} />
          </a>
          <a
            href={config.social.linkedin}
            className="pr-5 hover:text-white transform transition-all duration-300 hover:scale-110"
          >
            <AiOutlineLinkedin size={40} />
          </a>
        </div>
      </div>

      {/* Hero Image with Fade-in Animation */}
      <img
        className={`md:w-1/3 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        src={HeroImg}
        alt="Pradeep K"
      />
    </section>
  );
}
