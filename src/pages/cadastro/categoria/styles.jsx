import styled from 'styled-components'

import Button from '../../../components/Button'

export const FormGroup = styled.div`
  display: flex;

  & :not(:last-child) {
    margin-right: 32px;
  }
`

export const ButtonPrimary = styled(Button)`
  border: 0;
  background-color: var(--primary);
`

export const ButtonBlack = styled(Button)`
  border: 0;
  background-color: var(--black);
`