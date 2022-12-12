// Fazemos com que o parâmetro possa ter alguns tipos possíveis e 
// a função também vai poder retornar esses tipos possíveis

function calltoPhone(phone: number | string): number | string {
    return phone;
}

calltoPhone("1111514684")
calltoPhone(1111514684)