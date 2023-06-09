import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './slider.css'
function Slider() {

    return (
        <>
        <div className="carousel-container">
            <Carousel
            autoPlay={true}
            infiniteLoop = {true}
            >
                <div className="">
                    <img src="/public/Imgs/80fb3061045855.5a6942f085e5a.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/public/Imgs/83784d61045855.5a6942f085a07.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/public/Imgs/2e67bce533aeae9c89ca87f5c94d8560.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            
        </div>
        <div className="description-1">
            <h1>Bảo hiểm nhân thọ Sun Life giúp Khách hàng đạt được an toàn tài chính trọn đời và tận hưởng cuộc sống khỏe mạnh hơn</h1>
        </div>
        </>
    );
}

export default Slider