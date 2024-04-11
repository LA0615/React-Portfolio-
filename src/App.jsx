import  { useState } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [section, setSection] = useState('About');

  const handleNavClick = (section) => {
    setSection(section);
  };

  return (
    <div className='portfolio'>
      <Header handleNavClick={handleNavClick} />
      <Portfolio section={section} />
      <Footer />
    </div>
  );
}

export default App;