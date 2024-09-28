import 'animate.css';

function Slider() {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active slider23">
            <h4 className="animate__animated animate__delay-0.5s animate__fadeInDown slider-heading4">
              Women Collection 2023
            </h4>
            <h1 className="animate__animated animate__delay-1s animate__fadeInUp slider-heading1">
              NEW SESSION
            </h1>
            <button
              className="btn btn-info text-light fw-bold animate__animated animate__delay-2s animate__zoomIn"
              style={{ position: "absolute", top: "48%", left: "8%" }}
            >
              Shop Now
            </button>
          </div>
          <div
            className="carousel-item"
            style={{
              height: 650,
              width: "100%",
              backgroundImage: "url(./img/slide-01.jpg.webp)",
              backgroundSize: "cover",
            }}
          >
            <h4 className="animate__animated animate__delay-0.5s animate__rotateInDownLeft slider-heading4">
              Man New-Season
            </h4>
            <h1 className="animate__animated animate__delay-1s animate__lightSpeedInRight slider-heading1">
              Jackets &amp; Coats
            </h1>
            <button
              className="btn btn-info text-light fw-bold animate__animated animate__delay-2s animate__fadeInUp"
              style={{ position: "absolute", top: "48%", left: "8%" }}
            >
              Shop Now
            </button>
          </div>
          <div
            className="carousel-item"
            style={{
              height: 650,
              width: "100%",
              backgroundImage: "url(./img/slide-02.jpg.webp)",
              backgroundSize: "cover",
            }}
          >
            <h4 className="animate__animated animate__delay-0.5s animate__rotateInDownLeft slider-heading4">
              Man Collection 2023
            </h4>
            <h1 className="animate__animated animate__delay-1s animate__rotateInUpRight slider-heading1">
              NEW ARRIVALS
            </h1>
            <button
              className="btn btn-info text-light fw-bold animate__animated animate__delay-2s animate__rotateIn"
              style={{ position: "absolute", top: "48%", left: "8%" }}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

    </>
  );
}

export default Slider;
