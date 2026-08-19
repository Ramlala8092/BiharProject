import SectionTitle from "../components/SectionTitle";


function About() {

  return (

    <section className="max-w-7xl mx-auto px-5 py-16">

      <SectionTitle
        title="About Bihar"
        subtitle="A land of ancient history, spirituality and vibrant culture."
      />


      <div className="grid lg:grid-cols-2 gap-10 items-center">

        <img
          src="https://www.tripsavvy.com/thmb/tYdyZZ7taLnDdoubVEm3_tjrCSo=/3243x2114/filters:no_upscale():max_bytes(150000):strip_icc()/148889734-56a3c08f5f9b58b7d0d398d3.jpg"
          alt="Bihar"
          className="rounded-3xl h-[420px] w-full object-cover"
        />


        <div>

          <h2 className="text-3xl font-black">
            Why explore Bihar?
          </h2>

          <p className="text-slate-600 mt-4 leading-7">
            Bihar connects travellers with ancient universities,
            Buddhist and Jain heritage, sacred places, folk art,
            festivals, local food and beautiful natural landscapes.
          </p>


          <div className="grid grid-cols-2 gap-4 mt-7">

            <div className="bg-green-50 p-4 rounded-xl">

              <b>
                Rich History
              </b>

              <p className="text-sm text-slate-500 mt-1">
                Ancient sites and monuments
              </p>

            </div>


            <div className="bg-orange-50 p-4 rounded-xl">

              <b>
                Vibrant Culture
              </b>

              <p className="text-sm text-slate-500 mt-1">
                Art, festivals and traditions
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default About;