import config from '../config';

const URL = `${config.URL}/channels`;

function getAll() {
  return fetch(URL)
    .then((res) => res.json())
    .catch(() => {
      throw new Error('Não foi possível acessar os dados');
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
    .catch(() => {
      throw new Error('Não foi possível acessar os dados');
    });
}

export default {
  getAll,
  create,
};
