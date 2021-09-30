import React from "react";
import Footer from "../footer/Footer.js";
import Header from "../header/Header.js";

const About = () => {
  return (
    <div>
      <Header></Header>
      <AboutUs />
      <Footer></Footer>
    </div>
  );
};

function AboutUs() {
  return (
    <div className="bg-info m-0">
      <h4 className="text-center">About</h4>
      <p className="w-25 m-0 mx-auto text-justify">
        TheMealDB was built in 2016 to provide a free data source api for
        recipes online in the hope that developers would build applications and
        cool projects ontop of it. TheMealDB originated on the Kodi forums as a
        way to browse recpies on your TV. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Magni, corporis tempora neque explicabo
        alias perferendis vel error adipisci ut, laborum quisquam officia
      </p>
      <div className="w-25 mx-auto">
        <p className="text-center">About Image</p>
        <div className="text-center">
          <img
            src="https://raw.githubusercontent.com/zag2me/script.screensaver.themealdb/master/icon.png"
            alt=""
          />
        </div>
        <p className="text-center m-0">
          Available on the official Kodi repository
        </p>
      </div>
    </div>
  );
}

export default About;
