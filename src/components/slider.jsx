import Carousel from "react-bootstrap/Carousel";
import "animate.css";

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item className="slider23">
        <h4 className="animate__animated animate__delay-0.5s animate__fadeInDown slider-heading4">
          Man New-Season
        </h4>
        <h1 className="animate__animated animate__delay-1s animate__fadeInUp slider-heading1">
          NEW SESSION
        </h1>
        <button
          className="button animate__animated animate__delay-2s animate__zoomIn"
          style={{ position: "absolute", top: "48%", left: "12%" }}
        >
          Shop Now
        </button>
      </Carousel.Item>
      <Carousel.Item className="slider24">
        <h4 className="animate__animated animate__delay-0.5s animate__rotateInDownLeft slider-heading4">
          Women Collection 2023
        </h4>
        <h1 className="animate__animated animate__delay-1s animate__lightSpeedInRight slider-heading1">
          Jackets &amp; Coats
        </h1>
        <button
          className="button animate__animated animate__delay-2s animate__fadeInUp"
          style={{ position: "absolute", top: "48%", left: "12%" }}
        >
          Shop Now
        </button>
      </Carousel.Item>
      <Carousel.Item className="slider25">
        <h4 className="animate__animated animate__delay-0.5s animate__rotateInDownLeft slider-heading4">
          Men's Collection 2023
        </h4>
        <h1 className="animate__animated animate__delay-1s animate__lightSpeedInRight slider-heading1">
          Jackets &amp; Coats
        </h1>
        <button
          className="button animate__animated animate__delay-2s animate__fadeInUp"
          style={{ position: "absolute", top: "48%", left: "12%" }}
        >
          Shop Now
        </button>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
