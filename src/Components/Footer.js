import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importing social media icons

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    {/* Copyright Text */}
                    <div className="text-center mb-4 md:mb-0">
                        <p>&copy; 2024 Pradeep K. All Rights Reserved.</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-6 justify-center">
                        <a
                            href="https://github.com/Pradeep-pmk/PRADEEP"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-accent transition duration-300"
                            aria-label="GitHub"
                        >
                            <FaGithub className="text-2xl" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/pradeep-k-61a742285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-accent transition duration-300"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="text-2xl" />
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    );
}
