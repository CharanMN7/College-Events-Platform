import NavBar from "../reusableComponents/NavBar/NavBar";
import "./AllEvents.scss";
import { useState, useEffect } from "react";
import EventCard from "./EventCard";

const AllEvents = () => {
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
    <div>
      <NavBar />
      <div className="all-events-head">
        <h1>All Events</h1>
        <div className="big-events">
          {allEvents.map((event) => {
            return (
              <EventCard
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
    </div>
  );
};

export default AllEvents;
