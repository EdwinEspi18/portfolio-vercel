import dev from "../img/dev.svg";
import react from "../img/logos_react.svg";
import Acerca from "./Acerca";
import Contact from "./Contact";
import Tecnologies from "./Tecnologies";

const Main = () => {
  return (
    <main className='main'>
      <div className='init' id='inicio'>
        <div className='paragraphs'>
          <p>Hola, Soy Edwin A. Espinal Taveras Junior Front-End</p>
          <div className='container-react'>
            <img src={react} alt='logo React' />
          </div>
        </div>
        <div className='img-container'>
          <img src={dev} alt='DEV' />
        </div>
      </div>
      <Tecnologies />
      <Acerca />
      <Contact />
    </main>
  );
};

export default Main;
