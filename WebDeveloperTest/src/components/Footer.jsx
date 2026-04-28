import instagram from "../assets/IG.png";
import facebook from "../assets/FB.png";
import youtube from "../assets/YT.png";

export default function Footer() {
  return (
    <footer>
      <section className="thanks">
        <h3>THANK YOU FOR <br /> CHOOSING REDMOND ROCK!</h3>
        <p className="thanks-text">
          We’re excited to get your journey toward a healthier <br /> and happier horse.
          Don’t hesitate to reach out if you have<br /> other questions or concerns.
        </p>
      </section>

      <section className="footer-dark">
        <h2>PIXEL</h2>
        <p>MORE OF WHAT MATTERS</p>

        <h4>FOLLOW US</h4>

        <div className="socials">
          <img src={instagram} alt="Instagram" />
          <img src={facebook} alt="Facebook" />
          <img src={youtube} alt="YouTube" />
        </div>
      </section>
    </footer>
  );
}