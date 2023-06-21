const Price = () => {
  return (
    <section className="wrapper pt-10 pb-14 lg:pb-24">
      <div className="contain justify-start items-center flex-col gap-8 lg:gap-16">
        <div className="flex justify-start items-center flex-col text-center">
          <p className="text-primary font-roboto text-lg uppercase font-normal">
            For DIFFERENT INDUSTRIES{" "}
          </p>
          <h3 className="title text-[#282828]">Pricing</h3>
        </div>
        <div className="flex w-full py-8 sm:py-14 sm:flex-row flex-col lg:py-[100px] px-5 bg-[#E2EFFF] justify-center gap-6 sm:gap-8  items-start">
          <img
            src="/users.png"
            className="w-[60px] sm:w-[80px] object-contain"
            alt=""
          />
          <div className="flex justify-start items-start flex-col gap-6">
            <h3 className="text-2xl sm:text-[30px] lg:text-[40px] leading-[1.4] font-bold text-primary max-w-[666px]">
              Access the knowledge you need, when you need it 
            </h3>
            <p className="text-slateGray text-base sm:text-lg lg:text-2xl font-normal font-roboto leading-[1.67] max-w-[702px]">
              Personalised pricing plans for your organisation - We recognise
              that each organisation is different. Our options are designed to
              be flexible, allowing you to choose the pricing plan that best
              accommodates your team size, content preferences, and more.
            </p>
            <button className="ctaBtn mt-1">Book A Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
