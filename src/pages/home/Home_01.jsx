import Hero from "../../components/sections/home_01/Hero";
import Service from "../../components/sections/home_01/service/Service";
import Content_01 from "../../components/sections/home_01/Content_01";
import Content_02 from "../../components/sections/home_01/Content_02";
import FunFact from "../../components/sections/home_01/FunFact";
import Pricing from "../../components/sections/home_01/Pricing";
import Testimonial_Section from "../../components/sections/home_01/Testimonial_Section";
import Faq_Section from "../../components/sections/inner-pages/service/Faq_Section";

const Home_01 = () => {
  return (
    <main className="main-wrapper relative overflow-hidden">
      <Hero />
      <Service />
      <Content_02 />
      <Content_01 />
      {/* Call to action with data points, from actual research */}
      {/* <FunFact /> */}

      {/* <Pricing /> */}

      {/* FAQ */}
      <Faq_Section />
      {/* <Testimonial_Section /> */}

      {/* Body Background Shape 1 */}
      <div className="orange-gradient-1 absolute -left-[15px] top-[61%] -z-[1] h-[400px] w-[400px] -rotate-[-9.022deg] rounded-[400px]"></div>

      {/* Body Background Shape 2 */}
      <div className="orange-gradient-2 absolute -left-[100px] top-[64%] -z-[1] h-[360px] w-[360px] -rotate-[-9.022deg] rounded-[360px]"></div>
    </main>
  );
};

export default Home_01;
