import { useState } from 'react';

function useForm(initialFields, validate) {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState({});

  function handleChange({ target }) {
    setFields({
      ...fields,
      [target.getAttribute('name')]: target.value,
    });
  }

  function handleClear(e) {
    e.preventDefault();
    setFields(initialFields);
  }

  function validateFields() {
    const validateErrors = validate(fields);
    setErrors(validateErrors);
    return validateErrors;
  }

  return {
    fields,
    errors,
    handleChange,
    handleClear,
    validateFields,
  };
}

export default useForm;
