import './UserReview.css';
import Rating from 'react-rating';
import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
// var Rating = require('react-rating');
const ratingChanged = (newRating) => {
    console.log(newRating);
};

function UserReview() {
    return (
        <div>
            <div className='testimonialcontainer'>
                <div className="testimonialitem">
                    <div className="imagetitle">
                        <img src="https://mykitten.in/wp-content/plugins/strong-testimonials/templates/default/img/quotes.png" />
                        <div className="titletest"> Jaydeep Mane with Cordelia </div>
                        <div className="rating-text"> March 25, 2021</div>
                        <div class="review-star">
                            <ReactStars count={5} value={5} onChange={ratingChanged}
                            size={24} activeColor="#ffd700" />
                        </div>
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
                        <div className="rating-text"> September 14, 2021</div>
                        <div class="review-star">
                            <ReactStars count={5} value={5} onChange={ratingChanged}
                            size={24} activeColor="#ffd700" />
                        </div>
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
                        <div className="rating-text"> July 20, 2021</div>
                        <div class="review-star">
                            <ReactStars count={5} value={5} onChange={ratingChanged}
                            size={24} activeColor="#ffd700" />
                        </div>
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
                        <div className="rating-text"> April 04, 2021</div>
                        <div class="review-star">
                            <ReactStars count={5} value={5} onChange={ratingChanged}
                            size={24} activeColor="#ffd700" />
                        </div>
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
                        <div className="rating-text"> January 11, 2021</div>
                        <div class="review-star">
                            <ReactStars count={5} value={5} onChange={ratingChanged}
                            size={24} activeColor="#ffd700" />
                        </div>
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
                        <div className="rating-text"> December 28, 2020</div>
                        <div class="review-star">
                            <ReactStars count={5} value={5} onChange={ratingChanged}
                            size={24} activeColor="#ffd700" />
                        </div>
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
                        <div className="rating-text"> August 08, 2021</div>
                        <div class="review-star">
                            <ReactStars count={5} value={5} onChange={ratingChanged}
                            size={24} activeColor="#ffd700" />
                        </div>
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
                        <div className="rating-text"> October 01, 2020</div>
                        <div class="review-star">
                            <ReactStars count={5} value={4} onChange={ratingChanged}
                            size={24} activeColor="#ffd700" />
                        </div>
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
                        <div className="rating-text"> June 30, 2021</div>
                        <div class="review-star">
                            <ReactStars count={5} value={4} onChange={ratingChanged}
                            size={24} activeColor="#ffd700" />
                        </div>
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
                        <div className="rating-text"> November 15, 2020</div>
                        <div class="review-star">
                            <ReactStars count={5} value={5} onChange={ratingChanged}
                            size={24} activeColor="#ffd700" />
                        </div>
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
        </div>
    );
}

export default UserReview;