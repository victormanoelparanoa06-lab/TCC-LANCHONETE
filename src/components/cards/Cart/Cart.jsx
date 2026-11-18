// Css
import './Cart.css';

// Components
import Button from '@/components/common/Button/Button.jsx';

// Images
import Close from '@/assets/images/icons/close.png';

function Cart ({cart, total, OnRemove, OnBuy, OnUpdate}) {
    return (
        <div className="cart">
            {cart.map((produto) => (
                <div className="product" key={produto.id}>
                    <img src={produto.imagem} alt="" className="productimg" />
                    <div className="infs">
                        <h2>{produto.produto}</h2>
                        <p>R$ {(produto.preco * produto.quantidade).toFixed(2)}</p>
                        <div>
                            <label htmlFor="">Quantidade: </label>
                            <input 
                                type="number" 
                                value={produto.quantidade} 
                                max={produto.estoque} 
                                min={1} 
                                onChange={(e) => OnUpdate(produto, e.target.value)}
                            />
                        </div>
                    </div>
                    <img src={Close} alt="Remover produto" title="Remover produto" className="close" onClick={() => OnRemove(produto)}/>
                </div>
            ))}
            <p>Total: R$ {total}</p>
            <Button title="Comprar" funcao={() => OnBuy(cart)}/>
        </div>
    )
}

export default Cart;