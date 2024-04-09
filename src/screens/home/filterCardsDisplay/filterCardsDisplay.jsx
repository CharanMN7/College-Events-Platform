import { useState, useEffect } from "react";
import "./filterCardsDisplay.scss";
import { tags } from "./test";
import TheCard from "./TheCard";

const FilterCardsDisplay = () => {
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
  }, []);

  return (
    <div className="card-display">
      <h2>Latest Events</h2>
      {/* <div className="tags">
        {tags.map((tag) => (
          <span className="tag tech-tag" key={tag}>
            {tag}
          </span>
        ))}
        <span className="material-symbols-rounded cancel">cancel</span>
      </div> */}

      {/* cards go here */}
      <div className="cards">
        {allEvents.map((event) => {
          return (
            <TheCard
              title={event.title}
              date={event.date}
              shortDesc={event.shortDesc}
              key={event._id}
              bannerUrl={event.bannerUrl}
              id={event._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FilterCardsDisplay;
