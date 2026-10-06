import { Endereco } from "./Endereco.js";

export class Cliente {

    constructor(
        public id: number, 
        public nome: string, 
        public idade: number, 
        public endereco?: Endereco
    ){}

    apresentar = () => {
        return  "O nome é: "+this.nome;
    }
    modificarId = (idNovo: number)=>{
        this.id = idNovo;
    }
}