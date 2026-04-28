import Hero from "./components/Hero";
import WhatToExpect from "./components/WhatToExpect";
import Feeding from "./components/Fidding";
import DailyRed from "./components/DailyRed";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="page">
      <article className="email">
        <Hero />
        <WhatToExpect />
        <Feeding />
        <DailyRed />
        <Footer />
      </article>
      
    </main>
  );
}

export default App;