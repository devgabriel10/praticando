const adicionaPropriedade = (objeto, chave, valor) => {
    objeto[chave] = valor;
    return console.log(objeto);
}

const objetoExemplo = {
    name: 'Gabriel',
    age: 22,
    email: 'gabriel@gmail.com'
};

adicionaPropriedade(objetoExemplo, 'address', 'santinha');