import { Link } from "react-router-dom";

function PlaceCard({ place }) {

  return (

    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group">

      <img
        src={place.image}
        alt={place.name}
        className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="p-5">

        <span className="text-xs font-bold text-green-700">
          {place.category}
        </span>

        <h3 className="text-xl font-bold mt-1">
          {place.name}
        </h3>

        <p className="text-sm text-slate-500 mt-2">
          {place.description}
        </p>

        <Link
          to={`/destination/${place.id}`}
          className="inline-block mt-4 text-green-700 font-bold"
        >
          Explore →
        </Link>

      </div>

    </article>

  );
}

export default PlaceCard;