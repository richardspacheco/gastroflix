import config from '../config';
import { handleError } from '../utils/errorHandler';

const URL = `${config.URL}/channels`;

function getAll() {
  return fetch(URL)
    .then((res) => res.json())
    .catch((err) => handleError(err));
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
    .catch((err) => handleError(err));
}

function remove(id) {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .catch((err) => handleError(err));
}

export default {
  getAll,
  create,
  remove,
};
