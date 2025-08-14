import React from 'react';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
                <p className="text-center md:text-left text-sm md:text-base font-bold mb-4 md:mb-0">
                    <strong>IMDB Cloned By Krishna</strong>
                </p>
                <div className="flex space-x-6">
                    <a
                        href="https://www.youtube.com/@CodeWithKrish12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-500 transition-colors duration-300"
                    >
                        <FaYoutube size={24} />
                    </a>
                    <a
                        href="https://www.instagram.com/developers_hub_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500 transition-colors duration-300"
                    >
                        <FaInstagram size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/n-chenchu-krishnaiah-565760344/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors duration-300"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

