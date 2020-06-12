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
`;

const Input = (props) => {
  const { message, handleChange, handleKeyPress } = props;
  return (
    <Form>
      <StyleInput
        value={message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </Form>
  );
};

export default Input;
