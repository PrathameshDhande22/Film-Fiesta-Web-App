import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers";
import { Header } from "./components";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routers />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
