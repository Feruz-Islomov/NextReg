import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Getintouch = () => {
  return (
    <>
      {/* <!-- header --> */}
      <Header />

      {/* <!-- img  --> */}
      <div className="contact">
        <div className="container-md">
          <div className="row">
            <div className="col contactext">
              <p className="text-light letterspace2">GET IN TOUCH</p>
              <div className="display-3 logo text-light">Contact Us</div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- details  -->  */}
      <div className="contactdetails">
        <div className="container my-5">
          <div className="row d-flex flex-column flex-md-row justify-content-between">
            <div className="col-6">
              <div className="h3 logo text-dark">The Reg Hotel</div>
              <p>
                Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue
                the aucan ligula. Orci varius natoque penatibus et magnis dis
                parturient monte nascete ridiculus mus nellentesque habitant
                morbine.
              </p>
              <div className="d-flex align-items-center">
                <i className="fas fa-phone h1 checkicon sitecolor"></i>
                <div className="d-flex flex-column">
                  <div className="h5">Reservation</div>
                  <div className="sitecolor h5">+99893 3488522</div>
                </div>
              </div>
              <div className="d-flex align-items-center my-5">
                <i className="fas fa-envelope h1 checkicon sitecolor"></i>
                <div className="d-flex flex-column">
                  <div className="h5">Email info</div>
                  <div className="sitecolor h5">firuzwest@gmail.com</div>
                </div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <i className="fas fa-map-marked-alt h1 checkicon sitecolor"></i>
                <div className="d-flex flex-column">
                  <div className="h5">Adress</div>
                  <div className="sitecolor h5">
                    11 Mehnat street, Samarkand city 100130, Uzbekistan
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="h3 logo text-dark">Get in touch</div>
              <form action="#">
                <div className="d-flex">
                  <input
                    className="contactinput"
                    type="text"
                    placeholder="Your Name*"
                  />
                  <input
                    className="contactinput"
                    type="text"
                    placeholder="Your Email*"
                  />
                </div>
                <div className="d-flex">
                  <input
                    className="contactinput"
                    type="number"
                    placeholder="Your Number*"
                  />
                  <input
                    className="contactinput"
                    type="text"
                    placeholder="Subject*"
                  />
                </div>
                <div className="d-flex">
                  <textarea
                    className="contactinput"
                    placeholder="Message*"
                    cols="35"
                    rows="5"
                  ></textarea>
                </div>

                <input
                  type="button"
                  className="contactinput checkinbtn letterspace px-3"
                  value="SEND MESSAGE"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* footer  */}
      <Footer />
    </>
  );
};

export default Getintouch;
