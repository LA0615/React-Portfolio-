import { useState } from "react";
import About from './pages/About';
import Contact from './pages/Contact';
import PortfolioPage from './pages/PortfolioPage';
import Resume from './pages/Resume';

function  Portfolio() {
    const [section, setSection] = useState("About");

    const handleNavClick = (section) => {
        setSection(section);
    };
    return (
        <div>
            <header>
                <nav>
                    <a onClick={() => handleNavClick("About")}>About Me</a>
                    <a onClick={() => handleNavClick("PortfolioPage")}>Portfolio</a>
                    <a onClick={() => handleNavClick("Contact")}>Contact</a>
                    <a onClick={() => handleNavClick("Resume")}>Resume</a>
                </nav>
            </header>
            <main>
                {section === 'About' && <About />}
                {section === 'PortfolioPage' && <PortfolioPage />}
                {section === 'Contact' && <Contact />}
                {section === 'Resume' && <Resume />}
            </main>

            <footer>
                {/* Footer content goes here */}
            </footer>
        </div>
    );
}
            

export default Portfolio;
