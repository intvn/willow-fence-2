import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <header className="bg-offWhite text-darkGrey p-10 bottom-0 left-0 w-full z-50 border-t border-darkGrey">
      <div className="container mx-auto flex justify-between items-center w-3/4">
        <div className="grid grid-cols-[auto_1fr] grid-cols-2 gap-y-4 gap-x-4 items-center">
            <div><img className="h-5 w-auto" src="/assets/periscope-logo.png" /></div>
            <div><p>Location</p></div>
            <div><img className="h-5 w-auto" src="/assets/telegram-logo.png" /></div>
            <div><p>Email</p></div>
            <div><img className="h-5 w-auto" src="/assets/instagram-logo.png" /></div>
            <div><p>@suffolkwillow</p></div>
        </div>

        <div className="w-1/2">
            <h1 className="text-lg font-bold">About Suffolk Willow</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc velit, semper vitae ornare non, imperdiet in velit. Donec ullamcorper justo ex, at vehicula ante aliquet eu. Aenean et nibh in lacus auctor rutrum. Fusce sit amet lorem tincidunt erat auctor mattis vel at mi. Phasellus interdum sagittis enim.</p>
        </div>
      </div>
    </header>
  );
};

export default Footer;