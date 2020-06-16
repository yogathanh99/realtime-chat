import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;
  background: #1a1a1d;
`;

const Inner = styled.div`
  background: #28d924;
  width: 30%;
`;

const Input = styled.input`
  border-radius: 0;
  padding: 15px 20px;
  width: 80%;

  &:focus {
    outline: 0;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 2.5em;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
`;

const Button = styled.button`
  margin-top: 10px;
  font-size: 25px;
  font-weight: 520;
  color: #000;
  text-transform: uppercase;
  text-decoration: none;
  background: #159639;
  padding: 20px;
  display: inline-block;
  border: none;
  width: 100%;
  transition: all 0.5s ease;

  &:hover {
    background: white;
    color: #159639;
  }

  &:focus {
    outline: 0;
  }
`;

const InputWithMarginTop = styled(Input)`
  margin-top: 20px;
`;

const Home = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <Wrapper>
      <Inner>
        <Title>letTalk</Title>
        <div>
          <Input
            placeholder='Name'
            type='text'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <InputWithMarginTop
            placeholder='Room'
            type='text'
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <Button type='submit'>Join Chat</Button>
        </Link>
      </Inner>
    </Wrapper>
  );
};

export default Home;
