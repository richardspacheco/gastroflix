import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function InputCheckbox({
  name, label, checked, onChange,
}) {
  return (
    <InputCheckboxContainer>
      <input
        id={`id_${name}`}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={`id_${name}`}>
        <span>{label}</span>
      </label>
    </InputCheckboxContainer>
  );
}

InputCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputCheckbox;

const InputCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  & span {
    margin-left: 8px;
    font-size: .9rem;
  }

  & > input {
    opacity: 0;
    width: 20px;
    height: 20px;
    margin: 0;
    z-index: 1;
  }

  & > label {
    position: relative;
    display: flex;
    align-items: center;
  }

  & > label::before {
    content: "";
    position: absolute;
    display: block;
    border: 0;
    border-radius: 2px;
    width: 20px;
    height: 20px;
    left: -20px;
    background: #222222;
  }

  & > input:checked + label::before {
    background: var(--primary);
  }

  & > input:checked + label::after {
    content: "";
    position: absolute;
    width: 4px;
    height: 8px;
    top: 2px;
    left: -14px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
