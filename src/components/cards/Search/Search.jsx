// Libs
import { useState } from "react";

// Css
import './Search.css';

// Components
import Button from '@/components/common/Button/Button.jsx';
import Close from '@/assets/images/icons/close.png';
import CloseLight from '@/assets/images/icons/closelight.png';

// Images
import SearchIconLight from '@/assets/images/icons/searchlight.png';
import SearchIcon from '@/assets/images/icons/search.png';

function Search ({ products, OnAdd, claro }) {
    // Pesquisar
    const [busca, setBusca] = useState('');

    const resultado = products.filter((p) => 
        p.produto.toLowerCase().includes(busca.toLowerCase()) || p.categoria.toLowerCase().includes(busca.toLowerCase())
    );

    function Clear () {
        setBusca('');
    }

    return (
        <div className="pesquisadiv">
            <div className="containerpesquisa">
                <img src={claro ? SearchIconLight : SearchIcon} alt="Ícone de pesquisa" title="Ícone de pesquisa" className="searchicon"/>
                <input
                    type="text"
                    className={claro ? 'pesquisaclaro' : 'pesquisaescuro'}
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    placeholder="Pesquisar..."
                />
                {busca && <img src={claro ? CloseLight : Close} alt="Ícone de fechar" title="Ícone de fechar" onClick={Clear} className="closeicon"/>}
            </div>

            <div className="resultados">
                {busca !== '' && resultado.map((produto) => (
                    <div className={claro ? `container${produto.categoria}Claro` : `container${produto.categoria}Escuro`} key={produto.id} style={produto.estoque == 0 ? {opacity: 0.5} : {opacity: 1}}>
                        <img src={produto.imagem ?? produto.imagem} className='imagemproduto' alt={produto.imagem ? produto.produto : 'Produto sem imagem'} title={produto.produto} />
                        <h2 style={{textAlign: 'center'}}>{produto.produto}</h2>
                        <p>R$ {produto.preco.toFixed(2).replace(".", ",")}</p>
                        <p>Categoria: <b id={produto.categoria}>{produto.categoria}</b></p>
                        {produto.estoque == 0 ? <p style={{color: 'red'}}>Produto indisponível</p> : <p style={{color: 'green'}}>{produto.estoque} disponíveis</p>}
                        {produto.estoque == 0 ? <Button title='ADICIONAR AO CARRINHO' classe='unavailable'/> : <Button title='ADICIONAR AO CARRINHO' funcao={() => OnAdd(produto)} classe='button'/>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search;