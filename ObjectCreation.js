// prototypal inheritance. The was JavaScript objects should truly be constructed.
var People = {
    firstname: 'John',
    lastname: 'Doe'
};

var test = Object.create(People);
console.log(test);