import Header from "./components/Header";
import Main from "./components/Main";
import Heading from "./components/Heading";
import "./App.css";
import Aboutus from "./components/Aboutus";
import Best from "./components/Best";
import AboutComp from "./components/AboutCompany";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Heading />
      <Aboutus />
      <Best />
      <AboutComp />
    </div>
  );
}

export default App;
