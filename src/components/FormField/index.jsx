import React from 'react'

function FormField(props) {
  return (
    <div>
      <label>
        {props.label}
        {React.createElement(props.type === 'textarea' ? 'textarea' : 'input', {
          type: props.type === 'textarea' ? null : props.type,
          name: props.name,
          placeholder: props.placeholder,
          value: props.value,
          onChange: props.onChange,
        })}
      </label>
    </div>
  )
}

export default FormField