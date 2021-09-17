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

            <div className="logomaindiv">
                <div className="logocontainer">
                    <img className="logoMain" src="https://d1575n23nv8eys.cloudfront.net/wp-content/uploads/2019/04/04200723/My-kittens-1.png" alt="" />
                </div>
                <div className="menucontainer">

                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
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
                            <li><a href="#">Testimonials</a>
                            </li>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Join us as a Breeder</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div class="heroimagediv">
                <img class="heroimage" src="https://d1575n23nv8eys.cloudfront.net/wp-content/uploads/2019/10/29113617/happy_customers_cmp1jpg.jpg" />
            </div>

            <h2 class="herotitle">Meet Our Happy Kitten Parents Community</h2>

            <div className="videocontainer">

                <div className='video-responsive'>
                    <iframe
                        src={`https://www.youtube.com/embed/_ZwEvxNox8o`}
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypeted-media'
                        allowFullScreen
                    ></iframe>
                </div>

                <div className='video-responsive'>
                    <iframe
                        src={`https://www.youtube.com/embed/7D8E45ue3AU`}
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypeted-media'
                        allowFullScreen
                    ></iframe>
                </div>

            </div>

            <div className="videocontainer">

                <div className='video-responsive'>
                    <iframe
                        src={`https://www.youtube.com/embed/vOhZ0fT9PqQ`}
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypeted-media'
                        allowFullScreen
                    ></iframe>
                </div>

                <div className='video-responsive'>
                    <iframe
                        src={`https://www.youtube.com/embed/9CRObcvustA`}
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypeted-media'
                        allowFullScreen
                    ></iframe>
                </div>

            </div>

            <div className="videocontainer">

                <div className='video-responsive'>
                    <iframe
                        src={`https://www.youtube.com/embed/Hmhmj142-lw`}
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypeted-media'
                        allowFullScreen
                    ></iframe>
                </div>

                <div className='video-responsive'>
                    <iframe
                        src={`https://www.youtube.com/embed/vPFmLyRQgw8`}
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypeted-media'
                        allowFullScreen
                    ></iframe>
                </div>

            </div>

            <div className="videocontainer">

                <div className='video-responsive'>
                    <iframe
                        src={`https://www.youtube.com/embed/1FN9reJpkPQ`}
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypeted-media'
                        allowFullScreen
                    ></iframe>
                </div>

                <div className='video-responsive'>
                    <iframe
                        src={`https://www.youtube.com/embed/pCluOhkG1tY`}
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypeted-media'
                        allowFullScreen
                    ></iframe>
                </div>

            </div>

            <div className='testimonialcontainer'>
                <div className="testimonialitem">
                    <div className="imagetitle">
                        <img src="https://mykitten.in/wp-content/plugins/strong-testimonials/templates/default/img/quotes.png" />
                        <div className="titletest"> Jaydeep Mane with Cordelia </div>
                    </div>
                    <div className="contentcontainer">
                        <div className="testimonial-image1">
                            <img src="https://d1575n23nv8eys.cloudfront.net/wp-content/uploads/2019/04/04200732/OLAF-aka-Gabru-living-happily-in-Pune-with-jaydeep-mane-e1556543398683-300x300.png" />
                        </div>
                        <div>
                            Just an update to let you know how Cordelia is doing. We are amazed at how affectionate she is and the way she always wants to be with you. My two other cats are warming up to her, and even run around and play with her on occasion. What an awesome kitten. Thank you mykitten
                        </div>
                    </div>
                </div>
                <div className="testimonialitem">
                    <div className="imagetitle">
                        <img src="https://mykitten.in/wp-content/plugins/strong-testimonials/templates/default/img/quotes.png" />
                        <div className="titletest"> Aishwarya with Loki Mischief </div>
                    </div>

                    <div className="contentcontainer">
                        <div className="testimonial-image">
                            <img src="https://d1575n23nv8eys.cloudfront.net/wp-content/uploads/2019/04/04200747/Living-happily-in-Delhi-with-Aishwarya.-e1556543362923.png" />
                        </div>
                        <div>
                        We couldn’t possibly be happier with Loki! He came home on December 21, 2016 – since that day, my life has felt more complete. He is the sweetest, most mischievous little guy ever; in fact, his registered name is “Loki Mischief”. It’s such a delight to know that any time I have a question, you’re available.
                        </div>
                    </div>


                   
                </div>
                <div className="testimonialitem">
                    <div className="imagetitle">
                        <img src="https://mykitten.in/wp-content/plugins/strong-testimonials/templates/default/img/quotes.png" />
                        <div className="titletest"> Usha Rai with Percy </div>
                    </div>

                    <div className="contentcontainer">
                        <div className="testimonial-image1">
                            <img src="https://d1575n23nv8eys.cloudfront.net/wp-content/uploads/2019/04/04200756/PERCY-living-happily-in-Gurgaon-with-Kavita.-e1556543341533-300x300.png" />
                        </div>
                        <div>
                        I’ve been in love with this breeds since I was very young and when I finally stumbled upon mykitten.in Cattery I was more than willing to take the drive and check it out. It was the best experience I could’ve hoped for and I know if I have any questions in the future they’ll be there to answer them.
                        </div>
                    </div>

                    
                </div>
                <div className="testimonialitem">
                    <div className="imagetitle">
                        <img src="https://mykitten.in/wp-content/plugins/strong-testimonials/templates/default/img/quotes.png" />
                        <div className="titletest"> Ishika Jain with Neptune </div>
                    </div>

                    <div className="contentcontainer">
                        <div className="testimonial-image">
                            <img src="https://d1575n23nv8eys.cloudfront.net/wp-content/uploads/2019/04/04200800/Living-happily-in-Delhi-with-Deep-Prabhu.-e1556543328270.png" />
                        </div>
                        <div>
                        My husband and I have only had our kitty, Neptune, for a couple months and we are completely in love! He is a dog person and I am a cat lady, but since I’m allergic to cats and am not a dog fan we didn’t know if we would end up getting any pets…thankfully we found a kitty from mykitten
                        </div>
                    </div>

                    
                </div>
                <div className="testimonialitem">
                    <div className="imagetitle">
                        <img src="https://mykitten.in/wp-content/plugins/strong-testimonials/templates/default/img/quotes.png" />
                        <div className="titletest"> Arushi with Elizabeth </div>
                    </div>

                    <div className="contentcontainer">
                        <div className="testimonial-image1">
                            <img src="https://d1575n23nv8eys.cloudfront.net/wp-content/uploads/2019/04/04200742/JOY-living-happily-in-Mumbai-with--e1556543372530-300x300.png" />
                        </div>
                        <div>
                        It’s hard to believe that a week has passed since we picked up our sweet little baby, Elizabeth. Our decision to get a second cat from mykitten was right. I can not express my joy enough over our decision to bring one of these precious babies into our home. I promise she will always have so much love care.
                        </div>
                    </div>


                    
                </div>
                <div className="testimonialitem">
                    <div className="imagetitle">
                        <img src="https://mykitten.in/wp-content/plugins/strong-testimonials/templates/default/img/quotes.png" />
                        <div className="titletest"> Ananya with Olaf </div>
                    </div>

                    <div className="contentcontainer">
                        <div className="testimonial-image">
                            <img src="https://d1575n23nv8eys.cloudfront.net/wp-content/uploads/2019/04/04200806/Living-happily-in-Mumbai-with-Priyanka.-e1556543318330-300x300.png" />
                        </div>
                        <div>
                        For six months, we contacted countless so-called breeders. The more we looked into each one, the more concerned I became about the health of those animals. We nearly gave up, until we found mykitten.in Cattery. They invited us to their office to meet all their cats, something we found many breeders won’t do. Thank you so much.
                        </div>
                    </div>

                    
                </div>
                <div className="testimonialitem">
                    <div className="imagetitle">
                        <img src="https://mykitten.in/wp-content/plugins/strong-testimonials/templates/default/img/quotes.png" />
                        <div className="titletest">Geet Bhardwaj with Jack </div>
                    </div>

                    <div className="contentcontainer">
                        <div className="testimonial-image1">
                            <img src="https://d1575n23nv8eys.cloudfront.net/wp-content/uploads/2019/04/04200814/BELLA-living-happily-in-Bareilly-with-Ankit-e1556543159608.png" />
                        </div>
                        <div>
                        I would like to take this opportunity to personally thank you for the positive experience in purchasing a Persian kitten. Your knowledge and understanding of these amazing animals was comforting, in that if I ever had any questions in regards to the breed I would feel confident in your response!!! Thank you,
                    thank you for this experience.
                        </div>
                    </div>

                    </div>
                <div className="testimonialitem">
                    <div className="imagetitle">
                        <img src="https://mykitten.in/wp-content/plugins/strong-testimonials/templates/default/img/quotes.png" />
                        <div className="titletest"> Rakesh Kapoor with Chloe </div>
                    </div>

                    <div className="contentcontainer">
                        <div className="testimonial-image">
                            <img src="https://d1575n23nv8eys.cloudfront.net/wp-content/uploads/2019/04/04200751/Living-happily-in-Ambala-with-Pankaj-Mehta.-e1556543350611-300x300.png" />
                        </div>
                        <div>
                        We want to thank you so so much for shipping our Chloe safely to our home. I trust mykitten 100% with their care, breeding, and personal responsiveness and professionalism. It has been a joy from day one!
                        </div>
                    </div>


                    </div>
                <div className="testimonialitem">
                    <div className="imagetitle">
                        <img src="https://mykitten.in/wp-content/plugins/strong-testimonials/templates/default/img/quotes.png" />
                        <div className="titletest"> Ritika Thakur with Simba </div>
                    </div>

                    <div className="contentcontainer">
                        <div className="testimonial-image1">
                            <img src="https://d1575n23nv8eys.cloudfront.net/wp-content/uploads/2019/04/04200737/ARTHUR-living-happily-in-Mumbai-with-mehek-singh-e1556543384918.png" />
                        </div>
                        <div>
                        I take this opportunity to express my thoughts about what a great experience it has been to add a Persian cat into my life! I contacted mykitten.in from the website and from our first contact they were friendly, professional, and available to answer all of my questions. I have also experienced the warmth and responsiveness from the sales team.
                        </div>
                    </div>


                    </div>
                <div className="testimonialitem">
                    <div className="imagetitle">
                        <img src="https://mykitten.in/wp-content/plugins/strong-testimonials/templates/default/img/quotes.png" />
                        <div className="titletest"> Urvashi Tripathi with Joy </div>
                    </div>

                    <div className="contentcontainer">
                        <div className="testimonial-image">
                            <img src="https://d1575n23nv8eys.cloudfront.net/wp-content/uploads/2019/04/04200810/GARY-living-happily-in-Pune.-e1556543416444.png" />
                        </div>
                        <div>
                        I just wanted to thank you for making my experience with owning my first kitten everything I thought it would be and more. I thank you for answering the million questions that I asked, also for your honesty on your kittens on which one would be suited best for my family. I could not ask for a better kitten.
                        </div>
                    </div>


                    
                </div>
            </div>

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
            <div className="social-icons">

            <div className="footer-icon">
                        <FontAwesomeIcon icon={faCamera} size={70} />
                    </div>
                    <div className="footer-icon">   
                        <FontAwesomeIcon icon={faFacebook} />
                        </div>
                    <div className="footer-icon">   
                        
                    
                        <FontAwesomeIcon icon={faComments} />
                        </div>
                    <div className="footer-icon">   
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

export default TopHeader;