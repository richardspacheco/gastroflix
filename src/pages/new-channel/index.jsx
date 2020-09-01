import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import FormField from '../../components/FormField';
import Message from '../../components/Message';

import useForm from '../../hooks/useForm';
import channelRepository from '../../repositories/channel';

function NewChannel() {
  const history = useHistory();
  const [serverError, setServerError] = useState();

  const initialFields = {};
  function validate(fields) {
    const errors = {};
    if (fields.url.length !== 24) errors.url = 'Please insert a valid Channel ID';
    return errors;
  }

  const {
    fields: channel,
    errors: formErrors,
    handleChange,
    validateFields,
  } = useForm(initialFields, validate);

  function handleSubmit(e) {
    e.preventDefault();

    const validateErrors = validateFields();
    if (Object.keys(validateErrors).length > 0) return;

    channelRepository.create(channel)
      .then(() => history.push('/'))
      .catch((err) => setServerError(err));
  }

  return (
    <>
      <h2 style={{ marginTop: 0 }}>Add new channel</h2>

      {serverError && <Message error>{serverError}</Message>}

      {formErrors.url && <Message error>{formErrors.url}</Message>}

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormField
          label="Title"
          name="title"
          value={channel.title}
          required
          onChange={handleChange}
        />
        <FormField
          label="Channel ID"
          name="url"
          value={channel.url}
          required
          onChange={handleChange}
        />

        <Button.Primary>
          Save
        </Button.Primary>
      </form>
    </>
  );
}

export default NewChannel;
