import React from 'react';
import styled from 'styled-components';

import onlineIcon from '../icons/onlineIcon.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
  color: white;
  height: 60%;
  justify-content: space-between;

  & h1 {
    margin-bottom: 0px;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50%;

  & img {
    padding-right: 5px;
  }
`;

const TextContainer = ({ room, users }) => {
  return (
    <Wrapper>
      {users ? (
        <div>
          <h1>Room {room}:</h1>
          <User>
            <h2>
              {users.map(({ name }) => (
                <div key={name}>
                  <img alt='Online Icon' src={onlineIcon} />
                  {name}
                </div>
              ))}
            </h2>
          </User>
        </div>
      ) : null}
    </Wrapper>
  );
};

export default TextContainer;
