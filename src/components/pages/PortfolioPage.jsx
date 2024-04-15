import styled from 'styled-components';



const PortfolioContainer = styled.div`
  background-color: #E0FFFF;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  box-sizing: border-box;
  border-top: 4px dotted black;
  border-bottom: 4px dotted black;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
border-style: solid ;
width: 70%;
bottom: 20px;
padding: 20px;
margin-right: 10px;
background-color: #87CEEB;
`;
const Box = styled.div`
  background-color: lightyellow;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 60%;
  border: 2px solid black;
  margin: 0 auto;
`;
const StyledParagraph = styled.p`
  color: #333;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin: 0 15px;
  line-height: 1.6;
  font-family: Arial, sans-serif;
  text-indent: 20px;
  bottom: 30px;
  position: relative;
  `;
const BoxParagraph = styled.p`
position: relative;
text-align: center;
font-size: 12px;
font-weight: bold;
bottom: 20px;
`;

function PortfolioPage() {
  return (
    <PortfolioContainer>
        <h1 style={{ color: 'red', fontFamily: 'Arial, sans-serif', textAlign:'center', margin:'5%', fontSize: '38px' }}>Welcome to My Portfolio Page</h1>
      <StyledParagraph>
        These are some examples of applications that I created during my bootcamp classes .
       </StyledParagraph>  
       <StyledParagraph>
       Please click on each icon to see the deployed application and the Github repository.
   </StyledParagraph>
      <GridContainer>
        <Box>
          <a href="https://la0615.github.io/Weather-Dashboard/">
            <img src="/images/thunderstorm.png" alt="Weather" width='55' height='55' />
          </a>
          <BoxParagraph><a href="https://github.com/LA0615/Weather-Dashboard.git">Weather Github Repo</a></BoxParagraph>
        </Box>
        <Box>
          <a href="https://pwa-text-editor-qnew.onrender.com/">
            <img src="/images/text-editor.png" alt="Text Editor" width='55' height='55' />
          </a>
          <BoxParagraph><a href="https://github.com/LA0615/PWA-Text-Editor.git"> Text Editor GitHub Repo</a></BoxParagraph>
        </Box>
        <Box>
          <a href="https://bootcampspot.instructuremedia.com/embed/a4b2366b-aade-4d70-b32c-e8761f72dac1">
            <img src="/images/profit.png" alt="Ecommerce Back End" width='55' height='55' />
          </a>
          <BoxParagraph><a href="https://github.com/LA0615/E-Commerce-Back-End.git">E-Commerce BackEnd GitHub Repo</a></BoxParagraph>
        </Box>
        <Box>
          <a href="https://bootcampspot.instructuremedia.com/embed/e892ab77-43d9-4530-95f9-be0b45421c30/">
            <img src="/images/social networking.jpeg" alt="Social Networking"  width='55' height='55' />
          </a>
          <BoxParagraph><a href="https://github.com/LA0615/Social-Network-API.git">Social Networkd API GitHub Repo</a></BoxParagraph>
        </Box>
        <Box>
          <a href="https://taco-b1e076fa8a47.herokuapp.com/">
            <img src="/images/lion.png" alt="Animals Blog 5"   width='55' height='55'/>
          </a>
          <BoxParagraph><a href="https://github.com/TacoSauce24/group-4-second-project.git"> Animals Seeen Blog GitHub Repo</a></BoxParagraph>
        </Box>
        <Box>
          <a href="https://la0615.github.io/Work-Day-Scheduler-/">
            <img src="/images/schedule.png" alt="Schedule" width='55' height='55' />
          </a>
          <BoxParagraph><a href="https://github.com/LA0615/Work-Day-Scheduler-.git"> Work Day Scheduler GitHub Repo</a></BoxParagraph>
        </Box>
      </GridContainer>
    </PortfolioContainer>
  );
}   

export default PortfolioPage;
