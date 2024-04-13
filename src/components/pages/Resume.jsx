import styled from 'styled-components';

const ResumeContainer = styled.div`
  background-color: #E0FFFF;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2%;
  box-sizing: border-box;
  border-top: 4px dotted black;
  border-bottom: 4px dotted black;
`;
const ResumeBox = styled.div`
  border: 2px solid black; 
  padding: 10px; 
  width: fit-content; 
  margin: 0 auto; 
  width: 50%;
  height: 6%;
  border-radius: 20px;
`;


function Resume() {
    return (
        <ResumeContainer>
            <ResumeBox>
        <h1 style={{ color: 'red', fontFamily: 'Arial, sans-serif', textAlign:'center', margin:'5%', fontSize: '35px' }}>My Fullstack Developer Resume</h1>
       <p>Here is a list of some skills I have learned during my time in coding bootcamp:</p>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>API</li>

  <a href="/assets/resume.pdf" download> Click to Download My Resume</a>
       </ResumeBox>
        </ResumeContainer>
    );
}

//AND a List of developer skills
export default Resume;
