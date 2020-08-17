import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import FormField from '../../components/FormField';
import Message from '../../components/Message';

import useForm from '../../hooks/useForm';
import channelRepositories from '../../repositories/channel';

function NewChannel() {
  const history = useHistory();

  const initialFields = {};
  function validate(fields) {
    const errors = {};
    if (fields.url.length !== 24) errors.url = 'Please insert a valid Channel ID';
    return errors;
  }

  const {
    fields: channel,
    errors,
    handleChange,
    validateFields,
  } = useForm(initialFields, validate);

  function handleSubmit(e) {
    e.preventDefault();
    validateFields();
    if (Object.keys(errors).length === 0) return;

    channelRepositories.create(channel)
      .then(() => {
        history.push('/');
      });
  }

  return (
    <>
      <h2 style={{ marginTop: 0 }}>Add new channel</h2>

      {errors.url && <Message.Error>{errors.url}</Message.Error>}

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
