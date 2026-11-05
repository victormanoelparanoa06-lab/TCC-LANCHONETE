import Product from '@/components/cards/Products/Product.jsx';
import Button from '@/components/common/Button/Button.jsx';
import './Home.css';

function Home () {
    return (
        <div className='home'>
            <Product/>
            {/* <Button title='teste'/> */}
        </div>
    )
}

export default Home;