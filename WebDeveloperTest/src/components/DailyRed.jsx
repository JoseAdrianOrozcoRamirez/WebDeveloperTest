import dailyRed from '../assets/AI_Image 2.png';

export default function DailyRed() {
  return (
    <section className="daily">
      
      <div className="daily-image-wrapper">
        <img
          className="daily-img"
          src={dailyRed}
          alt="Daily Red product"
        />
      </div>

      <div className="daily-content">
        <p className="daily-small">PAIR YOUR ROCK WITH</p>

        <h2>DAILY RED</h2>

        <p className="daily-text">
          A free-choice Redmond Rock and Daily Red loose salt are the perfect
          pair for optimal hydration and mineral balance. Daily Red ensures a
          full dose of daily essential salt, while Redmond Rock lets your horse
          self-regulate additional minerals as needed.
        </p>

        <button className='daily-button'>BUY DAILY RED</button>
      </div>

    </section>
  );
}