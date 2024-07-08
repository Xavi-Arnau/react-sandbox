import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCartProductsContext } from "../contexts/CartProductsContext";
import Scroll from "./Scroll";

const Header = () => {
  const [state, dispatch] = useCartProductsContext();
  return (
    <div className="bg-black text-white fixed w-full left-0 top-0">
      <div className="flex flex-row w-10/12 mx-auto gap-4 items-center justify-between p-4">
        <div className="text-2xl">SandBox</div>
        <ul className="flex">
          <li>
            <Link to="/">Some Fetches</Link>
          </li>
        </ul>
        <div className="relative">
          <FaShoppingCart />
          {state.cart && state.cart.length > 0 ? (
            <div
              className="text-xs absolute text-white bg-red-700 -right-2 -top-2 w-4 h-4 rounded-full 
              flex flex-row items-center justify-center"
            >
              <span>{state.cart.length}</span>
            </div>
          ) : null}
        </div>
      </div>
      <Scroll />
    </div>
  );
};

export default Header;
