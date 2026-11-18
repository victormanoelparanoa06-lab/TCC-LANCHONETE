import Header from './components/layout/Header/Header.jsx';
import Banner from './components/cards/Banner/Banner.jsx';
import Footer from './components/layout/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';

function App () {
    return (
        <div className='app'>
            <Header/>

            <main>
                <section>
                    <Banner/>
                </section>

                <Home/>
            </main>

            <Footer/>
        </div>
    )
}

export default App;