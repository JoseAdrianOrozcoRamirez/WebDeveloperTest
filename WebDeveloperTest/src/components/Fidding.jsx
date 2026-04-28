const tips = [
  "Offer Redmond Rock free choice.",
  "Always provide access to fresh water.",
  "Keep the Rock out of mud and puddles to extend life.",
  "Hang it in a stall or trailer as a nutritious enrichment.",
  "Feed it with a Daily Red® loose salt for best results.",
];

export default function FeedingTips() {
  return (
    <section className="feeding">
      <h2>FEEDING</h2>
      <h3>TIPS + TRICKS</h3>

      <div className="tips">
        {tips.map((tip, index) => (
          <div className={`tip tip-${index + 1}`} key={tip}>
            <span>{index + 1}</span>
            <p>{tip}</p>
          </div>
        ))}
      </div>
    </section>
  );
}