import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container-md">
          <div className="row d-md-flex flex-row justify-content-between">
            <div className="col-5 my-5">
              <div className="text-white logo h4">About Hotel</div>
              <p className="text-white-50 my-3">
                Welcome to the best five-star deluxe hotel in Samarkand. Hotel
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                delectus, repellat officiis esse sit accusamus commodi.
              </p>
              {/* <!-- <button type="button" className="btn btn-dark p-3">
              English <i className="fas fa-globe mx-2"></i>
            </button> --> */}
              {/* <select className="btn btn-dark p-3 align-items-left">
                <option defaultValue>English</option>
                <option value="1">Russian</option>
                <option value="2">Japanese</option>
                <option value="3">Uzbek</option>
              </select> */}
            </div>
            <div className="col-3 my-5">
              <div className="text-white logo h4 mb-3">Explore</div>
              <div className="text-white-50 explorediv">
                <div>Home</div>
                <div>Rooms</div>
                <div>Restaurant</div>
                <div>Spa & Wellness</div>
                <div>About Hotel</div>
                <div>Contact</div>
              </div>
            </div>
            <div className="col-3 my-5">
              <div className="text-white logo h4 mb-3">Contact</div>
              <div className="text-white-50">
                <p>11 Mehnat street, Samarkand 100130, Uzbekistan</p>
                <div className="h4 text-white logo">
                  <i className="fas fa-phone"></i> +998 933488522
                </div>
                <a className="text-white email">info@reghotel.com</a>
                <div className="h4 text-white my-3 socialsite">
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-facebook-f mx-2"></i>
                  <i className="fab fa-youtube mx-2"></i>
                  <i className="fab fa-telegram mx-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- copyright --> */}
      <div className="copyright p-4 text-center text-white-50">
        <div>© Copyright 2022 by Feruz Islomov</div>
      </div>
    </div>
  );
};

export default Footer;
