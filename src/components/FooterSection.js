import './FooterSection.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
function FooterSection(){
    return (
        <div>
            <div className="footercontainer">
            <img className="footer-image" src="https://d1575n23nv8eys.cloudfront.net/wp-content/uploads/2020/01/08140750/footer_img_2.png" alt=""  />
            <div className="footer-text">Are you a breeder ?</div>
            <div className="footer-smalltext"> It takes only a few clicks to connect with genuine pet lovers.</div>
            <div className="textandbutton"> 
            <div className="footer-smalltext">Register Now!</div>
            <div className="footer-button">
            <a href="http://breeder.mykitten.in/" className="footer-button">Join as a Breeder<span class="sc_button_hover_icon"></span></a>
            </div>            
            </div>
            <div className="social-icons ">

            <div className="footer-icon white-social">
                        <FontAwesomeIcon icon={faCamera} size={70} />
                    </div>
                    <div className="footer-icon white-social">   
                        <FontAwesomeIcon icon={faFacebook} />
                        </div>
                    <div className="footer-icon white-social">   
                        
                    
                        <FontAwesomeIcon icon={faComments} />
                        </div>
                    <div className="footer-icon white-social">   
                        <FontAwesomeIcon icon={faYoutube} />
                        </div>
                     


            </div>
            </div>

            <div className="last-footer">
                <div className="footer-item1">MyKitten © 2021 All Rights Reserved </div>
                <div className="footer-item2">
                    <div className="footer-link1"><a href="#">Terms & Conditions | </a></div>
                    <div className="footer-link2"><a href="#">Privacy Policy</a></div>
                </div>
            </div>
            </div>
    );
}

export default FooterSection;