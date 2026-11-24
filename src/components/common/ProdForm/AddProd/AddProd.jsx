// Libs
import { useState } from 'react';

// Css
import './AddProd.css';

// Components
import Button from '@/components/common/Button/Button.jsx';

function AddProd ({ AddCardapio, Cancelar, claro }) {
    const [nomeProduto, setNomeProduto] = useState('');
    const [categoriaProduto, setCategoriaProduto] = useState('');
    const [precoProduto, setPrecoProduto] = useState('');
    const [estoqueProduto, setEstoqueProduto] = useState('');
    const [imagemProduto, setImagemProduto] = useState('');

    if (precoProduto < 0 || estoqueProduto < 0) {
        alert('O preço e o estoque do produto não podem ser negativos!');
        setPrecoProduto('');
        setEstoqueProduto('');
    }   

    function carregarImagem (e) {
        const arquivo = e.target.files[0];

        if (arquivo) {
            setImagemProduto(URL.createObjectURL(arquivo));
        }
    }

    return (
        <form action="" className='form'>
            <h2 className={claro ? 'tituloclaro' : 'tituloescuro'}>Adicionar Produto</h2>

            <input 
                type="text" 
                placeholder='Digite o nome do produto' 
                value={nomeProduto}
                onChange={(e) => setNomeProduto(e.target.value)}
                required
            />

            <select name="" id="" onChange={(e) => setCategoriaProduto(e.target.value)}>
                <option defaultValue={'Selecione a categoria do produto'} hidden>Selecione a categoria do produto</option>
                <option value="Lanches" id='Lanches'>Lanches</option>
                <option value="Frituras" id='Frituras'>Frituras</option>
                <option value="Massas" id='Massas'>Massas</option>
                <option value="Doces" id='Doces'>Doces</option>
                <option value="Frutas" id='Frutas'>Frutas</option>
                <option value="Bebidas" id='Bebidas'>Bebidas</option>
            </select>

            <input 
                type="number" 
                placeholder='Digite o preço do produto' 
                value={precoProduto}
                min={0}
                onChange={(e) => setPrecoProduto(e.target.value)}
                required
            />

            <input 
                type="number" 
                placeholder='Digite o estoque do produto' 
                value={estoqueProduto}
                min={0}
                onChange={(e) => setEstoqueProduto(e.target.value)}
                required
            />

            <p>IMAGEM</p>

            <input 
                type="text" 
                placeholder='Digite a url da imagem do produto' 
                value={imagemProduto}
                onChange={(e) => setImagemProduto(e.target.value)}
            />

            <p>OU</p>

            <label htmlFor="arquivo" className='label'>IMPORTE UMA FOTO</label>
            <input 
                type="file"
                accept='image/*'
                onChange={carregarImagem}
                name='arquivo'
                id='arquivo'
                style={{display: 'none'}}
            />

            <div className="botoes">
                <Button title='ADICIONAR' classe='button' funcao={() => AddCardapio(nomeProduto, categoriaProduto, precoProduto, estoqueProduto, imagemProduto)}/>
                <Button title='CANCELAR' classe='button' funcao={() => Cancelar('')}/>
            </div>
        </form>
    )
}

export default AddProd;