type Consumidor = {
    id: number|null,
    nome: string|null,
    idade: number|null,
    email: string|null
}

const criarObjeto = ():Consumidor =>{
    return {
        id: null,
        nome: null,
        idade: null,
        email: null
    }
}

const inserirValoresnoObjeto = ()=>{
    const consumidor: Consumidor = criarObjeto();

    consumidor.id = Number(prompt("Informe o ID: "));
    consumidor.nome = prompt("Informe o Nome: ");
    consumidor.idade = Number(prompt("Informe a Idade: "));
    consumidor.email = prompt("Informe o Email: ");
}

const obterMaiorIdade = ()=>{

}

const obterMenorIdade = ()=>{

}

const obterMediaIdade = ()=>{
    
}

const apresentarInformacoes = ()=>{
    
}