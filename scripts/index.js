import { Prato } from "./prato.js";
import { Bebida } from "./bebida.js";
import { Sobremesa } from "./sobremesa.js";
import { Pedido } from "./pedido.js";
import coquinha from "./img/coquinha_gelada.png";
import frango from "./img/frango_yin_yang.png";
import pudim from "./img/pudim.png";

const btnConfirmar = document.querySelector(".confirmar");
const btnCancelar = document.querySelector(".cancelar");
const btnPedir = document.querySelector(".fazer-pedido");

const pedido = new Pedido();

const pratos = [
    {
        nome: "Estrombelete de Frango",
        imagem: frango,
        descricao: "Um pouco de batata, um pouco de salada",
        preco: 14.9,
    },
    {
        nome: "Asa de Boi",
        imagem: frango,
        descricao: "Com molho shoyu",
        preco: 14.9,
    },
    {
        nome: "Carne de Monstro",
        imagem: frango,
        descricao: "Com batata assada e farofa",
        preco: 14.9,
    },
];

const bebidas = [
    {
        nome: "Coquinha gelada",
        imagem: coquinha,
        descricao: "Lata 350ml",
        preco: 4.9,
    },
    {
        nome: "Caldo de Cana",
        imagem: coquinha,
        descricao: "Copo 600ml",
        preco: 4.9,
    },
    {
        nome: "Corote Gelado",
        imagem: coquinha,
        descricao: "Garrafa 400ml",
        preco: 4.9,
    },
];

const sobremesas = [
    {
        nome: "Pudim",
        imagem: pudim,
        descricao: "Gosto de doce de leite",
        preco: 7.9,
    },
    {
        nome: "Flam",
        imagem: pudim,
        descricao: "Gosto de chocolate",
        preco: 7.9,
    },
    {
        nome: "Brigadeiro",
        imagem: pudim,
        descricao: "3 unidades",
        preco: 7.9,
    },
];

pratos.forEach((pratoInfo) => {
    const prato = new Prato(
        pratoInfo.nome,
        pratoInfo.descricao,
        pratoInfo.imagem,
        pratoInfo.preco,
        pedido
    );

    prato.make();
});

bebidas.forEach((bebidaInfo) => {
    const bebida = new Bebida(
        bebidaInfo.nome,
        bebidaInfo.descricao,
        bebidaInfo.imagem,
        bebidaInfo.preco,
        pedido
    );

    bebida.make();
});

sobremesas.forEach((sobremesaInfo) => {
    const sobremesa = new Sobremesa(
        sobremesaInfo.nome,
        sobremesaInfo.descricao,
        sobremesaInfo.imagem,
        sobremesaInfo.preco,
        pedido
    );

    sobremesa.make();
});

btnConfirmar.addEventListener("click", () => {
    pedido.enviarZap();
});

btnCancelar.addEventListener("click", () => {
    pedido.cancelar();
});

btnPedir.addEventListener("click", () => {
    pedido.confirmar();
});
