import { useContext } from "react";
import { AppContext } from "../context/context";
import menu from "../img/logos_menu.svg";
import quit from "../img/logos_quit.svg";

const Header = () => {
  const { cla, openModal } = useContext(AppContext);
  const handleHamburguer = (e) => {
    openModal();
  };
  return (
    <header className='header'>
      <h1>PortFolio</h1>
      <div className='hamburguer' onClick={handleHamburguer}>
        <img src={cla ? quit : menu} alt='Hamburguer' />
      </div>
    </header>
  );
};

export default Header;
