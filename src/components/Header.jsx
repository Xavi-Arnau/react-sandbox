import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserXmark } from "react-icons/fa6";
import { useCartProductsContext } from "../contexts/CartProductsContext";
import Scroll from "./Scroll";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTime } from "../slices/clockSlice";
import { LANGUAGES } from "../lang/languages";
import i18n from "../lang/i18n";

const Header = () => {
  const [state] = useCartProductsContext();
  const [count, setCount] = useState(0);
  const user = useAuth();
  if (!user.user && user.token) {
    //get the data using the token
    user.getCurrentAuthUser();
  }
  const reduxDispatch = useDispatch();
  useEffect(() => {
    // Use setTimeout to update the message after 5000 milliseconds (5 seconds)
    const timeoutId = setTimeout(() => {
      let current = new Date();

      reduxDispatch(
        setTime(
          `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`
        )
      );
      setCount(count + 1);
    }, 5000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [count, reduxDispatch]); // we wanna keep this running

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <div className="bg-black text-white fixed w-full left-0 top-0">
      <div className="flex flex-row w-10/12 mx-auto gap-4 items-center justify-between p-4">
        <div className="text-2xl">SandBox</div>

        <ul className="flex flex-row gap-4">
          <li>
            <Link to="/">Some Fetches</Link>
          </li>
          <li>
            <Link to="/rtkquery">RTK Query</Link>
          </li>
          <li>
            <Link to="/languages">Languages</Link>
          </li>
          <li>
            <Link to="/expressapi">Express API</Link>
          </li>
          <li>
            <Link to="/expressapimongo">Express API MongoDB</Link>
          </li>
          <li>
            <Link to="/animations">Animations</Link>
          </li>
          <li>
            <Link to="/pagination">Pagination</Link>
          </li>
        </ul>
        <div className="flex flex-row gap-4 items-center">
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
          {user.token ? (
            <div className="flex flex-row gap-4 items-center">
              Welcome {user.user}
              <button onClick={() => user.logOut()} className="">
                <FaUserXmark />
              </button>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <div className="text-black">
            <select defaultValue={i18n.language} onChange={onChangeLang}>
              {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <Scroll />
    </div>
  );
};

export default Header;
