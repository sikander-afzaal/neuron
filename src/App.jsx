import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/home/Index";

const App = () => {
  return (
    <div className="wrapper min-h-screen">
      <Header />
      <main className="wrapper">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
