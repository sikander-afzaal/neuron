const Hero = () => {
  return (
    <section
      id="hero"
      className="wrapper bg-lightGray pt-10 pb-[150px]  sm:pt-16 lg:py-[150px]"
    >
      <div className="contain lg:flex-row flex-col justify-between items-center lg:items-stretch gap-10">
        <div className="flex justify-start items-start flex-col gap-5 sm:gap-10 w-full lg:max-w-[550px] xl:max-w-[630px]">
          <h2 className="text-primary font-bold text-[30px] sm:text-[45px] xl:text-[60px] leading-[1.17]">
            Unlocking Financial Potential through Tailored Intelligence
          </h2>
          <div className="flex justify-start items-start flex-col gap-2 sm:gap-5">
            <p className="text-slateGray text-base font-normal leading-[1.62]">
              Purpose built for the financial industry, Neuron is a fully
              customisable AI that is trained to answer any questions you have
              about finance. 
            </p>
            <p className="text-slateGray text-base font-normal leading-[1.62]">
              Leverage the base model and train it with your data. Develop a
              resident prodigy to enhance the capabilities of your platforms.{" "}
            </p>
            <p className="text-slateGray text-base font-normal leading-[1.62]">
              We combine financial theory, news, data science, and the latest in
              AI to help you solve the most complex questions around your
              business.{" "}
            </p>
          </div>
          <button className="ctaBtn">Book A Demo</button>
        </div>
        <div className=" max-w-[510px] relative ">
          <img src="/hero.png" className="w-full h-full object-cover" alt="" />
          {/* <div className="absolute bg-white px-5 py-8 shadow-heroImg bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex justify-start items-center w-max flex-col gap-5 text-center">
            <h6 className="text-slateGray font-normal text-lg sm:text-xl font-roboto">
              Build your dream product
            </h6>
            <p className="text-primary font-roboto text-[28px] sm:text-[34px] leading-[1] font-semibold">
              80+ <br />{" "}
              <span className="text-slateGray text-lg sm:text-xl font-medium">
                Services Available
              </span>
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
