import React from 'react';
import styled from 'styled-components';

import closeIcon from '../icons/closeIcon.png';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #159639;
  border-radius: 4px 4px 0 0;
  height: 60px;
  width: 100%;
`;

const WrapperLeft = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  margin-left: 5%;
  color: white;
`;

const WrapperRight = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: flex-end;
  margin-right: 5%;
`;

const Title = styled.h3`
  font-family: 'Righteous', cursive;
  font-size: 25px;
  color: black;
`;

const InforBar = ({ room, location }) => {
  console.log(location);
  return (
    <Wrapper>
      <WrapperLeft>
        <Title>letTalk</Title>
      </WrapperLeft>
      <WrapperRight>
        <a href='/'>
          <img src={closeIcon} alt='close icon' />
        </a>
      </WrapperRight>
    </Wrapper>
  );
};

export default InforBar;
