import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import FormField from '../../components/FormField';
import InputCheckbox from '../../components/InputCheckbox';
import Message from '../../components/Message';

import useForm from '../../hooks/useForm';
import myListRepository from '../../repositories/myList';

function NewVideo({ callback }) {
  const [keepOpen, setKeepOpen] = useState(false);
  const [serverError, setServerError] = useState();

  const initialFields = {};
  function validate(fields) {
    const errors = {};
    if (fields.url.length !== 11) errors.url = 'Please insert a valid Video ID';
    return errors;
  }

  const {
    fields: video,
    errors: formErrors,
    handleChange,
    handleClear,
    validateFields,
  } = useForm(initialFields, validate);

  async function handleSubmit(e) {
    e.preventDefault();

    const validateErrors = validateFields();
    if (Object.keys(validateErrors).length > 0) return;

    try {
      await myListRepository.create(video);
    } catch (err) {
      setServerError(err);
      return;
    }

    handleClear(e);
    callback(keepOpen);
  }

  return (
    <>
      <h2 style={{ marginTop: 0 }}>Add new video</h2>

      {serverError && <Message error>{serverError}</Message>}

      {formErrors.url && <Message error>{formErrors.url}</Message>}

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormField
          label="Title"
          name="title"
          value={video.title}
          onChange={handleChange}
          required
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
          required
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
