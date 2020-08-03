import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';

function NotFound() {
  return (
    <Layout>
      <FlexWrapper>
        <LargeFriendlyLetters>
          404
        </LargeFriendlyLetters>
        <h2>Nothing to see here</h2>
      </FlexWrapper>
    </Layout>
  );
}

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LargeFriendlyLetters = styled.h1`
  margin: 2rem 0;
  font-size: 5rem;
`;

export default NotFound;
