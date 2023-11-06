import React, { createContext, useState } from "react";
import Routes from "./routes/Routes";

export const AppContext = createContext();

function App() {
  const [product, setProduct] = useState([]);

  const addToCart = (data) => setProduct([...product, data]);

  let obj = { product, addToCart };

  return (
    <>
      <AppContext.Provider value={obj}>
        <Routes />
      </AppContext.Provider>
    </>
  );
}

export default App;
