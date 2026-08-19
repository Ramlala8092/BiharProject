import SectionTitle from "../components/SectionTitle";


const tips = [

  [
    "Best Time to Visit",
    "October to March is generally comfortable for exploring Bihar."
  ],

  [
    "What to Carry",
    "Carry light clothes, comfortable shoes, ID and basic medicines."
  ],

  [
    "Local Language",
    "Hindi is widely understood; learning a few local words helps."
  ],

  [
    "Local Transport",
    "Auto-rickshaws, e-rickshaws, buses and cabs are common."
  ],

  [
    "Safety Tips",
    "Keep belongings safe and prefer well-known places after dark."
  ]

];


function TravelTips() {

  return (

    <section className="max-w-5xl mx-auto px-5 py-16">

      <SectionTitle
        title="Travel Tips"
        subtitle="Useful information before you start your Bihar journey."
      />


      <div className="grid sm:grid-cols-2 gap-5">

        {tips.map(
          ([title, description]) => (

            <div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >

              <h3 className="font-bold text-xl">
                {title}
              </h3>

              <p className="text-slate-500 mt-2">
                {description}
              </p>

            </div>

          )
        )}

      </div>

    </section>

  );
}

export default TravelTips;