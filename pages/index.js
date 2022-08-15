import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {/* <!-- slider --> */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./18.webp" className="d-block w-100" alt="..." />
              <div className="carousel-caption mb-5 d-none d-md-block">
                <img className="star" src="./star.png" alt="name" />
                <p>LUXURY HOTEL & BEST RESORT</p>
                <h1 className="logo letterspace scomment">
                  ENJOY A LUXURY EXPERIENCE
                </h1>
                <Link href="/rooms">
                  <button className="btn btn-outline-dark sliderbtn">
                    ROOMS & SUITS
                  </button>
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src="./2.png" className="d-block w-100" alt="..." />
              <div className="carousel-caption mb-5 d-none d-md-block">
                <img className="star" src="./star.png" alt="name" />
                <p>UNIQUE PLACE TO RELAX & ENJOY</p>
                <h1 className="logo letterspace scomment">
                  THE PERFECT BASE FOR YOU
                </h1>
                <Link href="/rooms">
                  <button className="btn btn-outline-dark sliderbtn">
                    ROOMS & SUITS
                  </button>
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src="./14.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption mb-5 d-none d-md-block">
                <img className="star" src="./star.png" alt="name" />
                <p>THE ULTIMATE LUXURY EXPERIENCE</p>
                <h1 className="logo letterspace scomment">
                  ENJOY THE BEST MOMENTS OF LIFE
                </h1>
                <Link href="/rooms">
                  <button className="btn btn-outline-dark sliderbtn">
                    ROOMS & SUITS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- checkinbox --> */}
        <div id="checkinbox" className="checkinbox">
          <div className="container-md py-5">
            <div className="row">
              <div className="letterspace text-white">CHECK NOW</div>
              <div className="display-5 logo text-light">Search Rooms</div>
            </div>
            <div className="my-3 chkn d-md-flex d-sm-flex flex-sm-column flex-md-row justify-content-between">
              <input
                type="date"
                id="checkin"
                className="checkin"
                placeholder="CHECK-IN: "
                name="date"
              />

              <input
                type="date"
                id="checkout"
                className="checkin"
                placeholder="CHECK-OUT: "
                name="date"
              />

              <input
                type="number"
                id="checkin"
                className=""
                placeholder=" ADULTS: "
                name="number"
              />

              <input
                type="number"
                id="checkin"
                className=""
                placeholder=" CHILDREN: "
                name="number"
              />

              <input
                type="button"
                id="checkin"
                className="checkinbtn"
                value="CHECK NOW"
                name="number"
              />
            </div>
          </div>
        </div>
        {/* <!-- room & suits --> */}
        <div id="room" className="container-md my-5">
          <div className="row text-dark">
            <div className="letterspace">THE REG LUXURY HOTEL</div>
            <div className="logo display-5">Rooms & Suites</div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md m-3 ui-card">
              <img className="roomsimg" src="./p2.jpg" />
              <div className="description desc uper">
                <h5>150$ / NIGHT</h5>
                <div className="rtype logo h2">Junior Suite</div>
                <div className="rsicons d-flex justify-content-between">
                  <div className="roomicons">
                    <i className="fas fa-solid fa-bath"></i>
                    <i className="fas fa-solid fa-restroom"></i>
                    <i className="fas fa-solid fa-wifi"></i>
                    <i className="fas fa-tv"></i>
                  </div>
                  <Link href="/rooms">
                    <div className="cursorpointer">
                      DETAILS
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md m-3 ui-card">
              <img className="roomsimg" src="./p4.jpg" />
              <div className="description desc uper">
                <h5>200$ / NIGHT</h5>
                <div className="rtype logo h2">Family Room</div>
                <div className="rsicons d-flex justify-content-between">
                  <div className="roomicons">
                    <i className="fas fa-solid fa-bath"></i>
                    <i className="fas fa-solid fa-restroom"></i>
                    <i className="fas fa-solid fa-wifi"></i>
                    <i className="fas fa-tv"></i>
                  </div>
                  <Link href="/rooms">
                    <div className="cursorpointer">
                      DETAILS
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md m-3 ui-card">
              <img className="roomsimg" src="./p5.jpg" />
              <div className="description desc uper">
                <h5>250$ / NIGHT</h5>
                <div className="rtype logo h2">Twin Room</div>
                <div className="rsicons d-flex justify-content-between">
                  <div className="roomicons">
                    <i className="fas fa-solid fa-bath"></i>
                    <i className="fas fa-solid fa-restroom"></i>
                    <i className="fas fa-solid fa-wifi"></i>
                    <i className="fas fa-tv"></i>
                  </div>
                  <Link href="/rooms">
                    <div className="cursorpointer">
                      DETAILS
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md m-3 ui-card">
              <img className="roomsimg" src="./12.jpg" />
              <div className="description desc">
                <h5>350$ / NIGHT</h5>
                <div className="rtype logo h2">Deluxe Room</div>
                <div className="rsicons d-flex justify-content-between">
                  <div className="roomicons">
                    <i className="fas fa-solid fa-bath"></i>
                    <i className="fas fa-solid fa-restroom"></i>
                    <i className="fas fa-solid fa-wifi"></i>
                    <i className="fas fa-tv"></i>
                  </div>
                  <Link href="/rooms">
                    <div className="cursorpointer">
                      DETAILS
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md m-3 ui-card">
              <img className="roomsimg" src="./2.png" />
              <div className="description desc">
                <h5>550$ / NIGHT</h5>
                <div className="rtype logo h2">Superior Room</div>
                <div className="rsicons d-flex justify-content-between">
                  <div className="roomicons">
                    <i className="fas fa-solid fa-bath"></i>
                    <i className="fas fa-solid fa-restroom"></i>
                    <i className="fas fa-solid fa-wifi"></i>
                    <i className="fas fa-tv"></i>
                  </div>
                  <Link href="/rooms">
                    <div className="cursorpointer">
                      DETAILS
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- extra services --> */}
        <div className="service">
          <div className="container-md">
            <div className="row">
              <div className="col-md-4 my-5">
                <div className="letterspace2 text-warning">BEST PRICES</div>
                <div className="display-5 logo text-light">Extra Services</div>
                <p className="text-white-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  delectus, repellat officiis esse sit accusamus commodi.
                </p>
                <p className="text-white-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  delectus, repellat officiis esse sit accusamus commodi.
                </p>
                <div className="d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="currentColor"
                    className="bi bi-telephone text-warning me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                  <div className="d-flex flex-column">
                    <div className="text-white-50 h4">For information</div>
                    <div className="text-warning h4">+99893 3488522</div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 d-flex flex-row align-items-center justify-content-around my-5">
                <div className="card">
                  <img
                    className="card-img-top cardimg"
                    src="./r2.jpg"
                    alt="Card image"
                    style={{ width: "100%" }}
                  />
                  <div className="card-body m-2">
                    <h4 className="card-title logo my-2">Drinks included</h4>
                    <div className="my-3">
                      <span className="h1 logo sitecolor">$20</span>
                      /daily
                    </div>
                    <div className="card-text">
                      <i className="fas fa-check me-2 sitecolor"></i>Soft drink.
                    </div>
                    <div className="card-text">
                      <i className="fas fa-check me-2 sitecolor"></i>Coffee.
                    </div>
                    <div className="card-text">
                      <i className="fas fa-times h5 me-2"></i> Whisky.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <img
                    className="card-img-top cardimg"
                    src="../r1.jpg"
                    alt="Card image"
                    style={{ width: "100%" }}
                  />
                  <div className="card-body m-2">
                    <h4 className="card-title logo my-2">Room cleaning</h4>
                    <div className="my-3">
                      <span className="h1 logo sitecolor">$50</span>
                      /month
                    </div>
                    <div className="card-text">
                      <i className="fas fa-check me-2 sitecolor"></i>Change
                      linens.
                    </div>
                    <div className="card-text">
                      <i className="fas fa-check me-2 sitecolor"></i>Refresh
                      soups.
                    </div>
                    <div className="card-text">
                      <i className="fas fa-times h5 me-2"></i>Cleaning at night.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- facilities --> */}
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
                    Swimming pool is available on the second floor with
                    safeguard and also there is a bar next to it.
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
        {/* <!-- footer --> */}
        <Footer />
      </main>
    </div>
  );
}
