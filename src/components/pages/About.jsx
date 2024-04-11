
function About() {
  return (
    <div style={{ 
      backgroundColor: '#E0FFFF', 
      minHeight: '100vh', 
      width: '100%', 
      display:'flex', 
      FlexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '100px',
      boxSizing: 'border-box'
    }}>     
     <h1 style={{ color: 'black', fontFamily: 'Arial, sans-serif', textAlign:'left', margin:'20px' }}>About Me</h1>
      <p style={{ 
        fontSize: '24px', 
        fontFamily: 'Arial, sans-serif', 
        textAlign: 'justify',
        margin: '20px',
        maxWidth: '800px',
        }}>
        I have always enjoyed learning and spent roughly eighteen years as an elementary and special education teacher.
        I decided to make a career change and enrolled in a coding bootcamp. I am excited to begin my journey as a full stack developer and 
        have learned many different technologies including HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, MySQL, and more.
        I like challenges, figuring out problems, and I am excited to see where this new career path will take me.
        Please take a moment to look at my portfolio and feel free to contact me with any questions.
      </p>
    </div>
  );
}

export default About;

