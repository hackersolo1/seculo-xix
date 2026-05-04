document.addEventListener('DOMContentLoaded', () => {
    const livrosContainer = document.querySelector('.scroll-livros__trilha');

    // ── RENDERIZAR CARDS NA HOME ───────────────────────────
    async function renderList() {
        try {
            const res = await fetch('/Dados/livros.json');
            const data = await res.json();
            livros = data.livros;
            livros.forEach(livro => {
                const livroCard = document.createElement('div');
                livroCard.classList.add('livro-card');

                livroCard.innerHTML = `
                        <div class="livro-card__capa">
                            <img src="${livro.urlLink}" alt="${livro.titulo}" />
                            <span class="livro-card__tag">${livro.genero}</span>
                        </div>
                        <div class="livro-card__info">
                            <h3 class="livro-card__titulo">${livro.titulo}</h3>
                            <p class="livro-card__autor">${livro.autor}</p>
                            <div class="livro-card__rodape">
                                <span class="livro-card__preco">R$ ${livro.preco.toFixed(2)}</span>
                            </div>
                        </div>
                    `;
                livroCard.addEventListener('click', () => {
                    abrirModal(livro);
                })
                livrosContainer.appendChild(livroCard);
            });
        } catch (e) {
            console.log(e);
        }
    }

    let carrinho = [];

    const cartBtn = document.querySelector('.btn-carrinho');
    let livroSelecionado = null;

    function abrirModal(livro) {
        livroSelecionado = livro;
        carrinho = getCarrinho();
        if (carrinho.some(item => item.id === livro.id)) {
            cartBtn.innerHTML = `
                <span class="material-symbols-outlined btn-carrinho__icone">check</span>
                Item já no carrinho!
            `;
            cartBtn.style.backgroundColor = 'green';
            cartBtn.disabled = true;
        } else {
            cartBtn.innerHTML = `
                <span class="material-symbols-outlined btn-carrinho__icone">add_shopping_cart</span>
                Adicionar ao Carrinho
            `;
            cartBtn.style.backgroundColor = 'var(--primary)';
            cartBtn.disabled = false;
        }
        document.querySelector('.bookCover').src = livro.urlLink;
        document.querySelector('.produto-detalhes__titulo').textContent = livro.titulo;
        document.querySelector('.produto-detalhes__autor span').textContent = livro.autor;
        document.querySelector('.produto-desc__texto-desc').textContent = livro.sinopse;
        document.querySelector('.preco-box__atual').textContent = `R$ ${livro.preco.toFixed(2)}`;
        document.querySelector('.btn-carrinho__icone').setAttribute('b-id', livro.id);
        document.querySelector('.produto-meta__isbn').textContent = livro.isbn;
        document.querySelector('.produto-meta__paginas').textContent = livro.paginas;
        document.querySelector('.produto-meta__data').textContent = livro.anoLancamento;
        document.querySelector('.spec-card__texto-dim').textContent = `${livro.dimensoes}. Ideal para leitura em qualquer lugar.`;
        document.querySelector('.spec-card__texto-ano').textContent = `Publicado originalmente em ${livro.anoLancamento}.`;
        document.querySelector('.produto-meta__isbn').textContent = livro.isbn;
        document.querySelector('.book-popup').style.animation = 'fadeIn 0.3s ease-in-out forwards';
    }

    // ── ADICIONAR AO CARRINHO ──────────────────────────────
    cartBtn.addEventListener('click', () => {
        const livroId = document.querySelector('.btn-carrinho__icone').getAttribute('b-id');
        adicionarAoCarrinho(livroSelecionado);
        cartBtn.innerHTML = `
                <span class="material-symbols-outlined btn-carrinho__icone">check</span>
                Item adicionado ao carrinho!
            `;
        cartBtn.style.backgroundColor = 'green';
        cartBtn.disabled = true;
    });

    document.querySelector('.book-popup__close').addEventListener('click', () => {
        document.querySelector('.book-popup').style.animation = 'fadeOut 0.3s ease-in-out forwards';
    });

    // ── ADICIONAR AO CARRINHO ──────────────────────────────
    function adicionarAoCarrinho(livro) {
        carrinho = getCarrinho();

        carrinho.push({
            id: livro.id,
            titulo: livro.titulo,
            autor: livro.autor,
            preco: livro.preco,
            urlLink: livro.urlLink
        });

        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarBadge();

        console.log(`✅ "${livro.titulo}" adicionado ao carrinho.`);
    }

    // ── BADGE DO CARRINHO ──────────────────────────────────
    function atualizarBadge() {
        carrinho = getCarrinho();
        const badge = document.querySelector('.nav__badge');
        if (badge) badge.textContent = carrinho.length;
    }

    // Atualiza o badge ao carregar a página
    atualizarBadge();

    // ── BOTÃO DO ÍCONE DO CARRINHO ─────────────────────────
    // ✅ Só redireciona — o carrinho.js cuida do resto
    document.querySelector('#cart')?.addEventListener('click', () => {
        window.location.href = 'carrinho.html';
    });

    document.querySelector('.btn-sobre-autor').addEventListener('click', () => {
        window.location.href = 'sobre.html';
    });

    renderList();
    function getCarrinho() {
        return JSON.parse(localStorage.getItem('carrinho')) ?? [];
    }

});
