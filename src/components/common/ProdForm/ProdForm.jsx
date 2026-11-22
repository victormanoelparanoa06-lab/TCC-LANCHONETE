// Libs
import { useEffect, useState } from 'react';

// Css
import './ProdForm.css';

// Components
import AddProd from '@/components/common/ProdForm/AddProd/AddProd.jsx';
import RemProd from '@/components/common/ProdForm/RemProd/RemProd.jsx';
import Button from '@/components/common/Button/Button.jsx';

function ProdForm ({ products, setProducts, resetar, setAcesso }) {   
    // Const para alterar o que fazer com o produto
    const [escolha, setEscolha] = useState('');  

    // Adicionar produto ao Cardápio
    function AddCardapio (nomeProduto, categoriaProduto, precoProduto, estoqueProduto, imagemProduto) {

        if (imagemProduto == '') {
            imagemProduto = null
        }

        const newProduct = {
            id: Date.now(),
            produto: nomeProduto,
            categoria: categoriaProduto,
            preco: Number(precoProduto),
            estoque: Number(estoqueProduto),
            imagem: imagemProduto
        }

        setProducts((produtosAnteriores) =>
            [...produtosAnteriores, newProduct]
        );

        alert('Produto adicionado com sucesso!');
    }

    function RemCardapio (nomeProduto) {
        setProducts(products.filter((p) => p.produto !== nomeProduto));

        alert('Produto removido com sucesso!');
    }

    return (
        <div className='containerprodform'>
            <h2>O que deseja fazer?</h2>

            <div className="botoes">
                <Button title='ADICIONAR PRODUTO' classe='button' funcao={() => setEscolha('Adicionar')}/>
                <Button title='REMOVER PRODUTO' classe='button' funcao={() => setEscolha('Remover')}/>
                <Button title='RESETAR' classe='button' funcao={() => resetar(setEscolha(''))}/>
            </div>

            <div className="escolha">
                {escolha === 'Adicionar' && (
                    <AddProd
                        funcao={AddCardapio}
                        setAcesso={setAcesso}
                    />
                )}

                {escolha === 'Remover' && (
                    <RemProd
                        funcao={RemCardapio}
                        setAcesso={setAcesso}
                    />
                )}
            </div>

             
            
            <div className='botoes'>
                <Button title='SAIR' classe='button' funcao={() => setAcesso(false)}/>
            </div> 
        </div>
    )
}

export default ProdForm;