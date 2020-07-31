import { useState } from 'react';

function useForm(initialValues) {
  const [values, setNewValues] = useState(initialValues);

  function handleChange({ target }) {
    setNewValues({
      ...values,
      [target.getAttribute('name')]: target.value,
    });
  }

  function handleClear(e) {
    e.preventDefault();
    setNewValues(initialValues);
  }

  return [
    values,
    handleChange,
    handleClear,
  ];
}

export default useForm;
