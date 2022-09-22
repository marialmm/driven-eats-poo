export class Pedido {
    constructor() {
        this.prato = null;
        this.bebida = null;
        this.sobremesa = null;
    }

    verificar() {
        const btnPedir = document.querySelector(".fazer-pedido");
        if (this.prato && this.bebida && this.sobremesa) {
            btnPedir.classList.add("ativo");
            btnPedir.disabled = false;
            btnPedir.innerHTML = "Fazer pedido";
        }
    }

    __total() {
        return this.prato.preco + this.bebida.preco + this.sobremesa.preco;
    }

    confirmar() {
        const modal = document.querySelector(".overlay");
        modal.classList.remove("escondido");
        document.querySelector(".confirmar-pedido .prato .nome").innerHTML =
            this.prato.nome;
        document.querySelector(".confirmar-pedido .prato .preco").innerHTML =
            this.prato.preco.toFixed(2);

        document.querySelector(".confirmar-pedido .bebida .nome").innerHTML =
            this.bebida.nome;
        document.querySelector(".confirmar-pedido .bebida .preco").innerHTML =
            this.bebida.preco.toFixed(2);

        document.querySelector(".confirmar-pedido .sobremesa .nome").innerHTML =
            this.sobremesa.nome;
        document.querySelector(
            ".confirmar-pedido .sobremesa .preco"
        ).innerHTML = this.sobremesa.preco.toFixed(2);

        document.querySelector(".confirmar-pedido .total .preco").innerHTML =
            this.__total().toFixed(2);
    }

    cancelar() {
        const modal = document.querySelector(".overlay");
        modal.classList.add("escondido");
    }

    enviarZap() {
        const telefoneRestaurante = 553299999999;
        const encodedText = encodeURIComponent(
            `Olá, gostaria de fazer o pedido: \n- Prato: ${
                this.prato.nome
            } \n- Bebida: ${this.bebida.nome} \n- Sobremesa: ${
                this.sobremesa.nome
            } \nTotal: R$ ${this.__total().toFixed(2)}`
        );

        const urlWhatsapp = `https://wa.me/${telefoneRestaurante}?text=${encodedText}`;
        window.open(urlWhatsapp);
    }
}
