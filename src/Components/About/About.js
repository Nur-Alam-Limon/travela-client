import React from "react";
import About1 from "../../img/about-1.jpg";

const About = () => {
  return (
    <div>
      <h1 className="fw-bold py-5 text-primary">About Us</h1>
      <div className="d-lg-flex align-items-center justify-content-center mx-lg-5">
        <img src={About1} alt="" className="w-50 pb-4" />
        <div className="px-5 text-start">
          <h3 className="fw-bold pb-5">Get ready for real time adventure</h3>
          <p>
            Travela is a tour group which arranges many tour events. We are here
            to fulfill your travelling dreams. We give the best service at cheap
            rate in the world. Customer statisfaction is our only priority. We
            arrange tour in about every month. All our tour are so adventerous.
            We ensure the security for our client.
            <br /> <br />
            So join us if you want to make your life beautiful and explore the
            world with us. We can gurantee that all the boringness of your life
            will be wiped out if you go to an event with us.
            <br />
            <br />
            So why wait? Contact with us as soon as possible. We are here to
            make your life beautiful. You can watch our upcoming events from our
            events section.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
