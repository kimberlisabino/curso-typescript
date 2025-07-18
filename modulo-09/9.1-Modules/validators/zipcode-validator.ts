import { Validator } from "./validator";

class ZipCodeValidator implements Validator {
    isValid(s: string): boolean {
        const zipCodeRegex = /^\d{5}(-\d{4})?$/; // 5 dígitos, opcionalmente seguidos por um hífen e 4 dígitos
        return zipCodeRegex.test(s); // retorna true se a string corresponder ao padrão do CEP
    }
}

export { ZipCodeValidator };