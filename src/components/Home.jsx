import "../App.css";
import Card from "../Card.jsx";
import Images from "../Image";

function Home() {
  return (
    <>
      <Images />
      <div className="box">
        <div className="box-1">
          <div className="inbox-1">
            <div className="topinbox-1">
              <button className="inbtn">Like</button>
              <button className="inbtn">Share</button>
              <button className="inbtn">Comment</button>
              <button className="inbtn">Subscribe</button>
            </div>
            <div className="downinbox">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="inbox-2">
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
