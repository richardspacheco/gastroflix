import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import FormField from '../../components/FormField';

import useForm from '../../hooks/useForm';
import channelRepositories from '../../repositories/channel';

function NewChannel() {
  const [channel, handleChange] = useForm({});
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    channelRepositories.create(channel)
      .then(() => {
        history.push('/');
      });
  }

  return (
    <>
      <h2 style={{ marginTop: 0 }}>Add new channel</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormField
          label="Title"
          name="title"
          value={channel.title}
          onChange={handleChange}
        />
        <FormField
          label="Channel ID"
          name="url"
          value={channel.url}
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
