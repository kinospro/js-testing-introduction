// ANAGRAM
const { isAnagram, chunkArray, functions, reverseString } = require('./simple.scripts');

test('isAnagram function is defined', () => {
	expect(typeof isAnagram).toEqual('function');
});

test('"cinema" is an anagram of "iceman"', () => {
	expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
	expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"Hello" is not an anagram of "Aloha"', () => {
	expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});

// CHUNK ARRAY

test('chunkArray function exist', () => {
	expect(chunkArray).toBeDefined();
});

test('Chunk in array of 10 values with length of 2', () => {
	const numbers = [1,2,3,4,5,6,7,8,9,10];
	const len = 2;
	const chunkedArray = chunkArray(numbers, len);

	expect(chunkedArray).toEqual([[1,2], [3,4], [5,6], [7,8], [9,10]]);


});

// FUNCTIONS BLOCK

// beforeEach(() => {
//     initDatabase();
// });
//
// afterEach(() => {
// 	closeDatabase();
// });
//
// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');

const nameCheck = () => console.log('Checking Name...');

describe('Checking Names', () => {
	beforeEach(() => nameCheck());
	test ('User is Jeff', () => {
		const user = 'Jeff';
		expect(user).toBe('Jeff');
	});
	test ('User is Karen', () => {
		const user = 'Karen';
		expect(user).toBe('Karen');
	});
});

// toBe
test('Adds 2 to 2 to equal 4', () => {
	expect(functions.add(2, 2)).toBe(4);
});
test('Adds 2 to 2 to NOT equal 5', () => {
	expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test('Should be null', () => {
	expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
	expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual
test('User should be Brad Traversy object', () => {
	expect(functions.createUser()).toEqual({
		firstName: 'Brad',
		lastName: 'Traversy'
	});
});

// Less/greater than
test('Should be under 1600', () => {
	const load1 = 800;
	const load2 = 800;
	expect(load1 + load2).toBeLessThanOrEqual(1600);
	// expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test('There is no I in team', () => {
	expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
	const usernames = ['john', 'karen', 'admin'];
	expect(usernames).toContain('admin');
});

// REVERSE STRING
test('reverseString function should exist', () => {
	expect(reverseString).toBeDefined();
});

test('String reverses', () => {
	expect(reverseString('hello')).toEqual('olleh');
});

test('String reverses with uppercase', () => {
	expect(reverseString('Hello')).toEqual('olleh');
});
