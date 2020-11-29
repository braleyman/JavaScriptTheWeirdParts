// prototypal inheritance. The was JavaScript objects should truly be constructed.
var People = {
    firstname: 'John',
    lastname: 'Doe'
};

var test = Object.create(People);
console.log(test);

test.GetFullName = function () {
    return this.firstname + ' ' + this.lastname;
};

console.log(test.GetFullName());