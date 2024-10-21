import Carousel from "react-bootstrap/Carousel";
import "animate.css";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item className="slider23">
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-6 col-md-8 col-sm-12 sliderColumn pt-5">
              <h2 className="animate__animated animate__zoomIn">
                Fashion Sale
              </h2>
              <h1 className="animate__animated animate__delay-1s animate__bounceIn">
                Minimize Menz Style
              </h1>
              <p className="animate__animated animate__delay-2s animate__fadeInUp ">
                Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
                voluptas iure, delectus dignissimos facilis neque nulla earum.
              </p>
              <center>
                <button className="button animate__animated animate__delay-3s animate__fadeInUp mt-3">
                  Shop Now
                </button>
              </center>
            </div>
            <div className="col-lg-6 col-md-4 col-sm-12"></div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider24">
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-6  col-md-4 col-sm-12"> </div>
            <div className="col-lg-6 col-md-8 col-sm-12 sliderColumn pt-5">
              <h2 className="animate__animated animate__zoomIn">
                Fashion Sale
              </h2>
              <h1 className="animate__animated animate__delay-1s animate__bounceIn">
                Minimize Womenz Style
              </h1>
              <p className="animate__animated animate__delay-2s animate__fadeInUp ">
                Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
                voluptas iure, delectus dignissimos facilis neque nulla earum.
              </p>
              <center>
                <button className="button animate__animated animate__delay-3s animate__fadeInUp mt-3">
                  Shop Now
                </button>
              </center>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
