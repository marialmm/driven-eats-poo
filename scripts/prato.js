export class Prato {
    constructor(nome, descricao, imagem, preco, pedido) {
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
        this.preco = preco;
        this.elemento = document.createElement("div");
        this.pedido = pedido;
    }

    make() {
        this.elemento.classList.add("opcao");
        this.elemento.addEventListener("click", () => this.selecionar());
        this.elemento.innerHTML = `
        <img src="${this.imagem}" />
        <div class="titulo">${this.nome}</div>
        <div class="descricao">${this.descricao}</div>
        <div class="fundo">
            <div class="preco">R$ ${this.preco.toFixed(2)}</div>
            <div class="check">
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        </div>
        `;
        const pratosContainer = document.querySelector(".opcoes.prato");
        pratosContainer.appendChild(this.elemento);
    }

    selecionar() {
        const selecionado = document.querySelector(".prato .selecionado");
        if (selecionado !== null) {
            selecionado.classList.remove("selecionado");
        }
        this.elemento.classList.add("selecionado");
        this.pedido.prato = { nome: this.nome, preco: this.preco };
        this.pedido.verificar();
    }
}
