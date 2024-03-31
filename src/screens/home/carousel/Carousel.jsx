import { useRef } from "react";
import CarouselCard from "./CarouselCard";
import "./Carousel.scss";
import data from "./carouselData.json";

const Carousel = () => {
  const carouselRef = useRef(null);
  const dotRef = useRef(null);
  let theIndex = 0;

  const scrollToItem = (index) => {
    theIndex = index;
    const item = carouselRef.current.children[index];
    item.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToItemLeft = () => {
    if (theIndex != 0) {
      theIndex -= 1;
      scrollToItem(theIndex);
    } else {
      theIndex = carouselRef.current.children.length - 1;
      scrollToItem(theIndex);
    }
  };

  const scrollToItemRight = () => {
    if (theIndex < carouselRef.current.children.length - 1) {
      theIndex += 1;
      scrollToItem(theIndex);
    } else {
      theIndex = 0;
      scrollToItem(theIndex);
    }
  };

  return (
    <div id="carousel-container">
      <div className="carousel" ref={carouselRef}>
        {data.data.map((event) => (
          <CarouselCard
            name={event.name}
            date={event.date}
            oneLiner={event.oneLiner}
            status={event.status}
            bgImg={event.bgImg}
            key={event.name}
          />
        ))}
      </div>

      <div className="nav-dots-box">
        <div className="navigation-dots" ref={dotRef}>
          {data.data.map((event, index) => (
            <span
              onClick={() => scrollToItem(index)}
              key={event.name + event.oneLiner[0]}
            ></span>
          ))}
        </div>
      </div>

      <span
        className="scrollBtn scrollLeft material-symbols-rounded"
        onClick={scrollToItemLeft}
      >
        arrow_back_ios
      </span>

      <span
        className="scrollBtn scrollRight material-symbols-rounded"
        onClick={scrollToItemRight}
      >
        arrow_forward_ios
      </span>
    </div>
  );
};

export default Carousel;
