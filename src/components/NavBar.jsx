import React from "react";
import SocialLinks from "./SocialLinks";
import Logo from "./Logo";
import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "blogs",
    },
    {
      id: 4,
      link: "portfolio",
    },
    {
      id: 5,
      link: "Resume",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  const openResume = () => {
    window.open("https://drive.google.com/file/d/1jw1G3VbLyGrLS0z7vUzuTVjbMue4ZkaF/view?usp=sharing", "_blank");
  };

  return (
    <nav className="fixed z-[3] w-full border-b border-b-gray-900 backdrop-blur-sm">
      <div className="container mx-auto grid h-20 grid-cols-12 items-center justify-between">
        <Logo className="col-span-2 " />
        <ul className=" order-2 col-span-full
           justify-between md:col-span-7 hidden md:flex"">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className=" cursor-pointer capitalize font-medium text-small text-white hover:scale-150 duration-200 "
            >
              {link === "Resume" ? (
                <a href="#resume" onClick={openResume}>
                  {link}
                </a>
              ) : (
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                {link === "Resume" ? (
                  <a href="#resume" onClick={openResume}>
                    {link}
                  </a>
                ) : (
                  <Link
                    onClick={() => setNav(!nav)}
                    to={link}
                    smooth
                    duration={500}
                  >
                    {link}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}

        <SocialLinks className="place-content-en col-span-3 col-start-10 sm:col-start-11 md:order-3 md:col-start-11 " />
      </div>
    </nav>
  );
};

export default NavBar;
