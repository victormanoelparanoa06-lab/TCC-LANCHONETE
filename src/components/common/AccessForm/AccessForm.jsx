// Css
import './AccessForm.css';

// Components
import Button from '@/components/common/Button/Button.jsx';

function AccessForm ({ onValidate , setValueNome, valueNome, setValueSenha, valueSenha }) {
    return (
        <div className="containerform">
            <form action="" className='form'>
                <input 
                    type="text" 
                    placeholder='Digite seu nome' 
                    value={valueNome}
                    onChange={(e) => setValueNome(e.target.value)}
                    id='nome'
                    required
                />

                <input 
                    type="password" 
                    placeholder='Digite a senha'
                    value={valueSenha}
                    onChange={(e) => setValueSenha(e.target.value)}
                    id='senha'
                    required
                />

                <Button title='ENTRAR' classe='button' funcao={onValidate}/>
            </form> 
        </div>
    )
}

export default AccessForm;