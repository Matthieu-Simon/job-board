import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const title = "The Job Board";

  return (
    <>
      <Header title={title} className="header" />
      <Jobs className="main"/>
      <Footer className="footer" />
    </>
  )
}

export default App
