
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./component/navbar";
import Home from "./component/home";
import Footer from "./component/footer";
import Service from "./component/service";
import Franchise from "./component/franchise";
import Partner from "./component/partner";
import Blog from "./component/blog";
import Moreserv from "./component/moreServ";
import Booking from "./component/Booking";
import Booking1 from "./component/Booking1";
import LastStep from "./component/LastStep";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Service Page */}
         <Route path="/services" element={<Service/>} />

          {/* Other Pages */}
          

          <Route
            path="/franchise"
            element={<Franchise/>}
          />
          <Route
            path="/partner"
            element={<Partner/>}
          />

          <Route
            path="/moreServ"
            element={<Moreserv/>}
          />

          <Route
            path="/blog"
            element={<Blog/>}
          />
          <Route
            path="/Booking"
            element={<Booking/>}
          />
          <Route
            path="/Booking1"
            element={<Booking1/>}
          />
          <Route
            path="/LastStep"
            element={<LastStep/>}
          />
        </Routes>
        

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;