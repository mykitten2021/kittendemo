
import TopHeader from '../components/TopHeader'
import LogoMenu from '../components/LogoMenu'
import HeroImage from '../components/HeroImage'
import VideoContainer from '../components/VideoContainer'
import UserReview from '../components/UserReview'
import FooterSection from '../components/FooterSection'


function Testimonials(){
    const imageURL = "https://d1575n23nv8eys.cloudfront.net/wp-content/uploads/2019/10/29113617/happy_customers_cmp1jpg.jpg";
return (
    <div>
<TopHeader />
<LogoMenu />
<HeroImage image={imageURL} />
<h2 className="herotitle">Meet Our Happy Kitten Parents Community</h2>
<VideoContainer />
<UserReview />
<FooterSection />
</div>
);
}

export default Testimonials;