import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { StatusAdmin } from "../pages/_app";
const Footer = () => {
  const router = useRouter();

  const { setOk } = useContext(StatusAdmin);

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
              <a
                href="https://goo.gl/maps/P9MYWBqhnaqJxC929"
                rel="noreferrer"
                target="_blank"
              >
                <button type="button" className="btn btn-info p-2 mb-2">
                  Lokatsiya 1<i className="fas fa-globe mx-2"></i>
                </button>
              </a>
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
            <div className="col-4 my-5">
              <div className="text-white logo h4 mb-3">Contact</div>
              <div className="text-white-50">
                <p>7 Mehnat street, Samarkand 140139, Uzbekistan</p>
                <div className="h4 text-white logo">
                  <i className="fas fa-phone"></i> +81 80 6549 2181
                </div>
                <a className="text-white email">info@thereghotel.com</a>
                <div className="h4 text-white my-3 socialsite">
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-facebook-f mx-2"></i>
                  <i className="fab fa-youtube mx-2"></i>
                  <Link
                    href="https://t.me/mamonaku1"
                    target="_blank"
                    className="primary"
                  >
                    <i className="fab fa-telegram mx-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- copyright --> */}
      <div className="copyright p-4 text-white-50">
        <div className="d-flex  justify-content-center">
          <div
            onClick={() => {
              if (router.pathname === "/") {
                setOk(true);
                alert("this is copyrigth");
              }
            }}
            className="me-1"
          >
            ©
          </div>{" "}
          Copyright 2023 by The Reg Hotel
        </div>
      </div>
    </div>
  );
};

export default Footer;
