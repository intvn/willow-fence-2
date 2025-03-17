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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1>Hello Suffolk Willow</h1>
      </div>
      <Footer/>
    </div>
    
  );
}