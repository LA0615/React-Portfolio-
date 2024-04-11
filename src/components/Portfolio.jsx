import About from './pages/About';
import PortfolioPage from './pages/PortfolioPage';
import Contact from './pages/Contact';
import Resume from './pages//Resume';

import PropTypes from 'prop-types';

function Portfolio({ section }) {
  if (section === 'About') {
    return <About />;
  } else if (section === 'PortfolioPage') {
    return <PortfolioPage />;
  } else if (section === 'Contact') {
    return <Contact />;
  } else if (section === 'Resume') {
    return <Resume />;
  }
}

Portfolio.propTypes = {
  section: PropTypes.string.isRequired,
};


export default Portfolio;