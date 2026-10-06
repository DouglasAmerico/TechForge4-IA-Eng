import { Cliente } from "./model/Cliente.js";

const cliente = new Cliente(1, "Douglas", 20);
const cliente2 = new Cliente(
    2, 
    "Thais", 
    20,
    {
        cidade: "Terra Boa",
        uf: "PR"
    }
);

const clientes: Cliente[] = [];
clientes.push(cliente);
clientes.push(cliente2);

console.log(clientes);
