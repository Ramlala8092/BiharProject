import {
  Link,
  useParams
} from "react-router-dom";

import { destinations } from "../data/data";


function DestinationDetails() {

  const { id } = useParams();


  const place =
    destinations.find(
      (item) => item.id === id
    ) || destinations[0];


  return (

    <section className="max-w-7xl mx-auto px-5 py-10">

      <img
        src={place.image}
        alt={place.name}
        className="w-full h-[45vh] object-cover rounded-3xl"
      />


      <div className="grid lg:grid-cols-[1fr_350px] gap-8 mt-8">

        <div>

          <p className="text-green-700 font-bold">
            {place.category} · {place.district}
          </p>

          <h1 className="text-4xl md:text-5xl font-black mt-2">
            {place.name}
          </h1>

          <p className="text-lg text-slate-600 mt-5">
            {place.description}
          </p>


          <h2 className="text-2xl font-bold mt-10">
            Things to do
          </h2>

          <ul className="mt-4 space-y-3 list-disc pl-5">

            <li>
              Explore famous historical and cultural sites
            </li>

            <li>
              Try local food and meet local communities
            </li>

            <li>
              Take photos and enjoy the local atmosphere
            </li>

          </ul>

        </div>


        <aside className="bg-white rounded-2xl p-6 shadow-sm h-fit">

          <h3 className="font-bold text-xl">
            Plan your visit
          </h3>

          <p className="text-slate-500 mt-3">
            Choose your stay and build an itinerary.
          </p>

          <Link
            to="/trip-planner"
            className="block text-center mt-6 bg-green-700 text-white rounded-xl py-3 font-bold"
          >
            Plan Trip
          </Link>

        </aside>

      </div>

    </section>

  );
}

export default DestinationDetails;