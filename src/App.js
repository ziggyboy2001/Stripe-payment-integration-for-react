import "./App.css";
import React, { useState } from "react";
import StripeContainer from "./components/StripeContainer";
import guitar from "./assets/guitar.jpg";

function App() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="App">
      <h1>Nile Marketplace</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>$10.00</h3> <img src={guitar} alt="Guitar" />
          <button onClick={() => setShowItem(true)}>Purchase</button>
        </>
      )}
    </div>
  );
}

export default App;
