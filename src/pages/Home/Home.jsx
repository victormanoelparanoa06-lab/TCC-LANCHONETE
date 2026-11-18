// Libs
import { useRef, useEffect, useState } from 'react';

// Css
import './Home.css';

// Components
import Product from '@/components/cards/Products/Product.jsx';
import Cart from '@/components/cards/Cart/Cart.jsx';
import HamburguerRain from "@/components/common/HamburguerRain/HamburguerRain.jsx";

// Images
import ImgHamburguer from '@/assets/images/lanches/hamburguer.png';
import ImgSuco from '@/assets/images/sucos/suco.png';
import ImgSobremesa from '@/assets/images/sobremesas/sobremesa.png';

function Home () {
    const [produtos, setProdutos] = useState([
        {id: 1, produto: 'Lanche', preco: 20, categoria: 'Lanches', estoque: 39, imagem: ImgHamburguer},
        {id: 2, produto: 'Suco', preco: 10, categoria: 'Sucos', estoque: 20, imagem: ImgSuco},
        {id: 3, produto: 'Sobremesa', preco: 15, categoria: 'Sobremesas', estoque: 0, imagem: ImgSobremesa}
    ]); 

    // Carrinho
    const [carrinho, setCarrinho] = useState([]);

    function AdicionarAoCarrinho (produto) {
        // Verifica se o produto já existe no carrinho

        setCarrinho((carrinhoAtual) => {

            const JaExiste = carrinhoAtual.some((i) => 
                i.id === produto.id
            );

            // Se já existe, atualiza a quantidade
            if (JaExiste) {
                return carrinhoAtual.map((i) =>
                    i.id === produto.id
                        ? { ...i, quantidade: i.quantidade + 1 }
                        : i
                );

            // Se não existe, adiciona ao carrinho
            } else {
                return [...carrinhoAtual, { ...produto, quantidade: 1 }];
            }
        })
    }

    let total = 0;

    for (const c of carrinho) {
        total += c.quantidade * c.preco;
    }

    function AtualizarQuantidade (produto, NovaQuantidade) {
        setCarrinho((CarrinhoAtual) => 
            CarrinhoAtual.map((p) =>
                p.id === produto.id
                    ? { ...p, quantidade: Number(NovaQuantidade)}
                    : p
            )
        );
    }

    let ProdutosComprados = carrinho.map((c) => c.produto).join(', ');

    function Remover (produto) {
        setCarrinho(carrinho.filter((p) => p.id !== produto.id));
    }

    // Comprar
    function Comprar () {
        if (ProdutosComprados === '') {
            alert('Seu carrinho está vazio.');
        } else {
            alert('Compra efetuada com sucesso! | ' + ProdutosComprados + ' | Total: R$ ' + total);
            setCarrinho([]);
            handleComprar();
        }

        setProdutos(produtos.map((p) => ({
            ...p, estoque: p.estoque - (carrinho.filter((c) => 
                                        c.id === p.id)[0]?.quantidade || 0
                                       )
        })));
    }

    // Chuva Hamburguer
    const [chuva, setChuva] = useState(0);
    const timerRef = useRef(null);

    function handleComprar() {
        setChuva((c) => c + 1); // muda a key e reinicia a animação a cada clique
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setChuva(0), 4000);
    }

    return (
        <section>
            <div className='home'>
                <h2>Cardápio</h2>
                <Product 
                    products={produtos} 
                    OnAdd={AdicionarAoCarrinho}
                    OnBuy={Comprar}
                    OnUpdate={AtualizarQuantidade}
                />
            </div>

            {carrinho.length === 0 ? '' : 
                <div className="home">
                    <h2>Carrinho</h2>
                    <Cart 
                        cart={carrinho} 
                        total={total}
                        OnRemove={Remover}
                        OnAdd={AdicionarAoCarrinho}
                        OnUpdate={AtualizarQuantidade}
                        OnBuy={Comprar}
                    />
                </div>
            }
            {chuva > 0 && <HamburguerRain key={chuva} />}
        </section>
    )
}

export default Home;