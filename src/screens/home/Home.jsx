import Carousel from "./carousel/Carousel";
import NavBar from "../../reusableComponents/NavBar/NavBar";
import FilterCardsDisplay from "./filterCardsDisplay/filterCardsDisplay";
import RsvpForm from "../../popups/RsvpForm";

const Home = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <FilterCardsDisplay />
    </>
    // <RsvpForm />
  );
};
export default Home;
