import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <header className="wrapper sticky z-50 bg-header top-0">
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="bg-black bg-opacity-60 w-full h-full z-[90] fixed top-0 left-0 md:hidden block"
        ></div>
      )}
      <div className="contain justify-between items-center gap-5 h-[80px] md:h-[110px]">
        <img
          src="/logo.png"
          className="object-contain w-[150px] md:w-[205px]"
          alt=""
        />
        <nav
          className={`${
            headerToggle ? "right-0" : "-right-full"
          } fixed top-0 md:static  flex justify-start md:justify-center items-center sm:items-start md:items-center gap-8 w-full h-full sm:max-w-[450px] bg-sectionBg overflow-y-auto px-[3rem] pt-[6rem] pb-[3rem] transition-all md:flex-row flex-col duration-700 z-[100] md:w-auto md:h-auto md:bg-transparent md:overflow-visible md:p-0`}
        >
          <Link
            activeClass="underline-offset-4  underline"
            to="hero"
            spy={true}
            smooth={true}
            activeStyle={{ color: "#1647F3" }}
            offset={-110}
            duration={500}
            className=" text-base font-semibold cursor-pointer text-slateGray"
            onClick={() => setHeaderToggle(false)}
          >
            Home
          </Link>
          <Link
            activeClass=" underline-offset-4  underline"
            to="deployment"
            spy={true}
            smooth={true}
            activeStyle={{ color: "#1647F3" }}
            offset={-110}
            duration={500}
            className=" text-base font-semibold cursor-pointer text-slateGray"
            onClick={() => setHeaderToggle(false)}
          >
            Deployment Options
          </Link>

          <button className="ctaBtn md:hidden block">Get Started</button>
        </nav>
        <button className="ctaBtn md:block hidden">Get Started</button>
        <button
          onClick={() => setHeaderToggle((prev) => !prev)}
          className="md:hidden block relative z-[102] text-primary"
        >
          {headerToggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
