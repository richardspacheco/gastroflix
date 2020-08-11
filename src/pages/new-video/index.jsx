import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import FormField from '../../components/FormField';
import InputCheckbox from '../../components/InputCheckbox';

import useForm from '../../hooks/useForm';
import myListRepository from '../../repositories/myList';

function NewVideo({ callback }) {
  const initialValues = {
    title: '',
    channel: '',
    url: '',
  };

  const [video, handleChange, handleClear] = useForm(initialValues);
  const [keepOpen, setKeepOpen] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    await myListRepository.create(video);
    handleClear(e);
    callback(keepOpen);
  }

  return (
    <>
      <h2 style={{ marginTop: 0 }}>Add new video</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormField
          label="Title"
          name="title"
          value={video.title}
          onChange={handleChange}
        />

        <FormField
          label="Channel"
          name="channel"
          value={video.channel}
          onChange={handleChange}
        />

        <FormField
          label="Video ID"
          name="url"
          value={video.url}
          onChange={handleChange}
        />

        <InputCheckbox
          label="Keep open"
          name="keepOpen"
          checked={keepOpen}
          onChange={() => setKeepOpen(!keepOpen)}
        />

        <Button.Primary>
          Save
        </Button.Primary>
      </form>
    </>
  );
}

NewVideo.defaultProps = {
  callback: () => { },
};

NewVideo.propTypes = {
  callback: PropTypes.func,
};

export default NewVideo;
