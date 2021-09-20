import './GetTouch.css';

function GetTouch() {

    return (
        <div className="container">
            <div className="maintext slide-parent">
                <div className="title-section">Why Choose MyKitten to buy cats online?</div>
                <div class="slider">

                    <div class="slides">
                        <div id="slide-1">
                            <iframe
                                src={`https://www.youtube.com/embed/Hmhmj142-lw`}
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypeted-media'
                                allowFullScreen
                                className="iframevideo1"
                            ></iframe>
                        </div>
                        <div id="slide-2">
                        <iframe
                                src={`https://www.youtube.com/embed/_ZwEvxNox8o`}
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypeted-media'
                                allowFullScreen
                                className="iframevideo1"
                            ></iframe>
                        </div>
                        <div id="slide-3">
                        <iframe
                                src={`https://www.youtube.com/embed/1FN9reJpkPQ`}
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypeted-media'
                                allowFullScreen
                                className="iframevideo1"
                            ></iframe>
                        </div>
                       
                    </div>

                </div>
                <div>
                    <ul class="bullet-items">
                        <li>100% Cage Free Cattery for kittens for sale </li>
                        <li>Raise Super – Friendly Kittens and Cats</li>
                        <li>Variety of Cats Available Followed By Natural Breeding</li>
                        <li>Cats Are Fully Vaccinated and De-wormed</li>
                        <li>Provide Healthy and Registered Vet Certified Cats</li>
                        <li>Online Order and Home Delivery All Over India</li>
                        <li>100% Assured Hostel and Boarding Facilities</li>
                        <li>Experienced Staff With Trained Practical Knowledge</li>
                        <li>Provide Proper Training To Buyers To Understand Cat’s Requirements and Behaviours</li>
                    </ul>
                </div>
            </div>
            <div className="mainvideo">
                <div className="title-section">Get In Touch With Us</div>
                <form class="ui form inputform">
                    <div class="field">
                        <label>Name</label>
                        <input type="text" name="first-name" placeholder="Name" />
                    </div>
                    <div class="field">
                        <label>Email</label>
                        <input type="email" name="last-name" placeholder="Email" />
                    </div>
                    <div class="field">
                        <label>Phone Number</label>
                        <input type="number" name="last-name" placeholder="Phone number" />
                    </div>
                    <div class="field">
                        <label>Message</label>
                        <textarea rows="2"></textarea>
                    </div>

                    <button class="ui button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );

}

export default GetTouch;