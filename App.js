import About from "./assets/components/About";
import Contact1 from "./assets/components/Contact1";
import Home from "./assets/components/Home";
import NavBar from "./assets/components/NavBar";
import Portfolio from "./assets/components/Portfolio";

function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <About/>
      <Portfolio/>
      <Contact1/>
      <socialLinks />
    </div>

  );
}

export default App;
