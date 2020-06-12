import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import onlineIcon from '../icons/onlineIcon.png';
import closeIcon from '../icons/closeIcon.png';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2979ff;
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
const OnlineIcon = styled.img`
  margin-right: 5%;
`;

const InforBar = ({ room }) => {
  return (
    <Wrapper>
      <WrapperLeft>
        <OnlineIcon src={onlineIcon} alt='online icon' />
        <h3>{room}</h3>
      </WrapperLeft>
      <WrapperRight>
        <Link to='/'>
          <img src={closeIcon} alt='close icon' />
        </Link>
      </WrapperRight>
    </Wrapper>
  );
};

export default InforBar;
