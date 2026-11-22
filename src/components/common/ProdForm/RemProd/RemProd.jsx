// Libs
import { useState } from 'react';

// Components
import Button from '@/components/common/Button/Button.jsx';

function RemProd ({ funcao, setAcesso }) {
    const [produto, setProduto] = useState('');

    return (
        <form action="">
            <h2>Remover Produto</h2>

            <input 
                type="text"
                placeholder="Digite o nome do produto que será removido"
                value={produto}
                onChange={(e) => setProduto(e.target.value)}
            />

            <div className="botoes">
                <Button title='REMOVER' classe='button' funcao={() => funcao(produto)}/>
                <Button title='CANCELAR' classe='button' funcao={() => setAcesso(false)}/>
            </div>
        </form>
    )
}

export default RemProd;