const axios = require('axios');

// ANAGRAM
const formatStr = (str) => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

const isAnagram = (str1, str2) => {
	return formatStr(str1) === formatStr(str2);
};

exports.isAnagram = isAnagram;

// CHUNK ARRAY
const chunkArray = (arr, len) => {
	const chunkedArr = [];
	arr.forEach(val => {
		const last = chunkedArr[chunkedArr.length - 1];

		if (!last || last.length === len) {
			chunkedArr.push([val]);
		} else {
			last.push(val);
		}
	});

	return chunkedArr;
};

exports.chunkArray = chunkArray;

// FUNCTIONS BLOCK

const functions = {
	add: (num1, num2) => num1 + num2,
	isNull: () => null,
	checkValue: x => x,
	createUser: () => {
		const user = { firstName: 'Brad' };
		user['lastName'] = 'Traversy';
		return user;
	}
};
exports.functions = functions;

// REVERSE STRING

const reverseString = str => str.toLowerCase().split('').reverse().join('');

exports.reverseString = reverseString;
