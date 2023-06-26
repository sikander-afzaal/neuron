const Footer = () => {
  return (
    <footer className="wrapper bg-footer pt-14 mt-auto">
      <div className="contain justify-start items-start flex-col gap-10 lg:gap-20 ">
        <div className="flex justify-between w-full gap-10 lg:gap-4 lg:flex-row flex-col items-start">
          <img src="/logo.png" className="object-contain w-[205px]" alt="" />
          <div className="flex justify-start items-start sm:flex-row flex-col gap-10 md:gap-20">
            {/* <div className="flex justify-start items-start flex-col gap-5">
              <h4 className="font-semibold font-roboto text-[#FAFAFA] capitalize text-2xl mb-1 ">
                Quick Links
              </h4>
              <a
                href="#"
                className="text-white capitalize font-medium text-base"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white capitalize font-medium text-base"
              >
                About us
              </a>
              <a
                href="#"
                className="text-white capitalize font-medium text-base"
              >
                Blog
              </a>
              <a href="#" className="text-white  font-medium text-base">
                FAQ
              </a>
              <a
                href="#"
                className="text-white capitalize font-medium text-base"
              >
                Services
              </a>
            </div>
            <div className="flex justify-start items-start flex-col gap-5">
              <h4 className="font-semibold font-roboto text-[#FAFAFA] capitalize text-2xl mb-1 ">
                Services
              </h4>
              <a
                href="#"
                className="text-white capitalize font-medium text-base"
              >
                Wish List
              </a>
              <a
                href="#"
                className="text-white capitalize font-medium text-base"
              >
                Login
              </a>
              <a
                href="#"
                className="text-white capitalize font-medium text-base"
              >
                Submit a Request
              </a>
              <a href="#" className="text-white  font-medium text-base">
                Appointment
              </a>
              <a
                href="#"
                className="text-white capitalize font-medium text-base"
              >
                Promotional Offers
              </a>
            </div> */}
            <div className="flex justify-start items-start flex-col gap-5">
              <h4 className="font-semibold font-roboto text-[#FAFAFA] capitalize text-2xl mb-1 ">
                Contract
              </h4>
              <a
                href="#"
                className="text-white capitalize font-medium flex justify-start items-center gap-3 text-base"
              >
                <img src="/pin.png" className="object-contain w-6" alt="" />
                82 Telok Ayer
              </a>
              {/* <a
                href="tel:+11 2 3456 7890"
                className="text-white capitalize font-medium flex justify-start items-center gap-3 text-base"
              >
                <img src="/phone.png" className="object-contain w-6" alt="" />
                +11 2 3456 7890
              </a> */}
              <a
                href="mailto:hello@pints.app"
                className="text-white  font-medium flex justify-start items-center gap-3 text-base"
              >
                <img src="/mail.png" className="object-contain w-6" alt="" />
                hello@pints.app
              </a>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-between items-center gap-4 border-t border-solid border-[#D2D2D2] pt-4 pb-6 w-full">
          <p className="text-white font-roboto text-sm font-normal">
            © Copyright neuron 2023 All Right Reserved.
          </p>
          <div className="flex justify-start items-center gap-5">
            <a
              href="#"
              target="blank"
              className="text-white font-roboto text-sm font-normal"
            >
              Terms Of Use
            </a>
            <div className="h-4 w-[1px] bg-white"></div>
            <a
              href="#"
              target="blank"
              className="text-white font-roboto text-sm font-normal"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
