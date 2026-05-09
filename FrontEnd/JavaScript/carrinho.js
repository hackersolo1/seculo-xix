document.addEventListener('DOMContentLoaded', () => {

    const listaItens = document.querySelector('.lista-itens');
    const emptyCart = document.querySelector('.empty-cart');
    const spanSubtotal = document.querySelector('.subtotal-valor');
    const spanTotal = document.querySelector('.total-valor');

    // ── CARREGAR E RENDERIZAR ──────────────────────────────
    function renderizarCarrinho() {
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) ?? [];

        // Remove itens antigos (mantém o empty-cart no DOM)
        document.querySelectorAll('.item-carrinho').forEach(el => el.remove());

        if (carrinho.length === 0) {
            emptyCart.style.display = 'flex';
            return;
        }

        emptyCart.style.display = 'none';

        carrinho.forEach((livro, index) => {
            const article = document.createElement('article');
            article.classList.add('item-carrinho');
            article.dataset.index = index;

            article.innerHTML = `
                <div class="item-carrinho__capa">
                    <img src="${livro.urlLink ?? ''}" alt="${livro.titulo}" />
                </div>
                <div class="item-carrinho__info">
                    <div>
                        <div class="item-carrinho__topo">
                            <div>
                                <h3 class="item-carrinho__titulo">${livro.titulo}</h3>
                                <p class="item-carrinho__autor">por ${livro.autor}</p>
                            </div>
                            <span class="item-carrinho__preco">R$ ${livro.preco.toFixed(2)}</span>
                        </div>
                    </div>
                    <div class="item-carrinho__rodape">
                        <button class="btn-remover" data-index="${index}">
                            <span class="material-symbols-outlined">delete</span>
                            Remover
                        </button>
                    </div>
                </div>
            `;

            article.querySelector('.btn-remover').addEventListener('click', (e) => {
                const i = Number(e.currentTarget.dataset.index);
                removerDoCarrinho(i);
            });

            listaItens.appendChild(article);
        });

    }

    // ── REMOVER ITEM ───────────────────────────────────────
    function removerDoCarrinho(index) {
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) ?? [];
        carrinho.splice(index, 1); // remove 1 item na posição "index"
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        renderizarCarrinho(); // re-renderiza tudo
    }


    // ── INICIALIZAR ────────────────────────────────────────
    renderizarCarrinho();

});
