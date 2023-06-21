const Deployment = () => {
  return (
    <section id="deployment" className="wrapper bg-sectionBg py-14 lg:py-24">
      <div className="contain justify-start flex-col items-center gap-8 md:gap-16">
        <div className="flex justify-start items-center flex-col text-center">
          <h3 className="title text-primary">Deployment Options</h3>
          <p className="text-slateGray text-base font-normal">
            This is how our products works{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[662px] gap-8">
          <OptionBox
            img="/premise.png"
            title="On Premise"
            desc="Neuron offers an on-premise deployment option, providing you the advantage of heightened data security and privacy. With our solution, your critical data never leaves your infrastructure, ensuring its safety and your compliance with strict industry regulations. Our AI offers you direct control over your system’s performance, security and data governance. "
          />
          <OptionBox
            img="/cloud.png"
            title="Cloud Solutions"
            desc="Neuron supports on-cloud deployment, offering an elastic and scalable environment to power your AI operations. With our solution, you can enjoy scalability, paying only for what you use while avoiding substantial upfront infrastructure costs. This approach provides quick deployment and easy access from anywhere. Benefit from our on-cloud AI’s streamlined updates and maintenance while you focus on what you do best."
          />
        </div>
      </div>
    </section>
  );
};

export default Deployment;

const OptionBox = ({ img, title, desc }) => {
  return (
    <div className="flex shadow-deploy justify-start items-center flex-col gap-3 sm:gap-5 bg-white w-full rounded-[5px] py-10 px-6">
      <img src={img} className="object-contain w-[68px]" alt="" />
      <h5 className="text-[#0D1A3B] text-[19px] text-center font-medium">
        {title}
      </h5>
      <p className="text-slateGray opacity-80 leading-[1.62] text-base font-normal sm:mt-1">
        {desc}
      </p>
    </div>
  );
};
