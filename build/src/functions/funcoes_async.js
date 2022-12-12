"use strict";
// Sempre que utilizamos uma função async (solicitando que ela aguarde alguma coisa)
// devemos retornar uma Promise do tipo do retorno, como no exemplo abaixo
// podemos da mesma forma informar mais de um tipo como Promise<number | string>
// podemos passar o mouse para ser possível a visualização de qual tipo está sendo retornado
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "felipe";
    });
}
