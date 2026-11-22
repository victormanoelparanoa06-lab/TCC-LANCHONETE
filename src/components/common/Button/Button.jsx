import './Button.css';

function Button ({ title, funcao, classe, tipo }) {
    return (
        <button onClick={funcao} className={classe} type={tipo}>{title}</button>
    )
}

export default Button;