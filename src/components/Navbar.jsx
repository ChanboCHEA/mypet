import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 ">
      <div className=" flex left-side font-bold">
        <ul className="flex  space-x-3 ">
          <li className="px-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-blue-500 after:to-pink-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
            <a href="/">Home</a>
          </li>
          <li className="px-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-blue-500 after:to-pink-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
            <a href="/">Price</a>
          </li>
          <li className="px-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-blue-500 after:to-pink-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
            <a href="/">About</a>
          </li>
        </ul>
      </div>

      <div className="logo flex hover:text-green-400 cursor-pointer transition-colors duration-1000 ">
        <h2 className="text-2xl font-bold">
          Fresh <span className="text-green-400 hover:text-black ">Meal</span>
        </h2>
      </div>

      <div className="icon flex space-x-5">
        <a
          href="https://www.google.com"
          className="hover:text-gray-500 transition-shadow duration-300"
        >
          {" "}
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </a>

        <a
          href="https://www.amazon.com"
          className="hover:text-gray-500 transition-shadow duration-300"
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </a>
        <a
          href="https://www.facebook.com"
          className="hover:text-gray-500 transition-shadow duration-300"
        >
          <FontAwesomeIcon icon={faUser} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
