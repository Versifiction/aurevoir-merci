import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

function Contact() {
  return (
    <div classNameName="Contact">
      <Navigation />
      <div className="Header">
        <div className="container mx-auto">
          <h1 className="font-bold text-5xl pt-12 pb-12">Contact</h1>
          <p>
            Pour le moment, vous pouvez contacter le créateur et développeur du
            site, via son Twitter:{" "}
            <a
              href="http://twitter.com/KillerFromParis"
              className="text-blue-500 font-bold"
            >
              @KillerFromParis
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
