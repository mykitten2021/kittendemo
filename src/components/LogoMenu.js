import './LogoMenu.css';
function LogoMenu(){
    return (
        <div className="logomaindiv">
                <div className="logocontainer">
                    <img className="logoMain" src="https://d1575n23nv8eys.cloudfront.net/wp-content/uploads/2019/04/04200723/My-kittens-1.png" alt="" />
                </div>
                <div className="menucontainer">

                    <nav>
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="#">Breeds</a>
                                <ul>
                                    <li><a href="#">Persian</a></li>
                                    <li><a href="#">Maine Coon</a></li>
                                    <li><a href="#">Ragdoll Himalayan</a></li>
                                    <li><a href="#">Siamese</a></li>
                                    <li><a href="#">Exotic Shorthair</a></li>
                                    <li><a href="#">Blue Eyes Cat</a></li>
                                    <li><a href="#">Bengal Cats</a></li>
                                </ul>
                            </li>
                            <li><a href="/testimonials">Testimonials</a>
                            </li>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Join us as a Breeder</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
    );
}

export default LogoMenu;