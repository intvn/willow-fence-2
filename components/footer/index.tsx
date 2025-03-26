import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-lightGreen text-darkGrey p-10 px-12 bottom-0 mx-auto mb-4 w-[calc(100%-2rem)] z-50 border border-lightGrey rounded-3xl">
      <div className="flex justify-between flex-col mx-auto p-6">

        <div className="text-lg mb-8">Contact</div>
        <div className="text-7xl font-monumentReg mb-14">
          Let's get in <span className="font-monumentUltra text-black">touch.</span>
        </div>

        <div className="flex justify-between mb-14">
          <div className="underline underline-offset-8 text-3xl hover:text-white">
            <a href="mailto:hello@suffolkwillow.com">hello@suffolkwillow.com</a>
          </div>

          <a href="https://www.instagram.com/suffolkwillow/"><img className="h-8 w-auto hover:invert" src="/assets/instagram-logo.png" /></a>
            
        </div>

        <div className="flex justify-between">
          <p>Based in Troston, Suffolk, England.</p>
          <p>@ 2025 Suffolk Willow, All rights reserved</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;