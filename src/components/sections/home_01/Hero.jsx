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
                We are a collection of technologists, designers and strategists.
                At Nameless Collective we co-create ideas with you to simplify
                AI and automate routine. Our super power is Human + AI
                collaboration.
              </p>
              <div
                className="jos flex flex-wrap justify-center gap-6"
                data-jos_animation="fade"
              >
                <Link
                  target="_blank"
                  to="https://cal.com/thisnameless/45m-ideation?month=2025-02&date=2025-02-03"
                  className="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                >
                  Book a meeting
                </Link>
                <Link
                  onClick={() =>
                    document
                      .getElementById("special_contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="button rounded-[50px] border-2 border-black bg-transparent py-4 text-black after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                >
                  Speak to our AI EA
                </Link>
              </div>
            </div>
            {/* <div className="my-10 h-[1px] w-full bg-[#DBD6CF] lg:my-16 xl:my-20"></div> */}
            <div className="jos mx-auto mb-12 max-w-[715px] text-center lg:mb-16">
              <p className="text-lg">Tools we use to rapidly experiment</p>
            </div>
            <div className="jos brand-slider" data-jos_animation="fade">
              <Swiper
                slidesPerView={3}
                spaceBetween={105}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 5,
                  },
                }}
              >
                <SwiperSlide>
                  <img
                    src="assets/logos/anthropic_logo_black.png"
                    alt="brand-1"
                    width="180"
                    height="40"
                    className="max-w-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="assets/logos/aws_logo_black.png"
                    alt="brand-2"
                    width="183"
                    height="40"
                    className="max-w-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="assets/logos/do_logo_black.png"
                    alt="brand-3"
                    width="172"
                    height="40"
                    className="max-w-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="assets/logos/elevenlabs_logo_black.png"
                    alt="brand-4"
                    width="175"
                    height="40"
                    className="max-w-full"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <img
                    src="assets/logos/groq_logo_black.png"
                    alt="brand-1"
                    width="180"
                    height="40"
                    className="max-w-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="assets/logos/openai_logo_black.png"
                    alt="brand-2"
                    width="183"
                    height="40"
                    className="max-w-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="assets/logos/supabase_logo_black.png"
                    alt="brand-3"
                    width="172"
                    height="40"
                    className="max-w-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="assets/logos/twilio_logo_black.png"
                    alt="brand-4"
                    width="175"
                    height="40"
                    className="max-w-full"
                  />
                </SwiperSlide>
                {/* <SwiperSlide>
                  <img
                    src="assets/logos/.png"
                    alt="brand-5"
                    width="168"
                    height="36"
                    className="max-w-full"
                  />
                </SwiperSlide> */}
              </Swiper>
            </div>
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
