import logo from "../assets/logo.png";
import rockOriginal from "../assets/rock1.png";
import rockRope from "../assets/rock2.png";

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero-logo" src={logo} alt="Redmond" />

      <h1 className="hero-title">
        YOU PICKED A <br />
        <span className="redmond">REDMOND</span>
        <span className="original">ORIGINAL</span>
      </h1>

      <div className="hero-content">
        <div className="hero-images">
          <img src={rockOriginal} alt="Redmond Rock Original" />
          <img src={rockRope} alt="Redmond Rock on a Rope" />
        </div>

        <div className="hero-text">
          <p>
            Utah-mined Redmond Rock® is a favorite for a reason! Whether you go
            with our classic rock salt or one with a handy rope, your horse will
            love its natural flavor, and you'll love the health benefits. Get
            tips and learn what to expect as you introduce the Rock to your horse.
          </p>

          <button>GET THE ROCK</button>
        </div>
      </div>
    </section>
  );
}