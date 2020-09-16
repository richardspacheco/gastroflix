import config from '../config';

const URL = `${config.URL}/channels`;

function getAll() {
  return fetch(URL)
    .then((res) => res.json())
    .catch((err) => {
      let errMessage = '';
      if (!err.status) errMessage = 'Server connection failure';
      throw errMessage;
    });
}

function create(channelInfo) {
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(channelInfo),
  })
    .then((res) => res.status)
    .catch((err) => {
      let errMessage = '';
      if (!err.status) errMessage = 'Server connection failure';
      throw errMessage;
    });
}

function remove(id) {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .catch((err) => {
      let errMessage = '';
      if (!err.status) errMessage = 'Server connection failure';
      throw errMessage;
    });
}

export default {
  getAll,
  create,
  remove,
};
