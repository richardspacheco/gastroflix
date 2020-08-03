import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import FormField from '../../components/FormField';

import useForm from '../../hooks/useForm';
import myListRepository from '../../repositories/myList';

function NewVideo({ callback }) {
  const initialValues = {
    title: '',
    channel: '',
    url: '',
  };

  const [video, handleChange, handleClear] = useForm(initialValues);

  function handleSubmit(e) {
    e.preventDefault();
    myListRepository.create(video);
    handleClear(e);
    callback();
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

        <Button.Primary>
          Salvar
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
