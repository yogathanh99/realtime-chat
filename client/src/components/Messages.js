import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import styled from 'styled-components';

import Message from './Message';

const Wrapper = styled(ScrollToBottom)`
  padding: 5% 0;
  overflow: auto;
  flex: auto;
`;

const Messages = ({ messages, name }) => {
  return (
    <Wrapper>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </Wrapper>
  );
};

export default Messages;
