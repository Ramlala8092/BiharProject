import SectionTitle from "../components/SectionTitle";

import { destinations } from "../data/data";


function Gallery() {

  const images = [
    ...destinations,
    ...destinations
  ];


  return (

    <section className="max-w-7xl mx-auto px-5 py-16">

      <SectionTitle
        title="Bihar Through Your Eyes"
        subtitle="Heritage, nature, culture and unforgettable moments."
      />


      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {images.map(
          (place, index) => (

            <img
              key={index}
              src={place.image}
              alt={place.name}
              className="w-full h-56 object-cover rounded-2xl hover:scale-[1.02] transition"
            />

          )
        )}

      </div>

    </section>

  );
}

export default Gallery;