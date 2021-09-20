import './VideoAbout.css'

function VideoAbout() {
    return (
        <div className="container">
            <div className="maintext">
                <div className="title-section">What Makes Mykitten Different from Other Cattery Marketplaces to Buy Cat Online?</div>
                <div className="title-sub">The Cats we are having are not ordinary cats, they are like a Family!!</div>
                <div className="title-p">
                    <p>
                        MyKitten is a non-profitable social business model marketplace that believes to provide forever homes to cats. This is the only place where you can seek cats for sale or buy kittens for sale online in India from respected and informed registered cat breeders.
                    </p>
                    <p>
                        The breeders strictly adhere to their natural breeding and our volunteers are the well-trained experts who provide 24*7 on call support to our clients. We don’t believe in the cage system. MyKitten is 100% cage-free cattery marketplace. Mykitten volunteers screen every member of our breeder community for quality and make their practices transparent.
                    </p>
                    <p>
                        We are specialist in providing a variety of breeds like Persian Cats, Himalayan Cats, Siamese Cats, Mainecoon cats, Ragdoll Cats, Exptic Shorthair cats , Royal Bengal cats, etc and to buy cats for sale online. Though, our strong suit lies in selling or buying Cats online. Contact us if you really want to check our adorable Cats for Sales in Delhi NCR, Mumbai, Bangalore, Pune, etc.
                    </p>
                </div>
                
            </div>
            <div className="mainvideo">
                <div className="videobox">
                    <iframe

                        src={`https://www.youtube.com/embed/Hmhmj142-lw`}
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypeted-media'
                        allowFullScreen
                        className="iframevideo"
                    ></iframe>
                </div>
                <div className="video-footer">
                    India’s only platform for connecting pet cat lovers with responsible catteries nationwide. Buy a cat of your dreams from good cat breeders across India.
                </div>
                <div className="contact-row">
                    {/* <div className="contact-button">
                       <a class="contact-button" href="#"> Contact Us </a>
                        </div> */}
                        <div class="footer-button"><a href="http://breeder.mykitten.in/" class="footer-button">Contact Us<span class="sc_button_hover_icon"></span></a></div>
                    <div >
                        <img className="rating-image" src="https://d1575n23nv8eys.cloudfront.net/wp-content/uploads/2019/10/23121330/StarGoogle.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoAbout