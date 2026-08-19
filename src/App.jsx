import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import DestinationDetails from "./Pages/DestinationDetails";
import Hotels from "./Pages/Hotels";
import Food from "./Pages/Food";
import TripPlanner from "./Pages/TripPlanner";
import MapPage from "./Pages/MapPage";
import Gallery from "./Pages/Gallery";
import Culture from "./Pages/Culture";
import TravelTips from "./Pages/TravelTips";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-800">

      <Header />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/explore"
            element={<Explore />}
          />

          <Route
            path="/destination/:id"
            element={<DestinationDetails />}
          />

          <Route
            path="/hotels"
            element={<Hotels />}
          />

          <Route
            path="/food"
            element={<Food />}
          />

          <Route
            path="/trip-planner"
            element={<TripPlanner />}
          />

          <Route
            path="/map"
            element={<MapPage />}
          />

          <Route
            path="/gallery"
            element={<Gallery />}
          />

          <Route
            path="/culture"
            element={<Culture />}
          />

          <Route
            path="/tips"
            element={<TravelTips />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;