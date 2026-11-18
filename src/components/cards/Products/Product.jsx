import { useState } from 'react';
import './Product.css';
import Button from '@/components/common/Button/Button.jsx';

function Product ({ products, OnAdd }) {
    return (
        <div className="containerproduct">
            {products.map((produto) => (
                <div className={`container${produto.categoria}`} key={produto.id} style={produto.estoque == 0 ? {opacity: 0.5} : {opacity: 1}}>
                    <img src={produto.imagem} className='imagemproduto' alt={produto.produto} title={produto.produto} />
                    <h2 style={{textAlign: 'center'}}>{produto.produto}</h2>
                    <p>R$ {(produto.preco).toFixed(2)}</p>
                    <p>Categoria: <b id={produto.categoria}>{produto.categoria}</b></p>
                    {produto.estoque == 0 ? <p style={{color: 'red'}}>Produto indisponível</p> : <p style={{color: 'green'}}>{produto.estoque} disponíveis</p>}
                    {produto.estoque == 0 ? <Button title='Adicionar ao carrinho' classe='unavailable'/> : <Button title='Adicionar ao carrinho' funcao={() => OnAdd(produto)}/>}
                </div>
            ))}
        </div>
    )
}

export default Product;