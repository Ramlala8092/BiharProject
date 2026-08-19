import { Link } from "react-router-dom";

import SectionTitle from "../components/SectionTitle";
import PlaceCard from "../components/PlaceCard";

import {
  destinations,
  foods
} from "../data/data";


function Home() {

  return (

    <>

      {/* HERO */}

      <section className="relative min-h-[78vh] flex items-center">

        <img
          src={destinations[1].image}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Bihar"
        />

        <div className="absolute inset-0 bg-black/55"></div>


        <div className="relative max-w-7xl mx-auto px-5 text-white w-full">

          <p className="uppercase tracking-[.3em] font-bold text-orange-300">
            The Land of Heritage
          </p>

          <h1 className="text-5xl md:text-7xl font-black max-w-3xl mt-4">
            Discover Bihar
          </h1>

          <p className="text-lg md:text-xl max-w-xl mt-5 text-slate-200">
            History, spirituality, culture, food and
            nature — plan your Bihar journey in one place.
          </p>


          <div className="mt-8 flex flex-wrap gap-3">

            <Link
              to="/explore"
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-bold"
            >
              Explore Places
            </Link>

            <Link
              to="/trip-planner"
              className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold"
            >
              Plan My Trip
            </Link>

          </div>

        </div>

      </section>


      {/* DESTINATIONS */}

      <section className="max-w-7xl mx-auto px-5 py-16">

        <SectionTitle
          title="Popular Destinations"
          subtitle="Places you should consider when planning a Bihar trip."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {destinations
            .slice(0, 4)
            .map((place) => (

              <PlaceCard
                key={place.id}
                place={place}
              />

            ))}

        </div>

      </section>


      {/* FOOD */}

      <section className="bg-green-50 py-16">

        <div className="max-w-7xl mx-auto px-5">

          <SectionTitle
            title="Taste of Bihar"
            subtitle="Try the flavours that make Bihar special."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {foods
              .slice(0, 4)
              .map((food) => (

                <div
                  key={food.name}
                  className="bg-white p-5 rounded-2xl shadow-sm"
                >

                  <h3 className="font-bold text-lg">
                    {food.name}
                  </h3>

                  <p className="text-sm text-slate-500 mt-2">
                    {food.description}
                  </p>

                </div>

              ))}

          </div>

        </div>

      </section>

    </>

  );
}

export default Home;