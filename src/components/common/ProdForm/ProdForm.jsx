// Libs
import { useState } from 'react';

// Css
import './ProdForm.css';

// Components
import AddProd from '@/components/common/ProdForm/AddProd/AddProd.jsx';
import RemProd from '@/components/common/ProdForm/RemProd/RemProd.jsx';
import Button from '@/components/common/Button/Button.jsx';

function ProdForm ({ products, setProducts, resetar, setAcesso, claro }) {   
    // Cálculos
    let soma = 0;
    for (const c of products) {
        soma = soma + c.preco
    }

    let qtdprodutos = products.length;
    let mediaprodutos = products.length > 0 ? (soma/products.length).toFixed(2).replace(".", ",") : 0

    // Const para alterar o que fazer com o produto
    const [escolha, setEscolha] = useState('');  

    // Adicionar produto ao Cardápio
    function AddCardapio (nomeProduto, categoriaProduto, precoProduto, estoqueProduto, imagemProduto) {

        if (nomeProduto == '' || categoriaProduto == '' || precoProduto == '' || estoqueProduto == '') {
            alert('Todos os campos devem ser preenchidos!');
            return;
        }

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

    // Confirmação e remover produto do cardápio
    function RemCardapio (nomeProduto, setNomeProduto, setDivConfirm) {
        setDivConfirm(false);

        if (products.some((p) => p.produto == nomeProduto)) {
            setProducts(products.filter((p) => p.produto !== nomeProduto));
        } else {
            alert('Produto não encontrado!');
            setNomeProduto('');
            return;
        }

        setNomeProduto('');
        setEscolha('');

        alert('Produto removido com sucesso!');
    }

    return (
        <div className='containerprodform'>
            <h2 className={claro ? 'tituloclaro' : 'tituloescuro'}>O que deseja fazer?</h2>

            <div style={{textAlign: 'center'}}>
                <p className={claro ? 'tituloclaro' : 'tituloescuro'}>Quantidade de produtos: <b>{qtdprodutos}</b></p>
                <p className={claro ? 'tituloclaro' : 'tituloescuro'}>Média do preço dos produtos: <b>R$ {mediaprodutos}</b></p>
            </div>

            <div className="botoes">
                <Button title='ADICIONAR PRODUTO' classe='button' funcao={() => setEscolha('Adicionar')}/>
                <Button title='REMOVER PRODUTO' classe='button' funcao={() => setEscolha('Remover')}/>
                <Button title='RESETAR' classe='button' funcao={() => resetar(setEscolha(''))}/>
            </div>

            <div className="escolha">
                {escolha === 'Adicionar' && (
                    <AddProd
                        AddCardapio={AddCardapio}
                        Cancelar={setEscolha} 
                        claro={claro}
                    />
                )}

                {escolha === 'Remover' && (
                    <RemProd
                        RemCardapio={RemCardapio}    
                        Cancelar={setEscolha}  
                        claro={claro}    
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