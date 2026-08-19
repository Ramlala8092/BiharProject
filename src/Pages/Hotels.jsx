import SectionTitle from "../components/SectionTitle";
import { hotels } from "../data/data";

function Hotels() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16">
      
      {/* Section Title */}
      <SectionTitle
        title="Hotels & Stay"
        subtitle="Find comfortable stay options for your Bihar journey."
      />

      {/* Hotel Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {hotels.map((hotel) => (
          <div
            key={hotel.id + hotel.name}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
          >
            
            {/* Hotel Image */}
            <div className="w-full h-56 overflow-hidden">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Hotel Details */}
            <div className="p-5 flex flex-col flex-1">

              {/* Hotel Name */}
              <h2 className="text-xl font-bold text-gray-800">
                {hotel.name}
              </h2>

              {/* Location */}
              <p className="text-sm text-gray-500 mt-2">
                📍 {hotel.location}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-6 mt-3 line-clamp-3 min-h-[72px]">
                {hotel.description}
              </p>

              {/* Button */}
              <button
                onClick={() => window.open(hotel.link, "_blank")}
                className="mt-5 w-full bg-black text-white py-2.5 rounded-lg
                hover:bg-gray-800 active:scale-95 transition-all duration-200"
              >
                View Hotel
              </button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hotels;