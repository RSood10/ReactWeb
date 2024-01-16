import "./App.css";

function Card() {
  return (
    <div className="cardbox">
      <div className="innerbox">
        <img src="vite.svg" alt="Image" />
        <h3>Welcome Card</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur,
          dolores.
        </p>
        <button className="watch">Watch</button>
      </div>
    </div>
  );
}
export default Card;
