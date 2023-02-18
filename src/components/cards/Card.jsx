const Card = (props) => {
  console.log("ne geliyo", props.data);
  return (
    <div className="cards">
      <div className="title">
        <h2>{props.data.title}</h2>
      </div>

      <img src={props.data.image} alt="" />
      <div className="card-over">
        <p>{props.data.desc}</p>
      </div>
    </div>
  );
};
export default Card;
