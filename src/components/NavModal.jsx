import { useContext } from "react";
import Modal from "react-modal";
import { AppContext } from "../context/context";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "70%",
    background: "$main",
  },
};
Modal.setAppElement("#root");

const NavBar = () => {
  const { modalIsOpen, closeModal } = useContext(AppContext);
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Example Modal'
    >
      <ul className='menu-list'>
        <li className='menu-list__item'>
          <a href='#inicio'>Inicio</a>
        </li>
        <li className='menu-list__item'>
          <a href='#tecnologias'>Tecnologias</a>
        </li>
        <li className='menu-list__item'>
          <a href='#acerca'>Acerca</a>
        </li>
        <li className='menu-list__item'>
          <a href='#proyectos'>Proyectos</a>
        </li>
        <li className='menu-list__item'>
          <a href='#contactos'>Contactos</a>
        </li>
      </ul>
    </Modal>
  );
};

export default NavBar;
