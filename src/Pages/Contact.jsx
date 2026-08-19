// import { useState } from "react";

// import SectionTitle from "../components/SectionTitle";


// function Contact() {

//   const [sent, setSent] = useState(false);


//   function handleSubmit(e) {

//     e.preventDefault();

//     setSent(true);

//   }


//   return (

//     <section className="max-w-5xl mx-auto px-5 py-16">

//       <SectionTitle
//         title="Contact Us"
//         subtitle="Have a question or suggestion about your Bihar trip?"
//       />


//       <div className="grid md:grid-cols-2 gap-8">


//         <form
//           onSubmit={handleSubmit}
//           className="bg-white rounded-2xl p-7 shadow-sm space-y-4"
//         >

//           <input
//             required
//             placeholder="Your Name"
//             className="w-full border rounded-xl p-3"
//           />


//           <input
//             required
//             type="email"
//             placeholder="Your Email"
//             className="w-full border rounded-xl p-3"
//           />


//           <input
//             placeholder="Phone"
//             className="w-full border rounded-xl p-3"
//           />


//           <textarea
//             required
//             placeholder="Your Message"
//             rows="5"
//             className="w-full border rounded-xl p-3"
//           />


//           <button
//             type="submit"
//             className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-bold"
//           >
//             Send Message
//           </button>


//           {sent && (

//             <p className="text-green-700 font-semibold">
//               ✓ Message submitted successfully!
//             </p>

//           )}

//         </form>


//         <div className="bg-green-900 text-white rounded-2xl p-8">

//           <h3 className="text-2xl font-bold">
//             Let's plan Bihar better
//           </h3>

//           <p className="text-green-100 mt-3">
//             Use this form for suggestions,
//             travel questions or website feedback.
//           </p>


//           <div className="mt-8 space-y-4 text-green-100">

//             <p>
//               📍 Bihar, India
//             </p>

//             <p>
//               ✉ info@explorebihar.in
//             </p>

//           </div>

//         </div>

//       </div>

//     </section>

//   );
// }

// export default Contact;


import { useState } from "react";
import emailjs from "@emailjs/browser";

import SectionTitle from "../components/SectionTitle";

function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setSent(false);

    try {
      const result = await emailjs.sendForm(
        "service_hlc81he",
        "template_ldl6s19",
        e.target,
        {
          publicKey: "KD4ZiydTMNmKeGpMb",
        }
      );

      console.log("Email sent successfully:", result);

      setSent(true);

      // Form clearContact Us

      e.target.reset();

    } catch (error) {
      console.error("EmailJS Error:", error);

      alert(
        "Message send nahi hua.\n\n" +
        (error?.text || error?.message || "Please check EmailJS settings.")
      );

    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-5xl mx-auto px-5 py-16">

      <SectionTitle
        title="Contact Us"
        subtitle="Have a question or suggestion about your Bihar trip?"
      />

      <div className="grid md:grid-cols-2 gap-8">

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-7 shadow-sm space-y-4"
        >

          {/* Name */}
          <input
            required
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-600"
          />

          {/* Email */}
          <input
            required
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-600"
          />

          {/* Phone */}
          <input
          required
            type="tel"
            name="phone"
            placeholder="Phone"
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-600"
          />

          {/* Message */}
          <textarea
            required
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-600"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white py-3 rounded-xl font-bold transition ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-green-700 hover:bg-green-800"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success Message */}
          {sent && (
            <p className="text-green-700 font-semibold text-center">
              ✓ Message sent successfully!
            </p>
          )}

        </form>

        {/* Right Side */}
        <div className="bg-green-900 text-white rounded-2xl p-8">

          <h3 className="text-2xl font-bold">
            Let's plan Bihar better
          </h3>

          <p className="text-green-100 mt-3">
            Use this form for suggestions,
            travel questions or website feedback.
          </p>

          <div className="mt-8 space-y-4 text-green-100">

            <p>
              📍 Bihar, India
            </p>

            <p>
              ✉ ramlalakumar68@gmail.com
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;