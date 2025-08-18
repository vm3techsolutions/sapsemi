
import ApplicationsIndustries from "./home/ApplicationsIndustries";
import CenterIMG from "./home/CenterIMG";
import FeaturesBenefits from "./home/FeaturesBenefits";
import Gallery from "./home/Gallery";
import GetYourQuoteForm from "./home/GetYourQuoteForm";
import HomeBanner from "./home/HomeBanner";
import Quality from "./home/Quality";
import RelatedProducts from "./home/RelatedProducts";
import SapPartCom from "./home/SapPartCom";
import TechnicalDownloads from "./home/TechnicalDownloads";
import Testimonials from "./home/Testimonials";

export default function Home() {
  return (
    <div>

      <HomeBanner/>
      <SapPartCom/>
      <FeaturesBenefits/>
      <ApplicationsIndustries/>
      <Quality/>
      <CenterIMG/>
      <TechnicalDownloads/>
      <Gallery/>
      <RelatedProducts/>
      <Testimonials/>
      <GetYourQuoteForm/>
      
    </div>
  );
}
