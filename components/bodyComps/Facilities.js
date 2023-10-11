export default function Facilities() {
  return (
    <>
      <div className="facilities bg-light">
        <div className="container-md my-5">
          <div className="row mt-5">
            <div className="letterspace text-dark-50">OUR SERVICES</div>
            <div className="logo display-5 text-dark">Hotel Facilities</div>
          </div>
          <div className="row d-flex justify-content-between facitems">
            <div className="col-md card m-3">
              <div className="card-body">
                <i className="facilityicons fas fa-regular fa-plane-departure h1 my-3"></i>
                <h4 className="moz card-title logo text-dark">
                  Pick Up & Drop
                </h4>
                <p className="moz card-text">
                  We’ll pick up from airport with luxurious car for any number
                  of people.
                </p>
              </div>
            </div>
            <div className="col-md card m-3">
              <div className="card-body">
                <i className="facilityicons fas fa-regular fa-car h1 my-3"></i>
                <h4 className="card-title logo text-dark">Parking Space</h4>
                <p className="card-text">
                  We have vast area for your car that is parked by our vip
                  vallet parkers.
                </p>
              </div>
            </div>
            <div className="col-md card m-3">
              <div className="card-body">
                <i className="facilityicons fas fa-broom h1 my-3"></i>
                <h4 className="card-title logo text-dark">Room Service</h4>
                <p className="card-text">
                  Room attandents are always ready to take your orders at any
                  time 24/7.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-between facitems">
            <div className="col-md card m-3">
              <div className="card-body">
                <i className="facilityicons fas fa-swimming-pool h1 my-3"></i>
                <h4 className="card-title logo text-dark">Swimming Pool</h4>
                <p className="card-text">
                  Swimming pool is available on the second floor with safeguard
                  and also there is a bar next to it.
                </p>
              </div>
            </div>
            <div className="col-md card m-3">
              <div className="card-body">
                <svg
                  width="60"
                  height="60"
                  fill="#b59469"
                  className="bi bi-wifi my-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z" />
                  <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
                </svg>
                {/* <!-- <i className="fas fa-solid fa-wifi display-5 my-3"></i> --> */}
                <h4 className="card-title logo text-dark">Fibre Internet</h4>
                <p className="card-text">
                  Wifi is available for free at fast speed.
                </p>
              </div>
            </div>
            <div className="col-md card m-3">
              <div className="card-body">
                <i className="facilityicons fas fa-utensils h1 my-3"></i>
                <h4 className="card-title logo text-dark">Breakfast</h4>
                <p className="card-text">
                  We offer five different restaurants according to your choice
                  of food of various nationality.
                </p>
              </div>
            </div>
          </div>

          <div className="row"></div>
        </div>
      </div>
    </>
  );
}
