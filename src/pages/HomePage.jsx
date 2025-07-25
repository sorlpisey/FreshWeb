import BannerAbout from "../components/BannerAbout";
import FeaturedServices from "../components/Featured";
import HeroVideo from "../components/Hero";
import LatestBlogSection from "../components/LatestBlog";
import LocationSection from "../components/Locations";
import MembershipBanner from "../components/MembershipBanner";
import OfferCard from "../components/OfferCard";
// import FeatureList from "../components/Featured";

const HomePage = () => {
  return (
    <div className=" min-h-screen  bg-[#f8f8f2]">
      <HeroVideo/>
      <FeaturedServices/>
      
      <LocationSection/>
      <MembershipBanner/>
      <BannerAbout/>
      
      <OfferCard/>
      
       {/* <LocationSection/> */}
       <div className="md:px-30 px-5"><LatestBlogSection/></div>
       
    </div>
  );
}
export default HomePage;