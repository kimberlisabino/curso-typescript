import { Validator } from "./validator";
// import { Validator as FormValidator } from "./validator"; - pode trocar o nome também


class EmailValidator implements Validator {
    isValid(s: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s); // identifica uma string e retorna se é booleana
    }
}

export { EmailValidator };