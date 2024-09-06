const Card = (data:any) => {


  return (
    <>
    <h3>{data.title}</h3>
    <img src={data.image} alt={data.title} />
    <p>{data.description}</p>
    </>
  );
}

export default Card;