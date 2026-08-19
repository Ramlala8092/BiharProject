// import { useState } from "react";

// import SectionTitle from "../components/SectionTitle";

// import { destinations } from "../data/data";


// function TripPlanner() {

//   const [days, setDays] = useState(3);

//   const [people, setPeople] = useState(2);


//   const selectedPlaces =
//     destinations.slice(
//       0,
//       Math.min(days, destinations.length)
//     );


//   const estimate =
//     days * people * 1200;


//   return (

//     <section className="max-w-7xl mx-auto px-5 py-16">

//       <SectionTitle
//         title="Plan Your Trip"
//         subtitle="Create a simple Bihar itinerary based on your trip duration."
//       />


//       <div className="grid lg:grid-cols-[320px_1fr] gap-8">


//         <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">

//           <label className="font-bold">
//             Trip Days
//           </label>

//           <select
//             value={days}
//             onChange={(e) =>
//               setDays(Number(e.target.value))
//             }
//             className="w-full border rounded-xl p-3 mt-2"
//           >

//             <option value="2">
//               2 Days
//             </option>

//             <option value="3">
//               3 Days
//             </option>

//             <option value="5">
//               5 Days
//             </option>

//             <option value="7">
//               7 Days
//             </option>

//           </select>


//           <label className="font-bold block mt-5">
//             Travellers
//           </label>

//           <input
//             type="number"
//             min="1"
//             value={people}
//             onChange={(e) =>
//               setPeople(Number(e.target.value))
//             }
//             className="w-full border rounded-xl p-3 mt-2"
//           />


//           <div className="mt-6 bg-green-50 rounded-xl p-4">

//             <p className="text-sm text-slate-500">
//               Estimated basic budget
//             </p>

//             <p className="text-2xl font-black text-green-700">
//               ₹{estimate.toLocaleString()}
//             </p>

//           </div>

//         </div>


//         <div className="space-y-4">

//           {selectedPlaces.map(
//             (place, index) => (

//               <div
//                 key={place.id}
//                 className="bg-white rounded-2xl p-5 shadow-sm flex gap-5 items-center"
//               >

//                 <img
//                   src={place.image}
//                   alt={place.name}
//                   className="w-28 h-24 rounded-xl object-cover"
//                 />


//                 <div>

//                   <p className="text-green-700 font-bold">
//                     Day {index + 1}
//                   </p>

//                   <h3 className="text-xl font-bold">
//                     {place.name}
//                   </h3>

//                   <p className="text-slate-500">
//                     {place.description}
//                   </p>

//                 </div>

//               </div>

//             )
//           )}

//         </div>

//       </div>

//     </section>

//   );
// }

// export default TripPlanner;


import { useState } from "react";

import SectionTitle from "../components/SectionTitle";

import { destinations } from "../data/data";

function TripPlanner() {
  const [days, setDays] = useState(3);
  const [people, setPeople] = useState(2);

  // Random tourist places generate karne ka function
  const generateRandomPlaces = (numberOfDays) => {
    const shuffledPlaces = [...destinations].sort(
      () => Math.random() - 0.5
    );

    return shuffledPlaces.slice(
      0,
      Math.min(numberOfDays, destinations.length)
    );
  };

  // Initial random places
  const [selectedPlaces, setSelectedPlaces] = useState(() =>
    generateRandomPlaces(3)
  );

  // Days change hone par random places
  const handleDaysChange = (e) => {
    const newDays = Number(e.target.value);

    setDays(newDays);

    setSelectedPlaces(generateRandomPlaces(newDays));
  };

  // Generate New Plan button
  const handleGeneratePlan = () => {
    setSelectedPlaces(generateRandomPlaces(days));
  };

  // Budget calculation
  const estimate = days * people * 1200;

  return (
    <section className="max-w-7xl mx-auto px-5 py-16">

      {/* Section Heading */}
      <SectionTitle
        title="Plan Your Trip"
        subtitle="Create a simple Bihar itinerary based on your trip duration."
      />

      <div className="grid lg:grid-cols-[320px_1fr] gap-8">

        {/* ================= LEFT SIDE ================= */}
        <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">

          {/* Trip Days */}
          <label className="font-bold text-slate-800">
            Trip Days
          </label>

          <select
            value={days}
            onChange={handleDaysChange}
            className="w-full border border-slate-300 rounded-xl p-3 mt-2 outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="2">2 Days</option>
            <option value="3">3 Days</option>
            <option value="4">4 Days</option>
            <option value="5">5 Days</option>
            <option value="6">6 Days</option>
            <option value="7">7 Days</option>
            <option value="8">8 Days</option>
            <option value="9">9 Days</option>
            <option value="10">10 Days</option>
          </select>

          {/* Travellers */}
          <label className="font-bold text-slate-800 block mt-5">
            Travellers
          </label>

          <input
            type="number"
            min="1"
            value={people}
            onChange={(e) => {
              const value = Number(e.target.value);

              if (value >= 1) {
                setPeople(value);
              }
            }}
            className="w-full border border-slate-300 rounded-xl p-3 mt-2 outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Budget */}
          <div className="mt-6 bg-green-50 rounded-xl p-4">

            <p className="text-sm text-slate-500">
              Estimated basic budget
            </p>

            <p className="text-2xl font-black text-green-700 mt-1">
              ₹{estimate.toLocaleString()}
            </p>

            <p className="text-xs text-slate-500 mt-1">
              ₹1,200 per person / day
            </p>

          </div>

          {/* Generate Button */}
          <button
            onClick={handleGeneratePlan}
            className="w-full mt-5 bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-xl transition"
          >
            Generate New Plan
          </button>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="space-y-4">

          {selectedPlaces.map((place, index) => (

            <div
              key={place.id}
              className="bg-white rounded-2xl p-5 shadow-sm flex gap-5 items-center hover:shadow-md transition"
            >

              {/* Image */}
              <img
                src={place.image}
                alt={place.name}
                className="w-28 h-24 rounded-xl object-cover flex-shrink-0"
              />

              {/* Details */}
              <div className="min-w-0">

                <p className="text-green-700 font-bold">
                  Day {index + 1}
                </p>

                <h3 className="text-xl font-bold text-slate-800 mt-1">
                  {place.name}
                </h3>

                <p className="text-slate-500 mt-1">
                  {place.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default TripPlanner;