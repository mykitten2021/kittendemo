import './TopHeader.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'


function TopHeader() {
    return (
        <div>
            <div className="top-header-container">
                <div className="top-header-item1">Welcome to MyKitten</div>
                <div className="top-header-item2 itemcontainer">
                    <div className="icondiv">
                        <FontAwesomeIcon icon={faCamera} />
                    </div>
                    <div className="icondiv">
                        <FontAwesomeIcon icon={faFacebook} />
                    </div>
                    <div className="icondiv">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="icondiv">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                    </div>
                    <div className="icondiv">
                        <FontAwesomeIcon icon={faComments} />
                    </div>
                    <div className="icondiv">
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>

                </div>
            </div>
            <div className="top-ebook-container">Download Basic Guide PDF Ebook Free</div>         

                  

            

            

        </div>
    );
}

export default TopHeader;