import './HeroImage.css';
function HeroImage(props) {
    return (
        <div>
            <div className="heroimagediv">
                <img className="heroimage" src={props.image} />
            </div>
           
        </div>
    );
}

export default HeroImage;