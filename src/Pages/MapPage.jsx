import SectionTitle from "../components/SectionTitle";

import { destinations } from "../data/data";


function MapPage() {

  return (

    <section className="max-w-7xl mx-auto px-5 py-16">

      <SectionTitle
        title="Explore Bihar on Map"
        subtitle="A simple visual guide to major destinations."
      />


      <div className="relative min-h-[520px] bg-green-100 rounded-3xl border-4 border-white shadow-inner overflow-hidden">

        <div className="absolute inset-10 rounded-[40%] bg-green-200 border-4 border-green-300 rotate-[-3deg]" />


        {destinations.map(
          (place, index) => (

            <button
              key={place.id}
              style={{
                left: `${15 + (index * 17) % 70}%`,
                top: `${18 + (index * 23) % 65}%`
              }}
              className="absolute bg-green-700 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg hover:scale-110 transition"
            >
              {place.name}
            </button>

          )
        )}

      </div>


      <p className="text-center text-sm text-slate-500 mt-4">
        Demo map UI — later you can connect Leaflet/OpenStreetMap
        for a real interactive map.
      </p>

    </section>

  );
}

export default MapPage;