import Navbar from "../components/navbar";
import StaticProduct from "../components/staticProducts";
import Slider from "../components/slider";
import Footer from "../components/footer";
import DynamicProduct from "../components/dynamicProduct";
import MiniHeader from "../components/miniHeader";

function Home() {
  return (
    <>
      <Navbar />
      <MiniHeader />
      <Slider />
      <StaticProduct />
      <DynamicProduct />
      <Footer />
    </>
  );
}

export default Home;
