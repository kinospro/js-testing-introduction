const fetchData = () => {
  return Promise.resolve({ title: 'delectus aut autem' });
};

const fetchUser = () => {
	return Promise.resolve({ name: 'Leanne Graham' });
};

exports.fetchData = fetchData;
exports.fetchUser = fetchUser;
