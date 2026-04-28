import aguaitem from "../assets/Frame 541.png";  
import caballoitem from "../assets/Frame 541-2.png";
import rockitem from "../assets/Frame 541-1.png";

const items = [
  {
    icon: aguaitem,
    text: "You’ll likely see your horse drinking water more frequently.",
  },
  {
    icon: rockitem,
    text: "Your horse may lick the Rock a little or a lot, depending on mineral needs.",
 },
  {
    icon: caballoitem,
    text: "You may also notice a shinier coat and stronger hooves within a few weeks.",
  },
  
];

export default function WhatToExpect() {
  return (
    <section className="expect">
      <h2>WHAT TO EXPECT</h2>

      <div className="expect-grid">
        {items.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.icon} alt="" />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}