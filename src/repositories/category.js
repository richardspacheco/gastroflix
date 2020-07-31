import config from '../config';

const URL_CATEGORY = `${config.URL}/categorias`;

function getAll() {
  return fetch(URL_CATEGORY)
    .then((res) => res.json())
    .catch(() => {
      throw new Error('Não foi possível acessar os dados');
    });
}

function getAllWithVideoList() {
  return fetch(`${URL_CATEGORY}?_embed=videos`)
    .then((res) => res.json())
    .catch(() => {
      throw new Error('Não foi possível acessar os dados');
    });
}

export default {
  getAll,
  getAllWithVideoList,
};
