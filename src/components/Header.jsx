import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black text-white p-4">
      <div className="flex flex-row w-10/12 mx-auto gap-4 items-center justify-between">
        <div className="text-2xl">SandBox</div>
        <ul className="flex">
          <li>
            <Link to="/">Some Fetches</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
