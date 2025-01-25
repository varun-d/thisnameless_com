const Content_02 = () => {
  return (
    <>
      {/*...::: Content Section Start_2 :::... */}
      <section id="content-section-2">
        {/* Section Spacer */}
        <div className="pb-20 xl:pb-[150px]">
          {/* Section Container */}
          <div className="global-container">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28 xxl:gap-32">
              {/* Content Left Block */}
              <div
                className="jos order-2 overflow-hidden rounded-md"
                data-jos_animation="fade-left"
              >
                <img
                  src="assets/img/content_image2.png"
                  alt="content-image-2"
                  width="526"
                  height="450"
                  className="h-auto w-full"
                />
              </div>
              {/* Content Left Block */}
              {/* Content Right Block */}
              <div className="jos order-1" data-jos_animation="fade-right">
                {/* Section Content Block */}
                <div className="mb-6">
                  <h2>It's not about the technology</h2>
                </div>
                {/* Section Content Block */}
                <div className="text-lg leading-[1.4] lg:text-[21px]">
                  <p className="mb-7 last:mb-0">
                    We focus on solving problems.
                  </p>
                  <p className="mb-7 last:mb-0">
                    A restaurant received 200+ calls a day asking about the
                    menu, location, opening hours. Our Voice Agent helped reduce
                    this to 10 calls a day. Humans aren't meant to answer the
                    same calls, again and again.
                  </p>
                  <ul className="flex flex-col gap-y-5 font-semibold text-xl leading-tight tracking-tighter text-black lg:mt-12 lg:text-[28px]">
                    <li className="flex items-start gap-x-3">
                      <div className="mt-[2.5px] h-[30px] w-[30px]">
                        <img
                          src="assets/img/th-1/check-circle.svg"
                          alt="check-circle"
                          width="30"
                          height="30"
                          className="h-full w-full"
                        />
                      </div>
                      40% reduction in call handovers{" "}
                      {/* <span className="text-orange-400">We make it fun.</span> */}
                    </li>
                    <li className="flex items-start gap-x-3">
                      <div className="mt-[2.5px] h-[30px] w-[30px]">
                        <img
                          src="assets/img/th-1/check-circle.svg"
                          alt="check-circle"
                          width="30"
                          height="30"
                          className="h-full w-full"
                        />
                      </div>
                      20% cost reduction{" "}
                      {/* <span className="text-orange-400">We educate.</span> */}
                    </li>
                    <li className="flex items-start gap-x-3">
                      <div className="mt-[2.5px] h-[30px] w-[30px]">
                        <img
                          src="assets/img/th-1/check-circle.svg"
                          alt="check-circle"
                          width="30"
                          height="30"
                          className="h-full w-full"
                        />
                      </div>
                      80% cheaper than human agents{" "}
                      {/* <span className="text-orange-400">We bring hope.</span> */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* Content Right Block */}
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>
      {/*...::: Content Section End :::... */}
    </>
  );
};

export default Content_02;
