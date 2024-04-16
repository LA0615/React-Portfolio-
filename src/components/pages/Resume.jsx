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
  padding: 5px; 
  width: fit-content; 
  margin: 0 auto; 
  width: 50%;
  height: 6%;
  border-radius: 20px;
  background-color: lightyellow;
  font-size: 18px;
`;

const BoldText = styled.p`
  font-weight: bold;
font-style: italic;
color: black;
`;

const BoldListItem = styled.li`
  font-weight: bold; 
`;

const CenteredLink = styled.a`
  display: block;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: #0014A8;

  `;
function Resume() {
    return (
        <ResumeContainer>
            <ResumeBox>
        <h1 style={{ color: 'red', fontFamily: 'Arial, sans-serif', textAlign:'center', margin:'5%', fontSize: '35px' }}>My Fullstack Developer Resume</h1>
        <BoldText>Here is a list of some skills I have learned during my time in coding bootcamp:</BoldText>
                <BoldListItem>HTML</BoldListItem>
                <BoldListItem>CSS</BoldListItem>
                <BoldListItem>JavaScript</BoldListItem>
                <BoldListItem>React</BoldListItem>
                <BoldListItem>Node.js</BoldListItem>
                <BoldListItem>Express</BoldListItem>
                <BoldListItem>MongoDB</BoldListItem>
                <BoldListItem>MySQL</BoldListItem>
                <BoldListItem>API</BoldListItem>
       <CenteredLink href="/images/arcidiaconoResume.pdf" download> Click to Download My Resume</CenteredLink>
       </ResumeBox>
        </ResumeContainer>
    );
}

export default Resume;
