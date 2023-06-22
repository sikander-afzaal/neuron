const Features = () => {
  return (
    <section className="wrapper py-14 lg:py-24">
      <div className="contain   justify-start items-start flex-col gap-5 lg:gap-10">
        <div className="flex justify-between lg:flex-row flex-col items-center lg:items-stretch gap-8 w-full">
          <div className=" max-w-[422px] relative lg:mb-0 mb-32">
            <img src="/feature.png" className="w-full object-contain" alt="" />
            <div className="absolute bg-white px-5 py-7 min-w-[250px] max-w-[250px] shadow-heroImg bottom-0 left-1/2 xl:left-0 xl:-translate-x-[20%] xl:translate-y-[20%] -translate-x-1/2 translate-y-1/2 rounded-[10px] flex justify-start items-start  flex-col gap-3 text-left">
              <img
                src="/trophy.png"
                className="w-[70px] object-contain"
                alt=""
              />
              <h6 className="text-[#0D1A3B] font-medium text-lg sm:text-[22px] mt=2">
                Trusted by Standard <br /> Chartered
              </h6>
              <p className="text-slateGray font-roboto text-xl leading-[1] font-normal">
                Analysis
              </p>
            </div>
          </div>
          <div className="flex w-full lg:max-w-[550px] xl:max-w-[646px] justify-start  items-start flex-col gap-5">
            <h3 className="title text-primary leading-[1]">Features</h3>
            <FeatureBox
              img="/search.png"
              title="Filter out the filters. Search Smart. "
              desc="Stop with the filters. Start discovering products by asking questions. Neuron’s natural language and thematic search allows you to narrow down the right stocks, funds, insurance plans or ETFs by asking a question, in the way you always do."
            />
            <FeatureBox
              img="/reciept.png"
              title="Adios Information. Hola Insights! "
              height
              desc={
                <>
                  Neuron helps your clients, advisors and researchers make
                  smarter decisions by untangling the information hidden in the
                  layers of your private datasets. No more Ctrl+F to find an
                  answer. 
                  <br />
                  <br />
                  Ask, “If the US China trade war accelerates, how can it impact
                  my portfolio?” and let Neuron fetch the insights for you.
                </>
              }
            />
          </div>
        </div>
        <div className="flex justify-start items-start flex-col w-full gap-5 lg:mt-32 xl:mt-14">
          <FeatureBox
            img="/user.png"
            title="Custom build"
            desc="Stitch together an asset or product research model that fits your needs. Whether it is comparing funds, plans, stocks or private assets, we work around your needs to deliver the insights in the form you need it."
          />
          <FeatureBox
            img="/arrow-up-left-from-circle.png"
            title="CX at scale "
            desc="Deliver outstanding experience by combining customer data, news cycles and your own analysis - all to power better investment decisions, client proposals and actionable insights. "
          />
          <FeatureBox
            img="/file.png"
            title="No Lies. Only Facts "
            desc="Neuron is a deep-finance model that does not hallucinate. Controlling the datasets, and ensuring only the cleanest and most accurate information is ingested by Neuron, we control the quality of the output. "
          />
          <FeatureBox
            img="/education.png"
            title="More than news  "
            desc="Neuron’s incredibly powerful ‘What’s In It For Me’ tool can analyse news and provide you with pointed insights on how it may affect your financial decisions. "
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

const FeatureBox = ({ img, title, desc, height }) => {
  return (
    <div
      className={`sm:flex-row ${
        height ? "h-full" : ""
      } flex-col flex justify-start items-start gap-4 w-full bg-white shadow-heroImg rounded-[10px] px-5 sm:px-7 py-8 `}
    >
      <img src={img} className="max-w-[31px] object-contain" alt="" />
      <div className="flex justify-start items-start flex-col gap-5">
        <h4 className="text-[#0d193b]  text-[22px] font-medium">{title}</h4>
        <p className="text-slateGray text-base font-normal lg:mt-0 -mt-3">
          {desc}
        </p>
      </div>
    </div>
  );
};
