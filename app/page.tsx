// pages/hello.js

import Header from "../components/header"
import Footer from "../components/footer"


export default function Home() {
  return (
    <div>
      <Header/>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1>Hello Suffolk Willow</h1>
      </div>
      <Footer/>
    </div>
    
  );
}