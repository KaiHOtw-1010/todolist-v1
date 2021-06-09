// jshint esversion: 6

// 'exports' is assigned to 'module.exports' at the end
// note: make sure no new assignment to 'exports'
exports.getDate = function () {
  const today = new Date();
	const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  return today.toLocaleDateString("en-US", options);
};

exports.getDay = function () {
  const today = new Date();
	const options = {
    weekday: 'long'
  };
  return today.toLocaleDateString("en-US", options);
};

console.log("The module exports object from 'date.js' is:");
console.log(module.exports);
