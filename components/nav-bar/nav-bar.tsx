import "./nav-bar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    return (
        <div className="nav-bar">
            <ul>
                <li>
                    <a href="" className="logo">
                        <img src="/favicon_io/favicon.ico" alt="" />
                        <span className="nav-item">FamCare</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="">
                        <FontAwesomeIcon  icon={faHouse} />
                        <span className="nav-item">Trang chủ</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="">
                        <FontAwesomeIcon icon={faUser} />
                        <span className="nav-item">Cá nhân</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="">
                    <FontAwesomeIcon icon={faNewspaper} />
                        <span className="nav-item">Tin tức</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="">
                    <FontAwesomeIcon icon={faLayerGroup} />
                        <span className="nav-item">Dịch vụ</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="">
                    <FontAwesomeIcon icon={faCircleInfo} />
                        <span className="nav-item">Trợ giúp</span>
                    </a>
                </li>
                <li className="log-in">
                    <a href="">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <span className="nav-item">Đăng nhập</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
