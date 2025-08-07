import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  return (
    <>
      {/*...::: Hero Section Start :::... */}
      <section id="section-hero">
        <div className="relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-colorLinenRuffle pb-20 pt-28 lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24 lg:pt-32 xl:pt-40 xxl:pb-[133px] xxl:pt-[195px]">
          <div className="global-container">
            <div className="mb-14 flex flex-col items-center text-center lg:mb-20">
              <h1 className="jos slide-from-bottom mb-6 max-w-[510px] lg:max-w-[768px] xl:max-w-[1076px]">
                Realize your AI vision
              </h1>
              <p className="jos slide-from-bottom mb-11 max-w-[700px] text-lg font-semibold sm:text-xl xl:max-w-[980px]">
                At Nameless Collective we co-create ideas with you to simplify
                AI hype and automate routine. Our super power is a bespoke
                solution created for you, with Human + AI at its core.
              </p>
              <div
                className="jos flex flex-wrap justify-center gap-6"
                data-jos_animation="fade"
              >
                <Link
                  target="_blank"
                  to="https://cal.com/thisnameless/15m"
                  className="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                >
                  Book a meeting
                </Link>
      {/* <Link
                  onClick={() =>
                    document
                      .getElementById("special_contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="button rounded-[50px] border-2 border-black bg-transparent py-4 text-black after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                >
                  Speak to our AI EA
                </Link> */}
              </div>
            </div>
            {/* <div className="my-10 h-[1px] w-full bg-[#DBD6CF] lg:my-16 xl:my-20"></div> */}
          </div>
          <div className="orange-gradient-1 absolute -right-[150px] top-[370px] -z-[1] h-[500px] w-[500px] animate-spin rounded-[500px]"></div>

          <div className="orange-gradient-2 absolute right-[57px] top-[620px] -z-[1] h-[450px] w-[450px] animate-spin rounded-[450px]"></div>
        </div>
      </section>
      {/*...::: Hero Section End :::... */}
    </>
  );
};

export default Hero;
