import React from 'react';
import Dashboard from "../assets/portfolio/Dashboard.jpg";
import MyPortfolio from "../assets/portfolio/Portfolio.png";
import JobPortal from "../assets/portfolio/Jobportal.jpg";
import LaundryApp from "../assets/portfolio/LaundryApp.png";
import DigiHealthCare from "../assets/portfolio/Digihealth.png";
import Tour from "../assets/portfolio/Tour-with-Tahneet.png";
import calculator from "../assets/portfolio/calculator.png";
import SurveyForm from "../assets/portfolio/surveyform.png";




const Portfolio = () => {
    const portfolios = [
        
        {
          id: 1,
          src: MyPortfolio,
          name: "My Portfolio",
          demoLink: "https://tahneetkanwal.netlify.app/", 
          githubRepo: "https://github.com/tahneetK13/Tahneet-Portfolio",
          techstack: "Reactjs, Tailwind Css, Framer-motion",
        },
        {
          id: 2,
          name: "React Admin Dashboard",
          src: Dashboard,
          demoLink: "https://wishwares-dashboard.netlify.app/", 
          githubRepo: "https://github.com/tahneetK13/React-Dashboard",
          techstack: "React, Tailwind Css, React-Icons",
        },
        {
          id: 3,
          name: "DigiHealth Care",
          src: DigiHealthCare,
          demoLink: "https://github.com/tahneetK13/DigiHealthCare", 
          githubRepo: "https://github.com/tahneetK13/DigiHealthCare",
          techstack: "Java, XML, and Android Studio",
        },
        {
          id: 4,
          name: "WashWish-A Laundry App",
          src: LaundryApp,
          demoLink: "https://expo.dev/@tahneetkanwal/WashWish", 
          githubRepo: "https://github.com/tahneetK13/WashWish",
          techstack: "React Native, Firebase",
        },
        {
          id: 5,
          name: "Tour-with-Tahneet",
          src: Tour,
          demoLink: "https://tour-with-tahneet.netlify.app/", 
          githubRepo: "https://github.com/tahneetK13/Tour-with-me",
          techstack: "HTML, CSS, JavaScript",
        },
        {
          id: 6,
          name: "Calculator",
          src: calculator,
          demoLink: "https://tahneetcalculator.netlify.app/", 
          githubRepo: "https://github.com/tahneetK13/calculator",
          techstack: "HTML, CSS, JavaScript",
        },
        {
          id: 7,
          name: "Basic Survey form",
          src: SurveyForm,
          demoLink: "https://tahneetsurveyform.netlify.app/", 
          githubRepo: "https://github.com/tahneetK13/Survey-Form",
          techstack: "HTML, CSS, JavaScript",
        },
        {
          id: 8,
          name: "Job Portal",
          src: JobPortal,
          demoLink: "https://github.com/tahneetK13/Job_Portral", 
          githubRepo: "https://github.com/tahneetK13/Job_Portral",
          techstack: "HTML, CSS, PHP, SQL",
        },

  
       
      ];
      const handleDemoButtonClick = (demoLink) => {
        window.open(demoLink, "_blank");
      };
    
      const handleCodeButtonClick = (githubRepo) => {
        window.open(githubRepo, "_blank");
      };
    
      return (
        <div
          id="portfolio"
          className="hero2-box  bg-gradient-to-b from-purple via-black to-purple"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            
            <div className="pb-8">
              <p className=" flex justify-center items-center text-5xl font-bold text-lightGreen  border-b-4 border-gray-800 ">
                Portfolio
              </p>
              <p className="py-6 flex justify-center items-center text-white text-xl">Check out some of my work right here</p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {portfolios.map(({ id, src, demoLink, githubRepo, name, techstack }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                  width={1000}
                  height={1000}
                  className="max-w-full h-48 max-h-full object-cover object-top rounded-lg  duration-200 hover:scale-105"
                    src={src}
                    alt=""
                    //className="rounded-md duration-200 hover:scale-105"
                  />
                
                  <div className="my-2 flex flex-col gap-3">
                  <h3 className="text-xl text-center text-white font-medium">
                    {name}
                  </h3>
                  <p className="text-me  px-3 text-blue-300 ">
                    <span className="font-bold text-white">Tech Stack : </span>
                    {techstack}
                  </p>
                </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleDemoButtonClick(demoLink)}
                  className="w-1/2 px-6 py-3 m-4 text-white duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCodeButtonClick(githubRepo)}
                  className="w-1/2 px-6 py-3 text-white m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Portfolio