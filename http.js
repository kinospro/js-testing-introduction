const axios = require('axios');

const fetchData = () => {
  console.log('Fetching data...');
  return axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      return response.data;
    });
};

exports.fetchData = fetchData;

const fetchUser = () => axios
		.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error');

exports.fetchUser = fetchUser;
