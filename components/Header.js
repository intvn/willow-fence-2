// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
      <h1>Suffolk Willow</h1>
      <nav>
        <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link href="/about" style={{ marginRight: '1rem' }}>About</Link>
        <Link href="/contact" style={{ marginRight: '1rem' }}>Contact</Link>
      </nav>
    </header>
  );
};


export default Header;
