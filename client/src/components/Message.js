import React from 'react';
import ReactEmoji from 'react-emoji';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: ${(props) => (props.flexEnd ? 'flex-end' : 'flex-start')};
  padding: 0 5%;
  margin-top: 3px;
`;

const Name = styled.p`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;
`;

const NameWithPaddingLeft = styled(Name)`
  padding-left: 10px;
`;

const NameWithPaddingRight = styled(Name)`
  padding-right: 10px;
`;

const MessageBox = styled.div`
  background: ${(props) => (props.bgLight ? '#f3f3f3' : '#28d924')};
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;
`;

const MessageText = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;
  color: ${(props) => (props.cWhite ? 'white' : 'black')};

  & img {
    vertical-align: middle;
  }
`;

const Message = ({ message, name }) => {
  let isSentCurrentUser = false;
  const lowerName = name.trim().toLowerCase();

  if (lowerName === message.user) isSentCurrentUser = true;

  return message.joined ? (
    <Wrapper>
      <MessageBox bgLight>
        <MessageText style={{ color: 'red' }}>
          {ReactEmoji.emojify(message.text)}
        </MessageText>
      </MessageBox>
      <NameWithPaddingLeft>{message.user}</NameWithPaddingLeft>
    </Wrapper>
  ) : isSentCurrentUser ? (
    <Wrapper flexEnd>
      <NameWithPaddingRight>{lowerName}</NameWithPaddingRight>
      <MessageBox>
        <MessageText cWhite>{ReactEmoji.emojify(message.text)}</MessageText>
      </MessageBox>
    </Wrapper>
  ) : (
    <Wrapper>
      <MessageBox bgLight>
        <MessageText> {ReactEmoji.emojify(message.text)}</MessageText>
      </MessageBox>
      <NameWithPaddingLeft>{message.user}</NameWithPaddingLeft>
    </Wrapper>
  );
};

export default Message;
