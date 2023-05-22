import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Work from "./components/Work";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Nav />
      <Header />
      <Banner />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
