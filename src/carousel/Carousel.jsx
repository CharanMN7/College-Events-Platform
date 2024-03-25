import { useRef } from "react";
import CarouselCard from "./CarouselCard";
import "./Carousel.scss";
import data from "./carouselData.json";

const Carousel = () => {
  const carouselRef = useRef(null);

  const scrollToItem = (index) => {
    const item = carouselRef.current.children[index];
    item.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="carousel" ref={carouselRef}>
        {data.data.map((event) => (
          <CarouselCard
            name={event.name}
            date={event.date}
            oneLiner={event.oneLiner}
            status={event.status}
            key={event.name}
          />
        ))}
      </div>
      <div className="navigation-dots">
        {data.data.map((event, index) => (
          <span
            onClick={() => scrollToItem(index)}
            key={event.name + event.oneLiner[0]}
          ></span>
        ))}
      </div>
    </>
  );
};

export default Carousel;
