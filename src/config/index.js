const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:3004'
  : 'https://gastroflix-api.herokuapp.com';

export default {
  URL,
};
