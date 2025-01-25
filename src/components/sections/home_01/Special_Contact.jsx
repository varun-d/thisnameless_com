import { Link } from "react-router-dom";

const SpecialContact = () => {
  return (
    <div className="bg-black text-white">
      {/* Section Spacer */}
      <div className="py-20 xl:py-[130px]">
        {/* Footer Top */}
        <div>
          {/* Section Container */}
          <div className="global-container">
            {/* Footer Content */}
            <div className="grid-col-1 grid items-center gap-10 md:grid-cols-2">
              {/* Section Content Block */}
              <div>
                <h1 className="text-white">Call Kelly,</h1>
              </div>
              {/* Section Content Block */}
              <div className="jos flex flex-col gap-10 md:gap-[50px]">
                <p className="text-lg font-semibold leading-[1.33] md:text-xl lg:text-2xl">
                  Kelly is our AI Executive Assistant. Built on top of open
                  source models, Kelly's super power is robust long term memory
                  and domain knowledge. She's still learning, so please be
                  patient with her.
                </p>
              </div>
            </div>
            {/* Footer Content */}
            {/* Footer Contact */}
            <div className="mt-11 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-[10px] bg-[#121212] px-11 py-5 text-center font-raleway font-bold leading-[1.33] text-[#F6F6EB] transition-all duration-300 hover:bg-[#381FD1] xl:text-2xl xxl:text-3xl">
                <a href="tel:+12897783324">+1 (289) 778 3324</a>
              </div>
              <div className="rounded-[10px] bg-[#121212] px-11 py-5 text-center font-raleway font-bold leading-[1.33] text-[#F6F6EB] transition-all duration-300 hover:bg-[#381FD1] xl:text-2xl xxl:text-3xl">
                <a href="https://wa.me/12897783324?text=Hey%20Kelly!">
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Footer Contact */}
          </div>
          {/* Section Container */}
        </div>
        {/* Footer Top */}
      </div>
      {/* Section Spacer */}
    </div>
  );
};

export default SpecialContact;
