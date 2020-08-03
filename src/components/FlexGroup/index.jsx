import styled from 'styled-components';

const FlexGroup = styled.div`
  display: flex;

  & :not(:last-child) {
    margin-right: 32px;
  }
`;

export default FlexGroup;
