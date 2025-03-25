// pages/hello.js
import React from "react";
import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/Home/hero"


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <div className="flex justify-center items-center flex-col h-screen">
        <div className="text-center m-6">
          <h1 className="text-lg text-darkGreen">Why Us</h1>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-bold font-monumentReg">Discover the difference</h1>
        </div>
        <div className="flex justify-center items-center h-2/3 w-5/6 space-x-4 m-8">
          <div className="h-full w-1/3 bg-darkGrey rounded-xl shadow-lg"></div>
          <div className="h-full w-1/3 bg-white rounded-xl shadow-lg"></div>
          <div className="h-full w-1/3 bg-lightGreen rounded-xl shadow-lg"></div>
        </div>
      </div>

      <div className="flex justify-center flex-col">
        <div className="m-14 mt-40">
          <h1 className="text-lg text-darkGreen">Our Services</h1>
        </div>
        <div className="mx-14 mb-14 flex justify-between">
          <h1 className="text-5xl font-bold font-monumentReg">Services We Offer</h1>
          <div className="w-1/3 text-right ml-14">
            <p>We offer many services that aim to satisfy your needs and allow you to trust us. Our purpose is not only to serve you, but to form a relationship strong enough for you to trust us again in future.</p>
          </div>
        </div>
        <div className="flex items-center flex-col h-screen mb-14 space-y-4">
          <div className="h-1/5 w-[calc(100%-7rem)] bg-white rounded-xl border border-lightGrey">
            <p className="p-6 font-monumentReg">01</p>
          </div>
          <div className="h-1/5 w-[calc(100%-7rem)] bg-white rounded-xl border border-lightGrey">
            <p className="p-6 font-monumentReg">02</p>
          </div>
          <div className="h-1/5 w-[calc(100%-7rem)] bg-white rounded-xl border border-lightGrey">
            <p className="p-6 font-monumentReg">03</p>
          </div>
          <div className="h-1/5 w-[calc(100%-7rem)] bg-white rounded-xl border border-lightGrey">
            <p className="p-6 font-monumentReg">04</p>
          </div>

        </div>
      </div>

      <div className="flex justify-center items-center h-screen w-[calc(100%-2rem)] bg-darkGrey rounded-3xl mx-auto mb-14"></div>

      <Footer/>
    </div>
    
  );
}