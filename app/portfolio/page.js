import React from "react";
import Header from '../../components/header'
import Footer from "../../components/footer"


export default function ContactUs() {
  return (
    <div>
        <Header/>
        <div className="flex items-center h-screen bg-darkGreen p-10">
            <h1 className="font-monumentReg text-5xl text-offWhite">Have a look at our work.</h1>
        </div>

        <div className="flex justify-center items-center h-screen">
        <img className="w-auto hover:drop-shadow-2xl" src="/assets/instagram-logo.png" />
        </div>

        <Footer/>
    </div>
    
  );
}
