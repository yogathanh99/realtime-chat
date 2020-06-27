import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  border-top: 2px solid #d3d3d3;
`;

const StyleInput = styled.input`
  border: none;
  border-radius: 0;
  padding: 5%;
  width: 80%;
  font-size: 1.2em;

  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  color: rgba(250, 250, 250, 0.5) !important;
  font-size: 20px;
  text-decoration: none;
  background: #625d5d;
  padding: 20px;
  display: inline-block;
  border: none;
  width: 20%;
`;

const Input = (props) => {
  const { message, setMessage, sendMessage } = props;
  return (
    <Form>
      <StyleInput
        type='text'
        placeholder='Send message...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
      />
      <Button onClick={(e) => setMessage(e.target.value)}>Send</Button>
    </Form>
  );
};

export default Input;
