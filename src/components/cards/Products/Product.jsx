import { useState } from 'react';
import './Product.css';
import Button from '@/components/common/Button/Button.jsx';
import ImgHamburguer from '@/assets/images/lanches/hamburguer.png';
import ImgSuco from '@/assets/images/sucos/suco.png';
import ImgSobremesa from '@/assets/images/sobremesas/sobremesa.png';

function Product () {
    const [produtos, setProdutos] = useState([
        {id: 1, produto: 'Lanche', preco: 20, categoria: 'Lanches', estoque: 10, imagem: ImgHamburguer},
        {id: 2, produto: 'Suco', preco: 10, categoria: 'Sucos', estoque: 20, imagem: ImgSuco},
        {id: 3, produto: 'Sobremesa', preco: 15, categoria: 'Sobremesas', estoque: 0, imagem: ImgSobremesa},
    ]); 

    function Comprar (productid, productname, productprice, productcategory) {
        alert('Você vai comprar ' + productname + ' | Preço: R$ ' + productprice + ' | Categoria: ' + productcategory + ' | Id do produto: ' + productid);
    }

    function AdicionarAoCarrinho (productid, productname, productprice) {
        alert('Você vai adicionar ' + productname + ' ao carrinho | Preço: R$ ' + productprice + ' | Id do produto: ' + productid);
    }

    return (
        <div className="containerproduct">
            {produtos.map((produto) => (
                <div className="product" key={produto.id} style={produto.estoque == 0 ? {opacity: 0.5} : {opacity: 1}}>
                    <img src={produto.imagem} alt={produto.produto} title={produto.produto} />
                    <h2 style={{textAlign: 'center'}}>{produto.produto}</h2>
                    <p>R$ {produto.preco}</p>
                    <p>Categoria: {produto.categoria}</p>
                    {produto.estoque == 0 ? <p style={{color: 'red'}}>Produto indisponível</p> : <p style={{color: 'green'}}>{produto.estoque} disponíveis</p>}
                    <Button title='Comprar' funcao={() => Comprar(produto.id, produto.produto, produto.preco, produto.categoria)}/>
                    <Button title='Adicionar ao carrinho' funcao={() => AdicionarAoCarrinho(produto.id, produto.produto, produto.preco)}/>
                </div>
            ))}
        </div>
    )
}

export default Product;