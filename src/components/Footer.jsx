import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #99FFFF;
  padding: 20px;
text-align: center;
  a{
    margin: 0 15px;
  }
`;


function Footer() {
  return (
    <StyledFooter>
      <a href="https://github.com/LA0615" target="_blank" rel="noopener noreferrer">
      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="40" height="40" />
  </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
     <img src='/images/linkedIn icon.jpeg' alt='LinkedIn' width='40' height='38'/>
  </a>
      <a href="mailto:lea_arcidiacono@yahoo.com">
        <img src='/images/email image.png' alt='Email' width='40' height='40'/>
      </a>
    </StyledFooter>
  );
}

export default Footer;




//Appears on all pages

//Text or icon links to GITHUB

//Text or icon links to LINKEDIN