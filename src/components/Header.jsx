import { useState } from "react";
import {
  Link,
  NavLink
} from "react-router-dom";

import {
  Menu,
  X
} from "lucide-react";


const links = [

  ["Home", "/"],

  ["Explore", "/explore"],

  ["Hotels", "/hotels"],

  ["Food", "/food"],

  ["Trip Planner", "/trip-planner"],

  ["Gallery", "/gallery"],

  ["Tips", "/tips"],

  ["About", "/about"],

  ["Contact", "/contact"]

];


function Header() {

  const [open, setOpen] = useState(false);


  const navClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive
        ? "text-green-700"
        : "text-slate-700 hover:text-green-700"
    }`;


  return (

    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-black text-green-700"
        >
          Explore{" "}
          <span className="text-orange-500">
            Bihar
          </span>
        </Link>


        <nav className="hidden lg:flex items-center gap-5">

          {links.map(([label, to]) => (

            <NavLink
              key={label}
              to={to}
              className={navClass}
            >
              {label}
            </NavLink>

          ))}

        </nav>


        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2"
        >

          {open ? <X /> : <Menu />}

        </button>

      </div>


      {open && (

        <nav className="lg:hidden px-5 pb-5 bg-white grid gap-4">

          {links.map(([label, to]) => (

            <NavLink
              key={label}
              to={to}
              onClick={() => setOpen(false)}
              className={navClass}
            >
              {label}
            </NavLink>

          ))}

        </nav>

      )}

    </header>
  );
}

export default Header;