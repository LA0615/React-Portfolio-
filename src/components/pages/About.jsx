import styled from 'styled-components';

const StyledParagraph = styled.p`
color: #333;
  font-size: 24px;
  font-family: 'Arial, sans-serif';
  text-align: justify;
  font-weight: bold;
  text-indent: 50px;
  maxWidth: 90%;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const Line = styled.div`
  width: 100%;
  border-top: 1px dotted black;
  border-bottom: 1px dotted black;

`;

function About() {
  return (
    <>
    <Line />  
    <div style={{ 
      backgroundColor: '#E0FFFF', 
      minHeight: '100vh', 
      width: '100%', 
      display:'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      padding: '20px 5%',
      boxSizing: 'border-box'
    }}>  
    
     <h1 style={{ color: 'red', fontFamily: 'Arial, sans-serif', textAlign:'center', margin:'5%', fontSize: '48px' }}>About Me</h1>
    <img src='/images/profilePic.png' alt='profilePic' style={{ width: '150px', height: '150px', borderRadius: '50%', }} />
     <StyledParagraph>

        I have always enjoyed learning and spent roughly eighteen years as an elementary and special education teacher.
        I decided to make a career change and enrolled in a coding bootcamp. I am excited to begin my journey as a full stack developer and 
        have learned many different technologies including HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, MySQL, and more.
        I like challenges, am detail oriented , and enjoy figuring out solutions to difficult problems or situations.  I am excited to see where this new career path will take me.
        Please take a moment to look at my portfolio, resume, Github repository, and LinkedIn profile. Please contact me with any questions or potential employment opportunities.
      </StyledParagraph>
      <Line />  
    </div>
    </>
  );
}

export default About;

