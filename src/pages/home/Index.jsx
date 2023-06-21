import About from "./About";
import Deployment from "./Deployment";
import Features from "./Features";
import Hero from "./Hero";
import Price from "./Price";
import Solutions from "./Solutions";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Solutions />
      <Price />
      <Deployment />
      <About />
    </>
  );
};

export default Home;
