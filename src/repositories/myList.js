import config from '../config';

const URL = `${config.URL}/videos`;

function getAll() {
  return fetch(URL)
    .then((res) => res.json())
    .catch(() => {
      throw new Error('Não foi possível acessar os dados');
    });
}

function create(videoInformation) {
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoInformation),
  })
    .then((res) => res.json())
    .catch(() => {
      throw new Error('Não foi possível acessar os dados');
    });
}

function remove(id) {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .catch(() => {
      throw new Error('Não foi possível acessar os dados');
    });
}

export default {
  getAll,
  create,
  remove,
};
