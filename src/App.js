import { AppContext } from "./context/context";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavModal from "./components/NavModal";
import { useContext } from "react";

function App() {
  const { modalIsOpen } = useContext(AppContext);
  return (
    <>
      {modalIsOpen && <NavModal />}
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
