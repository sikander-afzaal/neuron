const About = () => {
  return (
    <section id="about" className="bg-primary py-14 lg:py-24 wrapper">
      <div className="contain justify-start items-center flex-col gap-6 sm:gap-10">
        <h3 className="title text-white">About Us</h3>
        <div className="flex justify-start items-start w-full flex-col gap-3 sm:gap-6">
          <p className="text-sm sm:text-base font-medium text-white">
            Neuron is the most powerful financial AI. Backed by billion of
            parameters, proprietary 
            <br />
            training datasets and micromodels, Neuron comes pre trained to
            answer any question you have about finance. 
          </p>
          <p className="text-sm sm:text-base font-medium text-white">
            Neuron is the most powerful financial AI. Backed by We’ve built
            Neuron to be fully customizable - we understand that your secret
            sauce needs to be a secret. Our on-premise micromodel can be hosted
            on your server and create a walled garden with your confidential
            business and customer data.  
          </p>
          <p className="text-lg sm:text-xl xl:text-[20px] font-bold text-white">
            Think of Neuron as your 24/7 MBA in Finance - that you can hire and
            train for your specific use case.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
