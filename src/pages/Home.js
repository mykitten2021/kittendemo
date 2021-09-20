import TopHeader from '../components/TopHeader'
import LogoMenu from '../components/LogoMenu'
import HeroImage from '../components/HeroImage'
import VideoContainer from '../components/VideoContainer'
import UserReview from '../components/UserReview'
import FooterSection from '../components/FooterSection'
import AboutUs from '../components/AboutUs'
import VideoAbout from '../components/VideoAbout'
import CenterText from '../components/CenterText'
import CatBreeds from '../components/CatBreeds'
import GetTouch from '../components/GetTouch'
import HowitWorks from '../components/HowitWorks'
import HomeReview from '../components/HomeReview'
import StarterPackage from '../components/StarterPackage'
import Faq from '../components/Faq';

function Home() {
    const imageUrl="https://d1575n23nv8eys.cloudfront.net/wp-content/uploads/2019/10/29114736/Indias_most_trusted_cattery.jpg";
    const imageUrl1="https://d1575n23nv8eys.cloudfront.net/wp-content/uploads/2019/10/29113617/happy_customers_cmp1jpg.jpg";
    const imageUrl2="https://d1575n23nv8eys.cloudfront.net/wp-content/uploads/2019/11/01172802/open_your_heart.png";
    const imageUrl3="https://d1575n23nv8eys.cloudfront.net/wp-content/uploads/2019/11/04153822/fully_vaccinated_and_dewormed_cats_cropped.png";
    return (
        <div>
            <TopHeader />
            <LogoMenu />
            <HeroImage image={imageUrl}/>
            <VideoAbout />     
              
            <HeroImage image={imageUrl1}/>
            <CenterText />
            <GetTouch  />
            <AboutUs/> 
            <CatBreeds  />
            <HeroImage image={imageUrl2}/>    
            <HomeReview  />
            <HeroImage image={imageUrl3}/>       
            <HowitWorks /> 
            <StarterPackage />
            <Faq />
            <FooterSection />

        </div>

    );
}

export default Home;