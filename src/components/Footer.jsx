import { Link } from "react-router-dom";

function Footer() {

  return (

    <footer className="bg-slate-950 text-white mt-16">

      <div className="max-w-7xl mx-auto px-5 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div>

          <h2 className="text-2xl font-black text-green-400">
            Explore Bihar
          </h2>

          <p className="mt-3 text-slate-400">
            Discover the history, culture, food
            and beautiful destinations of Bihar.
          </p>

        </div>


        <div>

          <h3 className="font-bold mb-4">
            Quick Links
          </h3>

          <div className="grid gap-2 text-slate-400">

            <Link to="/explore">
              Explore
            </Link>

            <Link to="/hotels">
              Hotels
            </Link>

            <Link to="/food">
              Food
            </Link>

            <Link to="/trip-planner">
              Trip Planner
            </Link>

            <Link to="/gallery">
              Gallery
            </Link>

          </div>

        </div>


        <div>

          <h3 className="font-bold mb-4">
            Popular Destinations
          </h3>

          <p className="text-slate-400">
            Patna · Bodh Gaya · Rajgir ·
            Nalanda · Vaishali
          </p>

        </div>


        <div>

          <h3 className="font-bold mb-4">
            Contact
          </h3>

          <p className="text-slate-400">
            ramlalakumar68@gmail.com
          </p>

        </div>

      </div>


      <div className="border-t border-slate-800 text-center py-4 text-slate-500">

        © 2026 Explore Bihar.
        All rights reserved.

      </div>

    </footer>

  );
}

export default Footer;