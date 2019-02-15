const generateText = (name, age) => {
  // Returns output text
  return `${name} (${age} years old)`;
};

exports.createElement = (type, text, className) => {
  // Creates a new HTML element and returns it
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

const validateInput = (text, notEmpty, isNumber) => {
  // Validate user input with two pre-defined rules
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  if (isNumber && +text === NaN) {
    return false;
  }
  return true;
};

exports.checkAndGenerate = (name, age) => {
  if (!validateInput(name, true, false) || !validateInput(age, false, true)) {
    return false;
  }
  return generateText(name, age);
};

exports.generateText = generateText;
exports.validateInput = validateInput;

const { fetchData, fetchUser } = require('./http');

const loadTitle = () => {
	return fetchData().then(extractedData => {
		const title = extractedData.title;
		const transformedTitle = title.toUpperCase();
		return transformedTitle;
	});
};

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

const loadUserName = () => {
	return fetchUser().then( data => {
		return capitalizeFirstLetter(data.name);
	} );
};

const printTitle = () => {
	loadTitle().then(title => {
		return title;
	});
};

exports.printTitle = printTitle;
exports.loadTitle = loadTitle;
exports.loadUserName = loadUserName;
