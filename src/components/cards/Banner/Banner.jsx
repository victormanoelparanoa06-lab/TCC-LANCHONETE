// Css
import './Banner.css';

// Images
import imgBanner from '@/assets/images/banner/Banner.png';

function Banner () {
    return (
        <div className="banner">
            <img src={imgBanner} alt="Banner" title='Banner'/>
        </div>
    )
}

export default Banner;