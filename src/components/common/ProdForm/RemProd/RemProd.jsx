// Libs
import { useState } from 'react';

// Components
import Confirm from '@/components/common/Confirm/Confirm.jsx';
import Button from '@/components/common/Button/Button.jsx';

function RemProd ({ RemCardapio, Cancelar, claro }) {
    const [produto, setProduto] = useState('');

    // const [confirm, setConfirm] = useState(false);
    const [divconfirm, setDivConfirm] = useState(false);

    function DivConfirmacao (e, nomeProduto) {
        e.preventDefault();
        if (nomeProduto == '') {
            alert('O campo deve ser preenchido com o nome do produto.')
            return;
        } else {
            setDivConfirm(true);
        }
    }

    return (
        <form action="">
            <h2 className={claro ? 'tituloclaro' : 'tituloescuro'}>Remover Produto</h2>

            <input 
                type="text"
                placeholder="Digite o nome do produto que será removido"
                value={produto}
                onChange={(e) => setProduto(e.target.value)}
                required
            />

            <div className="botoes">
                <Button title='REMOVER' classe='button' funcao={(e) => DivConfirmacao(e, produto)}/>
                <Button title='CANCELAR' classe='button' funcao={() => Cancelar('')}/>
            </div>

            {divconfirm && 
                <Confirm
                    RemCardapio={RemCardapio}
                    Cancelar={Cancelar}
                    nomeProduto={produto}
                    setNomeProduto={setProduto}
                    setDivConfirm={setDivConfirm}
                    claro={claro}
                />
            }
        </form>
    )
}

export default RemProd;