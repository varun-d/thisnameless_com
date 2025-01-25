import { Link } from "react-router-dom";

const Footer_01 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="relative z-[1] -mt-[70px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-colorLinenRuffle lg:rounded-tl-[50px] lg:rounded-tr-[50px]">
      {/* Footer Top */}
      <div className="py-[60px] xl:pb-[120px] xl:pt-[130px]">
        {/* Footer Text Slider */}
        <div className="footer-text-slider flex w-full items-center gap-x-[30px] whitespace-nowrap">
          {/* Footer Slide Item  */}
          <img
            src="assets/img/th-1/footer-text-slider-icon.svg"
            alt="footer-text-slider-icon"
            width={60}
            height={60}
            className="h-10 w-10 lg:h-[60px] lg:w-[60px]"
          />
          <div className="block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]">
            Human + AI
          </div>
          {/* Footer Slide Item  */}
          {/* Footer Slide Item  */}
          <img
            src="assets/img/th-1/footer-text-slider-icon.svg"
            alt="footer-text-slider-icon"
            width={60}
            height={60}
            className="h-10 w-10 lg:h-[60px] lg:w-[60px]"
          />
          <div className="block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]">
            Vertical Agents
          </div>
          {/* Footer Slide Item  */}
          {/* Footer Slide Item  */}
          <img
            src="assets/img/th-1/footer-text-slider-icon.svg"
            alt="footer-text-slider-icon"
            width={60}
            height={60}
            className="h-10 w-10 lg:h-[60px] lg:w-[60px]"
          />
          <div className="block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]">
            Secure, Transparent, Personalized
          </div>
          {/* Footer Slide Item  */}
        </div>
      </div>
      {/* Footer Text Slider */}
      {/* Footer Top */}
      <div className="global-container">
        <div className="h-[1px] w-full bg-[#DBD6CF]" />
        {/* Footer Center */}
        <div className="lg grid grid-cols-1 gap-10 py-[60px] md:grid-cols-[1fr_auto_auto] xl:grid-cols-[1fr_auto_auto_1fr] xl:gap-20 xl:py-[100px]">
          {/* Footer Widget */}
          <div className="flex flex-col gap-y-6">
            <Link to="/" className="inline-block">
              <img
                src="assets/img/main_logo_mark.svg"
                alt="logo"
                width={96}
                height={24}
              />
            </Link>
            <p>
              Our mission is to guide your through the puzzling maze of
              Generative AI. We build Human + AI solutions on voice, chat and
              interfaces of the future. We find your AI north star.
            </p>
            <p>
              <Link to="/">www.thisnameless.com</Link>
            </p>
            <p>Speak with Kelly at +1 (289) 778 3324</p>
          </div>
          {/* Footer Widget */}
          {/* Footer Widget */}
          <div className="flex flex-col gap-y-6">
            {/* Footer Title */}
            <h4 className="text-[21px] font-semibold capitalize text-black">
              Find out more
            </h4>
            {/* Footer Title */}
            {/* Footer Navbar */}
            <ul className="flex flex-col gap-y-[10px] capitalize">
              <li>
                <Link
                  to="/"
                  className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                >
                  About Us (coming soon)
                </Link>
              </li>
              <li>
                {/* <Link
                  to="/services"
                  className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                >
                  Services
                </Link> */}
              </li>
              <li></li>
              <li>
                <Link
                  to="/contact"
                  className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Footer Widget */}
        </div>
        {/* Footer Center */}
        <div className="h-[1px] w-full bg-[#DBD6CF]" />
        {/* Footer Bottom */}
        <div className="py-9 text-center">
          <p>
            © Copyright {new Date().getFullYear()}, All Rights Reserved by
            Nameless Collective (thisnameless.com)
          </p>
        </div>
        {/* Footer Bottom */}
      </div>
      {/* Footer Background Shape 1  */}
      <div className="orange-gradient-2 absolute -top-[290px] right-[90px] -z-[1] h-[406px] w-[406px] -rotate-[58deg] rounded-[406px]"></div>
      {/* Footer Background Shape 2  */}
      <div className="orange-gradient-1 absolute -right-[200px] -top-[205px] -z-[1] h-[451px] w-[451px] -rotate-[58deg] rounded-[451px]"></div>
    </footer>
  );
};

export default Footer_01;
