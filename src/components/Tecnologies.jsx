import { css, figma, react, fire, sass, redux, git, html, js } from "../img";
import Card from "./Card";

const Tecnologies = () => {
  const im = [react, figma, fire, sass, redux, git, html, js, css];
  return (
    <section className='tecno' id='tecnologias'>
      <h2>Tecnologias que manejo</h2>
      <div className='img-container'>
        {im.map((item, i) => (
          <Card images={item} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Tecnologies;
