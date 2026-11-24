// Css
import './Product.css';

// Components
import Button from '@/components/common/Button/Button.jsx';

function Product ({ filtroProduto, OnAdd, claro }) {

    return (
        <div className="containerproduct">
            {filtroProduto.map((produto) => (
                <div className={claro ? `container${produto.categoria}Claro` : `container${produto.categoria}Escuro`} key={produto.id} style={produto.estoque == 0 ? {opacity: 0.5} : {opacity: 1}}>
                    <img src={produto.imagem ?? produto.imagem} className='imagemproduto' alt={produto.imagem ? produto.produto : 'Produto sem imagem'} title={produto.produto} />
                    <h2 style={{textAlign: 'center'}}>{produto.produto}</h2>
                    {produto.preco == 0 ? <p style={{color: 'green'}}>Grátis!</p> : <p>R$ {produto.preco.toFixed(2).replace(".", ",")}</p>}
                    <p>Categoria: <b id={produto.categoria}>{produto.categoria}</b></p>
                    {produto.estoque == 0 ? <p style={{color: 'red'}}>Produto indisponível</p> : <p style={{color: 'green', fontWeight: 700}}>{produto.estoque} disponíveis</p>}
                    {produto.estoque == 0 ? <Button title='ADICIONAR AO CARRINHO' classe='unavailable'/> : <a href="#cart" style={{textDecoration: 'none'}}><Button title='ADICIONAR AO CARRINHO' funcao={() => OnAdd(produto)} classe='button'/></a>}
                </div>
            ))}
        </div>
    )
}

export default Product;