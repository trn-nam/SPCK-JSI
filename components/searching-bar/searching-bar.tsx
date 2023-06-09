import './searching-bar.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';


function SearchingBar() {
    const name = "Nam"
    return (
        <div className='container'>
            <div className="welcome-text">
                <h1>Xin chào, <span>{name}</span></h1>
            </div>
            <div className="search-bar">
                <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} />
                <input className='search' type="text" placeholder="Tìm kiếm..." />
            </div>
            <div className="person">
                <a href=""><FontAwesomeIcon icon={faBell} size="xl" /></a>
                <a href=""><FontAwesomeIcon icon={faMessage} size="xl" /></a>
                <a href=""><FontAwesomeIcon icon={faRightToBracket} size="xl" /></a>
            </div>


        </div>
    )
}

export default SearchingBar;