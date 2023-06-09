import './product-list.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function ProductList() {



    return (
        
        <div className="product-container">
            <div className="type-1">
                <img src="/public/Imgs/piggy-bank.png" alt="" />
                <h3 className='title'>
                    Bảo hiểm Tiết kiệm
                </h3>
                <br />
                <p className="content">Tạo dựng nền tảng tài chính, xây đắp cuộc sống sung túc cho bạn và gia đình. Truyền thụ tinh hoa cho thế hệ mai sau</p>
                <br />
                <a className="product-btn" href="#">
                    <button>Tìm hiểu thêm<FontAwesomeIcon icon={faArrowRight} /></button>
                </a>
            </div>
            <div className="type-1">
                <img src="/public/Imgs/healthcare-icon.png" alt="" />
                <h3 className='title'>
                    Bảo hiểm Sức khỏe
                </h3>
                <br />
                <p className="content">Giải pháp bảo vệ toàn diện, giúp bạn đảm bảo dự phòng tài chính cần thiết trước những rủi ro bệnh tật
                    </p>
                <br />
                <a className="product-btn" href="#">
                    <button>Tìm hiểu thêm<FontAwesomeIcon icon={faArrowRight} /></button>
                </a>
            </div>
            <div className="type-1">
                <img src="/Imgs/old.png" alt="" />
                <h3 className='title'>
                    Giải pháp hưu trí
                </h3>
                <br />
                <p className="content">Bảo hiểm nhân thọ uy tín Sun Life Việt Nam cung cấp giải pháp hưu trí đa dạng cho doanh nghiệp </p>
                <br />
                <a className="product-btn" href="#">
                    <button>Tìm hiểu thêm<FontAwesomeIcon icon={faArrowRight} /></button>
                </a>
            </div>
        </div>
    )
}

export default ProductList