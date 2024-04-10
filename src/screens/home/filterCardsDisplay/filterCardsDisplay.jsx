import { useState, useEffect } from "react";
import "./filterCardsDisplay.scss";
import { Link } from "react-router-dom";
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
      <div className="filter-heading-part">
        <h2>Latest Events</h2>
        <Link to="/all-events">View All Events</Link>
      </div>
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
