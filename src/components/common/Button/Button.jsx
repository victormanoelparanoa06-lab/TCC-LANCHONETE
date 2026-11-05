import './Button.css';

function Button ({ title, funcao, classe }) {
    return (
        <button onClick={funcao} className={classe}>{title}</button>
    )
}

export default Button;