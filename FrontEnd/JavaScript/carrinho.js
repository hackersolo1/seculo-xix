document.addEventListener('DOMContentLoaded', () => {
    const listaItens = document.querySelector('.lista-itens');
    const emptyCart = document.querySelector('.empty-cart');
    const btnCheckout = document.querySelector('.btn-checkout');


    // ── CARREGAR E RENDERIZAR ──────────────────────────────
    function renderizarCarrinho() {
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) ?? [];

        // Remove itens antigos (mantém o empty-cart no DOM)
        document.querySelectorAll('.item-carrinho').forEach(el => el.remove());

        if (carrinho.length === 0) {
            emptyCart.style.display = 'flex';
            btnCheckout.disabled = true;
            btnCheckout.style.opacity = 0.5;
            btnCheckout.innerHTML = `
                <span class="material-symbols-outlined">lock</span>
                Finalizar Compra
            `;
            btnCheckout.querySelector('span').style.animation = '';
            return;
        }

        emptyCart.style.display = 'none';
        btnCheckout.disabled = false;
        btnCheckout.style.opacity = 1;
        btnCheckout.innerHTML = `
            <span class="material-symbols-outlined">lock</span>
            Finalizar Compra
        `;
        btnCheckout.querySelector('span').style.animation = '';

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

            document.querySelectorAll('compra-concluida-modal__lista-livros li').forEach(el => el.remove());

            const li = document.createElement('li');
            li.innerHTML = `
                <a href="${livro.pdfLink ?? ''}" target="_blank">${livro.titulo}</a>
            `;
            document.querySelector('.compra-concluida-modal__lista-livros').appendChild(li);


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

    btnCheckout.addEventListener('click', () => {
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) ?? [];
        btnCheckout.disabled = true;
        btnCheckout.style.opacity = 0.5;
        btnCheckout.innerHTML = `
            <span class="material-symbols-outlined">progress_activity</span>
            Processando...
        `
        btnCheckout.querySelector('span').style.animation = 'loading 1.3s linear infinite';
        setTimeout(() => {
            document.querySelector('.compra-concluida-modal').style.animation = 'fadeIn 0.3s ease-in-out forwards';
            localStorage.setItem('carrinho', '[]')
            renderizarCarrinho();
        }, 3000);
    });

    document.querySelector('.btn-fechar-modal').addEventListener('click', () => {
        const modal = document.querySelector('.compra-concluida-modal');
        modal.style.animation = 'fadeOut 0.3s ease-in-out forwards';

        // Restaura o botão de checkout
        btnCheckout.disabled = false;
        btnCheckout.style.opacity = 1;
        btnCheckout.innerHTML = `
            <span class="material-symbols-outlined">lock</span>
            Finalizar Compra
        `;
        btnCheckout.querySelector('span').style.animation = '';
        renderizarCarrinho();
    })

    function fecharModal() {
        const modal = document.querySelector('.compra-concluida-modal');
        modal.style.animation = 'fadeOut 0.3s ease-in-out forwards';

        // Restaura o botão de checkout
        btnCheckout.disabled = false;
        btnCheckout.style.opacity = 1;
        btnCheckout.innerHTML = `
            <span class="material-symbols-outlined">lock</span>
            Finalizar Compra
        `;
        btnCheckout.querySelector('span').style.animation = '';
        renderizarCarrinho();
    }


    // ── INICIALIZAR ────────────────────────────────────────
    renderizarCarrinho();

});
