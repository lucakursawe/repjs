import React from "react"; // Import React
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; // Import Icon components from react-icons

const About = () => {
  return (
    <div className="container mx-auto p-4">
      {" "}
      <div className="w-full max-w-6xl mx-auto">
        {" "}
        <h1 className="text-3xl font-bold mb-4 text-primary-orange">
          About
        </h1>{" "}
        <div className="flex flex-wrap md:flex-nowrap items-center">
          {" "}
          <div className="w-full md:w-1/3 p-4 flex flex-col justify-center items-center">
            {" "}
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
              {" "}
              <img
                src="/luca.jpg"
                alt="Luca"
                className="rounded-full w-32 h-32 mb-4"
              />{" "}
              <h2 className="text-xl font-bold text-center mb-2">Luca</h2>{" "}
              <p className="text-center text-black">Computer Science Student</p>{" "}
              <p className="text-center text-black">
                Web Design & Frontend Development
              </p>{" "}
              <div className="mt-4">
                {" "}
                <h3 className="text-lg font-bold mb-2 text-primary-orange">
                  Socials
                </h3>{" "}
                <div className="flex space-x-4">
                  {" "}
                  <a
                    href="https://linkedin.com/in/lucakursawe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="h-6 w-6 text-black hover:text-primary-orange duration-300" />{" "}
                  </a>
                  <a
                    href="https://github.com/lucakursawe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="h-6 w-6 text-black hover:text-primary-orange duration-300" />{" "}
                  </a>
                  <a
                    href="https://instagram.com/instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="h-6 w-6 text-black hover:text-primary-orange duration-300" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 p-4 flex flex-col justify-center">
            {" "}
            <div className="bg-white shadow-md rounded-lg p-4">
              {" "}
              <p className="mb-4">
                Hi! I'm <strong className="text-primary-orange">Luca</strong>, a
                computer science student passionate about web design and
                frontend development. I created this calculator to simplify the
                process of calculating the weight to load for your next workout
                set based on the results of your previous set. My goal is to
                make it as user-friendly and efficient as possible, so you can
                focus more on your workout and less on the calculations.
              </p>{" "}
              <p className="mb-4">
                This app is based on the{" "}
                <strong className="text-primary-orange">RPE table</strong>{" "}
                published by{" "}
                <strong className="text-primary-orange">
                  Mike Tuchscherer
                </strong>
                , Founder of Reactive Training Systems, which I found incredibly
                useful during my own training.
              </p>{" "}
              <p className="mb-4">
                If you find this app helpful and have any suggestions or
                comments, feel free to reach out to me. You can find my contact
                information on my{" "}
                <strong className="text-primary-orange">
                  personal website
                </strong>{" "}
                or connect with me on various forums and social media platforms.
              </p>{" "}
              <p className="mb-4">
                If you're new to weightlifting and stumbled upon this app, it
                might not be for you just yet. But if you're interested in
                learning more about lifting weights, there are plenty of great
                resources out there to get you started!
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 
