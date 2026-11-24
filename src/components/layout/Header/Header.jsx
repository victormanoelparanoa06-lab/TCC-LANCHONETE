// Css
import './Header.css';

// Images
import LightMode from '@/assets/images/icons/light_mode.png';
import DarkMode from '@/assets/images/icons/dark_mode.png';

function Header ({ claro, setClaro }) {

    return (
        <header className={claro ? 'headerclaro' : 'headerescuro'}>
            <a href="#inicio" title='Voltar ao início'>HOME</a>
            <h1>🍔 LANCHONETE 🥤</h1>
            <img src={claro == true ? LightMode : DarkMode} alt="Mudar tema" title='Mudar tema' onClick={() => setClaro(!claro)} />
        </header>
    )
}

export default Header;