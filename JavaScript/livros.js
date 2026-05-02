document.addEventListener('DOMContentLoaded', () => {

    // ── DADOS ──────────────────────────────────────────────
    const livros = [
        {
            id: 1,
            titulo: 'Dom Casmurro',
            autor: 'Machado de Assis',
            preco: 34.90,
            estoque: true,
            urlLink: 'https://m.media-amazon.com/images/I/81XpG2iKTlL._AC_UF1000,1000_QL80_.jpg',
            sinopse: 'Bentinho narra sua vida marcada pelo ciúme e pela dúvida sobre a fidelidade de Capitu, em uma trama que mistura memória, paixão e desconfiança.',
            genero: 'Psicológico',
            isbn: '9788520933104',
            anoLancamento: 1899,
            paginas: 288,
            dimensoes: '21 x 14 x 2 cm'
        },
        {
            id: 2,
            titulo: 'O Cortiço',
            autor: 'Aluísio Azevedo',
            preco: 29.90,
            estoque: true,
            urlLink: 'https://m.media-amazon.com/images/I/81m1emiSp-S.jpg',
            sinopse: 'Um retrato intenso da vida coletiva em um cortiço carioca, revelando as tensões sociais, os vícios e as paixões que moldam o cotidiano popular.',
            genero: 'Social',
            isbn: '9788520933111',
            anoLancamento: 1890,
            paginas: 304,
            dimensoes: '21 x 14 x 2 cm'
        },
        {
            id: 3,
            titulo: 'Memórias Póstumas de Brás Cubas',
            autor: 'Machado de Assis',
            preco: 32.50,
            estoque: true,
            urlLink: 'https://m.media-amazon.com/images/I/71OL9RU2tJL.jpg',
            sinopse: 'Um defunto-autor conta sua própria história com ironia e filosofia, questionando valores da sociedade e refletindo sobre a existência humana.',
            genero: 'Filosófico',
            isbn: '9788520933128',
            anoLancamento: 1881,
            paginas: 256,
            dimensoes: '21 x 14 x 2 cm'
        },
        {
            id: 4,
            titulo: 'Quincas Borba',
            autor: 'Machado de Assis',
            preco: 28.00,
            estoque: true,
            urlLink: 'https://m.media-amazon.com/images/I/81wuMJ4HXlL._UF1000,1000_QL80_.jpg',
            sinopse: 'Acompanhamos Rubião, herdeiro de Quincas Borba, que mergulha em ilusões e desventuras, guiado pelo lema “ao vencedor, as batatas”, numa crítica mordaz à ambição e ao egoísmo.',
            genero: 'Satírico',
            isbn: '9788520933135',
            anoLancamento: 1891,
            paginas: 320,
            dimensoes: '21 x 14 x 2 cm'
        },
        {
            id: 5,
            titulo: 'O Ateneu',
            autor: 'Raul Pompéia',
            preco: 26.90,
            estoque: true,
            urlLink: 'https://m.media-amazon.com/images/I/A17Rzp18iXL._AC_UF1000,1000_QL80_.jpg',
            sinopse: 'Sérgio, jovem estudante, descobre no colégio Ateneu um microcosmo da sociedade, onde disciplina rígida, vaidade e hipocrisia revelam a perda da inocência.',
            genero: 'Realista',
            isbn: '9788572323589',
            anoLancamento: 1888,
            paginas: 240,
            dimensoes: '21 x 14 x 2 cm'
        },
        {
            id: 6,
            titulo: 'O Guarani',
            autor: 'José de Alencar',
            preco: 31.90,
            estoque: true,
            urlLink: 'https://i.ibb.co/3YfmvHgR/7125-Me-D-KL-AC-UF1000-1000-QL80.jpg',
            sinopse: 'Um romance histórico que narra o amor proibido entre o índio Peri e a jovem Cecília, em meio aos conflitos da colonização brasileira.',
            genero: 'Romantismo',
            isbn: '9788594318848',
            anoLancamento: 1857,
            paginas: 384,
            dimensoes: '21 x 14 x 2 cm'
        },
        {
            id: 7,
            titulo: 'A Moreninha',
            autor: 'Joaquim Manuel de Macedo',
            preco: 24.50,
            estoque: true,
            urlLink: 'https://i.ibb.co/Tx53dKgp/61rqadt-Ss3-S-AC-UF1000-1000-QL80.jpg',
            sinopse: 'Um dos marcos do romantismo brasileiro, conta a história de Augusto e sua promessa de amor de infância, em uma trama leve e cativante.',
            genero: 'Romantismo',
            isbn: '9788525406545',
            anoLancamento: 1844,
            paginas: 192,
            dimensoes: '21 x 14 x 2 cm'
        },
        {
            id: 8,
            titulo: 'Senhora',
            autor: 'José de Alencar',
            preco: 27.80,
            estoque: true,
            urlLink: 'https://i.ibb.co/20mzMZYY/image.png',
            sinopse: 'Aurélia Camargo, uma mulher forte e rica, "compra" seu antigo amor Fernando Seixas para se vingar de uma desilusão passada, em uma crítica à sociedade da época.',
            genero: 'Romantismo',
            isbn: '9788577995165',
            anoLancamento: 1875,
            paginas: 224,
            dimensoes: '21 x 14 x 2 cm'
        },
        {
            id: 9,
            titulo: 'O Mulato',
            autor: 'Aluísio Azevedo',
            preco: 29.00,
            estoque: true,
            urlLink: 'https://i.ibb.co/Df8t3zVP/image.png',
            sinopse: 'Obra inaugural do naturalismo no Brasil, aborda o preconceito racial e a hipocrisia da sociedade maranhense do século XIX.',
            genero: 'Naturalismo',
            isbn: '9788538077626',
            anoLancamento: 1881,
            paginas: 280,
            dimensoes: '21 x 14 x 2 cm'
        },
        {
            id: 10,
            titulo: 'Inocência',
            autor: 'Visconde de Taunay',
            preco: 25.90,
            estoque: true,
            urlLink: 'https://i.ibb.co/BHTkLS1P/image.png',
            sinopse: 'Um clássico do regionalismo que narra o amor impossível entre Inocência e o médico Cirino no sertão do Mato Grosso.',
            genero: 'Regionalismo',
            isbn: '9788501111180',
            anoLancamento: 1872,
            paginas: 208,
            dimensoes: '21 x 14 x 2 cm'
        }
    ];


    // ── RENDERIZAR CARDS NA HOME ───────────────────────────
    const livrosContainer = document.querySelector('.scroll-livros__trilha');

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

    const cartBtn = document.querySelector('.btn-carrinho');
    let livroSelecionado = null;

    function abrirModal(livro) {
        livroSelecionado = livro;
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) ?? [];
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
        const livro = livros.find(livro => livro.id === parseInt(livroId));
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
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) ?? [];

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
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) ?? [];
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

});
