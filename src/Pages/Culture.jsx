import SectionTitle from "../components/SectionTitle";

import { culture } from "../data/data";


function Culture() {

  return (

    <section className="max-w-7xl mx-auto px-5 py-16">

      <SectionTitle
        title="Festivals & Culture"
        subtitle="Traditions, art and celebrations that make Bihar unique."
      />


      <div className="grid md:grid-cols-2 gap-6">

        {culture.map(
          ([title, description]) => (

            <article
              key={title}
              className="bg-white p-7 rounded-2xl shadow-sm border-l-4 border-green-700"
            >

              <h3 className="text-2xl font-bold">
                {title}
              </h3>

              <p className="text-slate-500 mt-3">
                {description}
              </p>

            </article>

          )
        )}

      </div>

    </section>

  );
}

export default Culture;