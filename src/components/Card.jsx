const Card = ({ images }) => {
  return (
    <article className='card'>
      <img src={images} alt='logos' />
    </article>
  );
};

export default Card;
