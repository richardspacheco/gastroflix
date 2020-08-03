import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const InputStyled = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 32px;
  border: 0;
  border-radius: 4px;
  padding: 16px 16px 0 16px;
  background-color: black;
  font-size: 16px;

  &:focus {
    outline: none;
  }

  ${(props) => props.as === 'textarea' && css`
    height: auto;
    padding: 20px 16px 16px 16px;
    resize: none;
  `}
`;

const LabelAnimated = styled.label`
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 16px;
  color: #8c8c8c;
  transition:
    top 0.2s,
    font-size 0.2s;

  ${InputStyled}.hasText + &,
  ${InputStyled}:focus + & {
    font-size: 10px;
    top: 3px;
  }
`;

function FormField({
  label,
  type,
  name,
  placeholder,
  value,
  options,
  onChange,
}) {
  const isTextArea = type === 'textarea';

  return (
    <Wrapper>
      <InputStyled
        as={isTextArea ? 'textarea' : 'input'}
        type={isTextArea ? null : type}
        id={`id_${name}`}
        name={name}
        placeholder={placeholder}
        value={value}
        list={options ? `options_${name}` : null}
        autoComplete="off"
        onChange={onChange}
        className={value ? 'hasText' : ''}
      />
      <LabelAnimated htmlFor={`id_${name}`}>
        {label}
      </LabelAnimated>
      {options && (
        <datalist id={`options_${name}`}>
          {options.map((option) => (
            <option
              key={`option_${option}`}
              value={option}
            >
              {option.titulo}
            </option>
          ))}
        </datalist>
      )}
    </Wrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  placeholder: null,
  value: '',
  options: null,
  onChange: () => { },
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

export default FormField;
