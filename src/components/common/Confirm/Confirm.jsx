// Libs
import { useState, useEffect } from 'react';

// Css
import './Confirm.css';

// Components
import Button from '@/components/common/Button/Button.jsx';

function Confirm ({ RemCardapio, Cancelar, nomeProduto, setNomeProduto, setDivConfirm, claro }) {

    return (
        <div className={claro ? 'divconfirmclaro' : 'divconfirmescuro'}>
            <h3>Tem certeza que deseja remover o produto?</h3>
                <div className="botoes">
                    <Button
                        title='SIM'
                        classe='button'
                        funcao={() => RemCardapio(nomeProduto, setNomeProduto, setDivConfirm)}
                    />

                    <Button
                        title='NÃO'
                        classe='button'
                        funcao={() => Cancelar('')}
                    />
                </div>
            </div>
    )
}

export default Confirm;