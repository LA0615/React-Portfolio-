import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 30px;
  font-family: 'Arial, sans-serif';
  text-align: justify;
  margin: 5%;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
function About() {
  return (
    <div style={{ 
      backgroundColor: '#E0FFFF', 
      minHeight: '100vh', 
      width: '100%', 
      display:'flex', 
      FlexDirection: 'column', 
      alignItems: 'flex-start', 
      justifyContent: 'flex-start', 
      padding: '20px',
      boxSizing: 'border-box'
    }}>     
     <h1 style={{ color: 'black', fontFamily: 'Arial, sans-serif', textAlign:'left', margin:'5%', fontSize: '48px' }}>About Me</h1>
     <StyledParagraph>

        I have always enjoyed learning and spent roughly eighteen years as an elementary and special education teacher.
        I decided to make a career change and enrolled in a coding bootcamp. I am excited to begin my journey as a full stack developer and 
        have learned many different technologies including HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, MySQL, and more.
        I like challenges, figuring out problems, and I am excited to see where this new career path will take me.
        Please take a moment to look at my portfolio and feel free to contact me with any questions.
      </StyledParagraph>
    </div>
  );
}

export default About;

