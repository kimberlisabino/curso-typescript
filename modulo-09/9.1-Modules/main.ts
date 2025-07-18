import { EmailValidator, ZipCodeValidator } from "./validators";

let email = 'kimberli.ariotti@email.com';
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(`Is the email "${email}" valid? ${result}`); // true

let validatorCep = new ZipCodeValidator();
let resulCep = validatorCep.isValid('12345-678');
console.log(`Is the zip code "12345-678" valid? ${resulCep}`); // false