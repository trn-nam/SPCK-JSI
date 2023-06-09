import './contact.css'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaTelegram } from  'react-icons/fa'


function Contact() {

    return (
        <div className="contact-card">
            <div className="info">
                <img src="/favicon_io/favicon-32x32.png" alt="" className="User-icon" />
                <div className="text">
                <p className="UserName">FamCare</p>
                <p className="Id">Chợ Dừa, Đống Đa, Hà Nội</p>
                </div>
            </div>
            <div className="gg-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.121291734094!2d105.81941376554131!3d21.02297749681351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab708bd3666d%3A0x1afb2db7e56b53fa!2zVGjDoG5oIEPDtG5nLCBDaOG7oyBE4burYSwgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1684052799893!5m2!1svi!2s" width={260} height={250} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="social-media">
                <a className='social-icon' href=""><FaFacebook/></a>
                <a className='social-icon' href=""><FaInstagram/></a>
                <a className='social-icon' href=""><FaTwitter/></a>
                <a className='social-icon' href=""><FaTelegram/></a>
            </div>
        </div>
    )
}
export default Contact