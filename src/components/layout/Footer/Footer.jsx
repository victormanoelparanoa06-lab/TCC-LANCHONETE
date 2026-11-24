import './Footer.css';

function Footer ({ claro }) {
    return (
        <footer className={claro ? 'footerclaro' : 'footerescuro'}>
            <p>TCC Lanchonete - 2026</p>
        </footer>
    )
}

export default Footer;