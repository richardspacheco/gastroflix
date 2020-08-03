const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:3003'
  : 'https://gastroflix-legacy.herokuapp.com';

export default {
  URL,
};
