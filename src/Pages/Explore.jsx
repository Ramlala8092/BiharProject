import { useState } from "react";

import SectionTitle from "../components/SectionTitle";
import PlaceCard from "../components/PlaceCard";

import { destinations } from "../data/data";


function Explore() {

  const [filter, setFilter] = useState("All");


  const categories = [
    "All",
    "Heritage",
    "Spiritual",
    "Nature",
    "Wildlife"
  ];


  const places =
    filter === "All"
      ? destinations
      : destinations.filter(
          (place) => place.category === filter
        );


  return (

    <section className="max-w-7xl mx-auto px-5 py-16">

      <SectionTitle
        title="Explore Bihar"
        subtitle="Discover destinations across Bihar."
      />


      <div className="flex flex-wrap justify-center gap-3 mb-10">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-5 py-2 rounded-full font-semibold ${
              filter === category
                ? "bg-green-700 text-white"
                : "bg-white border hover:border-green-600"
            }`}
          >
            {category}
          </button>

        ))}

      </div>


      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

        {places.map((place) => (

          <PlaceCard
            key={place.id}
            place={place}
          />

        ))}

      </div>

    </section>

  );
}

export default Explore;