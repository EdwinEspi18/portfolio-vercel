import text from "../img/logos_text.svg";
import linke from "../img/logos_linkedln.svg";
import tel from "../img/logos_telegram.svg";
import hub from "../img/logos_github.svg";

const Contact = () => {
  return (
    <section className='contact' id='contactos'>
      <div className='msg'>
        <img src={text} alt='message' />
        <h2>¿Deseas contactarme?</h2>
        <p>espinaledwin1919@gmail.com</p>
      </div>
      <div className='icons-link'>
        <img src={tel} alt='telegram' />
        <img src={hub} alt='github' />
        <img src={linke} alt='linkeldn' />
      </div>
    </section>
  );
};

export default Contact;
