import { BrowserRouter, Route, Routes } from "react-router-dom";
import SomeFetches from "./screens/SomeFetches";
import Header from "./components/Header";
import CartProductsProvider from "./contexts/CartProductsContext";

function App() {
  return (
    <CartProductsProvider>
      <BrowserRouter>
        <Header />
        <div className="w-10/12 mx-auto mt-10">
          <Routes>
            <Route path="/" element={<SomeFetches />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProductsProvider>
  );
}

export default App;
