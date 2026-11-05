import './Button.css';

function Button ({ title, funcao }) {
    return (
        <button onClick={funcao}>{title}</button>
    )
}

export default Button;