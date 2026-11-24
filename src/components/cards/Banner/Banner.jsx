// Libs
import { useState, useEffect } from 'react';

// Css
import './Banner.css';

// Images
import banner1 from '@/assets/images/banner/banner1.jpeg';
import banner2 from '@/assets/images/banner/banner2.jpeg';

function Banner ({ claro }) {
    // Estado para controlar qual imagem está visível (true = primeira, false = segunda)
    const [showFirst, setShowFirst] = useState(true);

    useEffect(() => {
        // Alterna a imagem a cada 3 segundos (3000ms)
        const interval = setInterval(() => {
        setShowFirst((prev) => !prev);
        }, 4000);

        // Limpa o intervalo quando o componente for desmontado
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={claro ? 'bannerclaro' : 'bannerescuro'}>
            <img 
                src={banner1} 
                alt="Banner" 
                title='Banner'
                className={`fade-image ${showFirst ? 'visible' : 'hidden'}`}
            />

            <img 
                src={banner2} 
                alt="Banner" 
                title='Banner'
                className={`fade-image ${!showFirst ? 'visible' : 'hidden'}`}
            />
        </div>
    )
}

export default Banner;