
import { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  background-color: #E0FFFF;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  box-sizing: border-box;
  border-top: 1px dotted black;
  border-bottom: 1px dotted black;
`;
const ContactBox = styled.div`
  border: 3px solid black;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  box-sizing: border-box;
`;

const ContactTitle = styled.h1`
  color: black;
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 5%;
  font-size: 30px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
`;
const SubmitButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: black;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition-duration: 0.4s;
  border-radius: 12px;

  &:hover {
    background-color: #45a049;
  }
`;
const MessageInput = styled.input`
  width: 100%;
  height: 200px;
  margin: 5px;
  `;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: bold;
  font-size: 25px;
  color: red;
  font-style: italic;
`;

const Input = styled.input`
  height: 20px;
  width: 40%;
  margin-left: 10px;
`;
const CenteredText = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  color: red;
  font-style: italic;
  padding: 15px;
  `;
  
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleBlur = (event) => {
    const { name, value } = event.target;

    if (name === 'name' && !value) {
      alert('Name is required');
    }
    if (name === 'email' && !value) {
      alert('Email is required');
    }
    if (name === 'message' && !value) {
      alert('Message is required');
    }
    if (name === 'email' && value && !value.includes('@')) {
      setEmailError('Invalid email address');
    }
    if (name === 'message' && value && value.length < 10) {
      setMessageError('Message must be at least 10 characters');
    }
  };

  return (
 
      <ContactContainer>
        <ContactBox>
        <ContactTitle>
          <img src='/images/envelope-4313721_640.webp' alt='envelope' width='60' height='60' style={{ marginRight: '18px' }}/>
          Contact Me
          <img src='/images/envelope-4313721_640.webp' alt='envelope' width='60' height='60' style={{ marginLeft: '18px' }}/>
          </ContactTitle>
      <Form>
        <Label>
          Name:
          <Input type="text" name="name" value={name} onBlur={handleBlur} onChange={(e) => setName(e.target.value)} />
        </Label>
        <Label>
          Email:
          <Input type="email" name="email" value={email} onBlur={handleBlur} onChange={(e) => setEmail(e.target.value)} />
          {emailError && <p>{emailError}</p>}
        </Label>
        <label>
        <CenteredText>Send Me a Message:</CenteredText>
          <MessageInput type="text" name="message" value={message} onBlur={handleBlur} onChange={(e) => setMessage(e.target.value)} />
          {messageError && <p>{messageError}</p>}
        </label>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
      </ContactBox>
     </ContactContainer>
  );
}

export default Contact;

//Do we need regex for email validation?