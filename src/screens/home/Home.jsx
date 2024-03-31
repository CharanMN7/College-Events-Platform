import Carousel from "./carousel/Carousel";
import NavBar from "../../reusableComponents/NavBar/NavBar";
import filterCardsDisplay from "./filterCardsDisplay/filterCardsDisplay";

const Home = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <filterCardsDisplay />
    </>
  );
};
export default Home;
