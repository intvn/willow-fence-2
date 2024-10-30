// pages/hello.js
import Header from '../components/Header';

export default function HelloWorld() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Header />
      <h1>Hello Suffolk Willow</h1>
    </div>
  );
}
