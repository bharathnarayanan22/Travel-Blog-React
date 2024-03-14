import Style from "./Home.module.css";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <div className={Style.parent_homecomp}>
        <h1>The Travel Book</h1>
        <h4>
          Jobs fill your pockets, adventures fill your soul. <br />
          Remember that happiness is a way of travel, not a destination.
        </h4>
      </div>

      <div>
        <p
          style={{
            color: "#6d6969ff",
            width: "50%",
            textAlign: "center",
            margin: "20px auto",
          }}
        >
          Traveling is a brutality. It forces you to trust strangers and to lose
          sight of all that familiar comfort of home and friends. You are
          constantly off balance. Nothing is yours except the essential things:
          air, sleep, dreams, sea, the sky – all things tending towards the
          eternal or what we imagine of it
        </p>
        <div className={Style.cards}>
          <div className={Style.card}>
            <a href="/Blogs">
              <img src="src/images/c1.jpg" alt="Travel Image"></img>
            </a>
            <h1 >Wonders</h1>
          </div>
          <div className={Style.card}>
            <a href="/Blogs">
              <img src="src/images/c3.jpg" alt="Travel Image"></img>
            </a>
            <h1 >Temples</h1>
          </div>
          <div className={Style.card}>
            <a href="/Blogs">
              <img src="src/images/c5.jpg" alt="Travel Image"></img>
            </a>
            <h1 >Islands</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
