import SectionTitle from "../components/SectionTitle";
import { foods } from "../data/data";

function Food() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16">

      <SectionTitle
        title="Famous Foods of Bihar"
        subtitle="Explore the traditional and delicious flavors of Bihar."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {foods.map((food) => (
          <div
            key={food.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            {/* Food Image */}
            <div className="w-full h-52 overflow-hidden">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Food Details */}
            <div className="p-5">
              
              {/* Food Name */}
              <h2 className="text-xl font-bold text-gray-800">
                {food.name}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-6 mt-3 line-clamp-3 min-h-[72px]">
                {food.description}
              </p>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Food;