

import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const Link = styled(RouterLink)`
  margin: 10px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

function Header() {
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
        <Link to = {'/'}>About Me</Link> 
        <Link to = {'/portfolio'}>Portfolio</Link> 
        <Link to = {'/contact'}>Contact</Link>
        <Link to = {'/resume'} >Resume</Link> 

        </nav>
      </header>
    </>
  );
}

Header.propTypes = {

};

export default Header;