// Libs
import { useRef, useEffect, useState } from 'react';

// Css
import './Home.css';

// Components
import Product from '@/components/cards/Products/Product.jsx';
import Cart from '@/components/cards/Cart/Cart.jsx';
import HamburguerRain from "@/components/common/HamburguerRain/HamburguerRain.jsx";

function Home () {
    const [produtos, setProdutos] = useState([
        {id: 1, produto: "Hambúrguer", preco: 20, categoria: "Lanches", estoque: 4, imagem: "https://img.magnific.com/fotos-gratis/delicioso-cheeseburger-classico-com-queijo-derretido-e-vegetais-frescos_272375-26468.jpg?semt=ais_hybrid&w=740&q=80" },
        {id: 2, produto: "Cachorro-quente", preco: 15, categoria: "Lanches", estoque: 5, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjAuvthvNNSZTSxqSE45hCbqJ6Bo08UbovjGHgxiPphQ&s=10"},
        {id: 3, produto: "Batata Frita", preco: 10, categoria: "Frituras", estoque: 7, imagem: "https://beagaembalagem.com.br/wp-content/uploads/2021/06/batata-frita.jpeg"},
        {id: 4, produto: "Pizza", preco: 20, categoria: "Massas", estoque: 2, imagem: "https://img.magnific.com/psd-premium/uma-pizza-com-azeitonas-tomates-e-azeitonas_1268410-858.jpg?semt=ais_hybrid&w=740&q=80"},
        {id: 5, produto: "Espaguete", preco: 8, categoria: "Massas", estoque: 0, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRePkDDOWLuI1qYbF_B9v1Bs03RgxNoz-NUmfiVacEUw&s=10"},
        {id: 6, produto: "Panquecas", preco: 5 , categoria: "Massas", estoque: 0, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkMbLTM6o7qrkHswspsF0oQIAqcfQwfoJDwcru5rOhxOHgroOf6EN9Ev3&s=10"},
        {id: 7, produto: "Donuts", preco: 5 , categoria: "Doces", estoque: 10, imagem: "https://media.istockphoto.com/id/538335769/pt/foto/d%C3%B3nute-com-confeito-colorido-para-bolos-isolados.jpg?s=612x612&w=0&k=20&c=hqnBADd5WlEl5Lh4kcnty3rINoRVWuaI53_TenffGWY="},
        {id: 8, produto: "Salada de frutas", preco: 5, categoria: "Frutas", estoque: 3, imagem: "https://receitanatureba.com/wp-content/uploads/2022/05/salada-de-frutas-simples.png"},
        {id: 9, produto: "Sorvete", preco: 8, categoria: "Doces", estoque: 20, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8pFDs2xEjJtKTR7k_ia69ESCZLrtFT9TlAa1ZE556Q&s=10"},
        {id: 10, produto: "Refrigerante", preco: 5, categoria: "Bebidas", estoque: 18, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStuaZPWIvBNPmHwV5aAcZDwyrev0bfKRQMv46WozRBXw&s=10"}

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
            alert('Compra efetuada com sucesso! | Produto: ' + ProdutosComprados + ' | Total: R$ ' + total);
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
                    <h2>🛒 Meu Carrinho</h2>
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