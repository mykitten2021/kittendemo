import './About.css';
function AboutUs() {
    return (
        <div className="about-container">
            <div className="about-section">
                <div className="about">About Us</div>

                <div >
                    <div className="about-icon-container">
                        <div className="single-element">
                        <div className="circle"></div>
                        <div className="number-heading" >12</div>
                        <div className="text-heading">Years Experience</div>
                        </div>
                        <div className="single-element">
                        <div className="circle"></div>
                        <div className="number-heading" >7864</div>
                        <div className="text-heading">Pets Adopted</div>
                        </div>
                        <div className="single-element">
                        <div className="circle"></div>
                        <div className="number-heading" >32</div>
                        <div className="text-heading">Experts</div>
                        </div>
                    </div>


                </div>



            </div>

        </div>
    );
}

export default AboutUs;