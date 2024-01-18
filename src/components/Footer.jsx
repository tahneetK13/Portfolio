import React from 'react'
import SocialLinks from "./SocialLinks";



const Footer = () => {
  return (
<footer className=" hero2-box border-t border-t-gray-600 bg-black">
<div className="container mx-auto py-14">
  <div className="flex flex-col gap-4 py-4 sm:flex-row sm:justify-between">
  <section className="flex flex-col items-center gap-4 mx-auto max-w-screen-md">
  <span className="text-sm text-gray-500">
    Connect with me!
  </span>
  <SocialLinks heading />
</section>
  </div>
</div>
<p className="py-3 text-center text-gray-400"> Made by Tahneet Kanwal 🍉</p>
</footer>
);
}

export default Footer