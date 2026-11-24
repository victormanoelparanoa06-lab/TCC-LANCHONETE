// Libs
import { useState } from 'react';

// Components
import Header from './components/layout/Header/Header.jsx';
import Banner from './components/cards/Banner/Banner.jsx';
import Footer from './components/layout/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';

function App () {
    const [claro, setClaro] = useState(false);

    return (
        <div className={claro ? 'appclaro' : 'appescuro'}>
            <Header 
                id='header'
                claro={claro}
                setClaro={setClaro}
            />

            <main>
                <section id='inicio'>
                    <Banner
                        claro={claro}
                    />
                </section>

                <Home
                    claro={claro}
                />
            </main>

            <Footer
                claro={claro}
            />
        </div>
    )
}

export default App;