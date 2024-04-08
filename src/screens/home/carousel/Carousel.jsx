import { useEffect, useRef, useState } from "react";
import CarouselCard from "./CarouselCard";
import "./Carousel.scss";
import { getStatus, writeDate } from "../../../utils/dateAndStatus";

const Carousel = () => {
  const carouselRef = useRef(null);
  const dotRef = useRef(null);
  let theIndex = 0;

  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const fetchAllEvents = async () => {
      const apiRes = await fetch("https://raghu-clubs.onrender.com/all-events");

      if (!apiRes.ok) {
        console.log("Couldn't fetch /all-events");
      }

      const events = await apiRes.json();
      setAllEvents(events);
      console.log(allEvents);
    };

    fetchAllEvents();
  });

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
        {allEvents.map((event) => (
          <CarouselCard
            name={event.title}
            date={writeDate(event.date)}
            oneLiner={event.shortDesc}
            status={getStatus(event.date)}
            bgImg={event.bannerUrl}
            key={event._id}
          />
        ))}
      </div>

      <div className="nav-dots-box">
        <div className="navigation-dots" ref={dotRef}>
          {allEvents.map((event, index) => (
            <span onClick={() => scrollToItem(index)} key={event._id}></span>
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
