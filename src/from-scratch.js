const measureRain = (inches) => {
if (inches === 0) {
  return 'drought'
} else if (inches < 2){
  return 'dry'
} else if (inches < 4){
  return 'average' 
} else if (inches < 6){
  return 'rainy'
} else if (inches >= 6){
 return 'flood'
}
};

const happyBirthdayPet = (breed, age) => {
if (breed === 'snake'){
  return 'Hiss hiss!'
} else if (breed === 'cat' && age < 5){
  return 'Mew mew!'
} else if (breed === 'cat' && age >= 5){
  return 'Meow meow!'
} else if (breed === 'dog' && age < 5){
  return 'Arf arf!'
} else if (breed === 'dog' && age >= 5 && age < 10){
  return 'Woof woof!'
} else if (breed === 'dog' && age >= 10){
  return 'Boof!'
} else {
  return 'Happy birthday!'
}
};

const funTypes = (jsType) => {
if (jsType === 'string') {
  return "That's just some text."
} else if (typeof jsType === 'number'){
  return "That's a good number."
} else if (typeof jsType === 'boolean'){
  return "To bool, or not to bool?"
} else if (typeof jsType === 'undefined' ){
  return "Nothing, but I didn't set that."
} else if (jsType === null){
  return "Nothing, and I did set that."
} else if (typeof jsType === 'object'){
  return "Anybody got the key?"
} else if (Array.isArray(jsType)){
  "I order you to be indexed."
} else if (Number.isNaN(jsType)){
  return "Well, now you're just showing off." 
}
};

const rounder = (float, roundingSetting ) => {
if (roundingSetting === "up" ){
  return Math.ceil(float)
} else if (roundingSetting === "down") {
  return Math.floor(float) 
} else if (roundingSetting === "honest"){
  return  Math.round(float) 
} else {
  return 'invalid for this'
}
};

const formatName = (first, last) => {
let capitalized1 = first[0].toUpperCase() + first.slice(1).toLowerCase();
let capitalized2 = last[0].toUpperCase() + last.slice(1).toLowerCase();
return `${capitalized1} ${capitalized2}`
}

const extractDomain = (email) => {
  let symbol = '@'
  let email.indexOf('@')
  let email.slice()
};

const startsWithVowel = (str) => {

}

const rotate = () => {

};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  formatName,
  extractDomain,
  startsWithVowel,
  rotate,
};
