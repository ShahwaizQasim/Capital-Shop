import Navbar from "../components/navbar";
import StaticProduct from "../components/staticProducts";
import Slider from "../components/slider";
import Footer from "../components/footer";
import DynamicProduct from "../components/dynamicProduct";

function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <StaticProduct />
      <DynamicProduct />
      <Footer />
    </>
  );
}

export default Home;
