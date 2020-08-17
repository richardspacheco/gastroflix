import styled from 'styled-components';

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 1rem;
  background-color: white;
  color: black;
  width: 100%;
  min-height: 40px;
`;

Message.Error = styled(Message)`
  color: var(--primary);

  & * {
    color: var(--primary);
  }
`;

export default Message;
