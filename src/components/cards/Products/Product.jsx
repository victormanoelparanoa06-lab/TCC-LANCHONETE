// Css
import './Product.css';

// Components
import Button from '@/components/common/Button/Button.jsx';

function Product ({ products, OnAdd }) {
    return (
        <div className="containerproduct">
            {products.map((produto) => (
                <div className={`container${produto.categoria}`} key={produto.id} style={produto.estoque == 0 ? {opacity: 0.5} : {opacity: 1}}>
                    <img src={produto.imagem ?? produto.imagem} className='imagemproduto' alt={produto.imagem ? produto.produto : 'Produto sem imagem'} title={produto.produto} />
                    <h2 style={{textAlign: 'center'}}>{produto.produto}</h2>
                    <p>R$ {produto.preco.toFixed(2).replace(".", ",")}</p>
                    <p>Categoria: <b id={produto.categoria}>{produto.categoria}</b></p>
                    {produto.estoque == 0 ? <p style={{color: 'red'}}>Produto indisponível</p> : <p style={{color: 'green'}}>{produto.estoque} disponíveis</p>}
                    {produto.estoque == 0 ? <Button title='ADICIONAR AO CARRINHO' classe='unavailable'/> : <Button title='ADICIONAR AO CARRINHO' funcao={() => OnAdd(produto)} classe='button'/>}
                </div>
            ))}
        </div>
    )
}

export default Product;