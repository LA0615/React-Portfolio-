import PropTypes from 'prop-types';

function Header({ handleNavClick }) {
  return (
    <>
    <style>{`
      body, html, h1 {
        margin: 0;
        padding: 0;
      }
    `}</style>
      <header style={{ backgroundColor: '#7DF9FF', textAlign: 'center', width: '100%', height: '110px'}}>
      <h1 style={{ paddingTop: '20px' }}>Lea Arcidiacono</h1>
        <nav style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '35px', fontSize: '18px' ,}}>
          <a style={{ margin: '10px' }} onClick={() => handleNavClick("About")}>About Me</a>
          <a style={{ margin: '10px' }} onClick={() => handleNavClick("PortfolioPage")}>Portfolio</a>
          <a style={{ margin: '10px' }} onClick={() => handleNavClick("Contact")}>Contact</a>
          <a style={{ margin: '10px' }} onClick={() => handleNavClick("Resume")}>Resume</a>
        </nav>
      </header>
    </>
  );
}

Header.propTypes = {
  handleNavClick: PropTypes.func.isRequired,
};

export default Header;