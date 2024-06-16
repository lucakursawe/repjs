import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Rep.js</h3>
            <p className="text-sm text-gray-400">© 2024 Rep.js. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link href="/" className="text-sm hover:text-primary transition-colors duration-300">Home</Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-sm hover:text-primary transition-colors duration-300">About</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Follow us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="https://instagram.com/lucakursawe" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors duration-300">
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/lucakursawe" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors duration-300">
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a href="https://github.com/lucakursawe" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors duration-300">
                  <FaGithub size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
