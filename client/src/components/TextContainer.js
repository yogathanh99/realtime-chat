import React from 'react';
import styled from 'styled-components';

import onlineIcon from '../icons/onlineIcon.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
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
    padding-left: 5px;
  }
`;

const TextContainer = ({ users }) => {
  return (
    <Wrapper>
      {users ? (
        <div>
          <h1>People is currently in room:</h1>
          <User>
            <h2>
              {users.map(({ name }) => (
                <div key={name} className='activeItem'>
                  {name}
                  <img alt='Online Icon' src={onlineIcon} />
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
