import config from '../config';

const URL_VIDEO = `${config.URL}/videos`;

function create(videoInformation) {
  return fetch(URL_VIDEO, {
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

export default {
  create,
};
