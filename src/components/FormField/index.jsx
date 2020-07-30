import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

const InputStyled = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 32px;
  border: 0;
  border-radius: 4px;
  padding: 16px 16px 0 16px;
  background-color: var(--black);
  color: white;
  font-size: 16px;

  &:focus {
    outline: none;
  }

  ${props => props.as === 'textarea' && css`
    height: auto;
    padding: 20px 16px 16px 16px;
    resize: none;
  `}
`

const LabelAnimated = styled.label`
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 16px;
  transition:
    top 0.2s,
    font-size 0.2s;

  ${InputStyled}.hasText + &,
  ${InputStyled}:focus + & {
    font-size: 10px;
    top: 3px;
  }
`

function FormField(props) {
  return (
    <Wrapper>
        <InputStyled as={props.type === 'textarea' ? 'textarea' : 'input'}
          type={props.type === 'textarea' ? null : props.type}
          id={`id_${props.name}`}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          className={props.value ? 'hasText' : ''}
        />
        <LabelAnimated htmlFor={`id_${props.name}`}>
          {props.label}
        </LabelAnimated>
    </Wrapper>
  )
}

export default FormField