import "./Dashboard.scss";
import { useState, useEffect } from "react";
import NavBar from "../../reusableComponents/NavBar/NavBar";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import axios from "axios";
import LoginContext from "../../utils/LoginContext";
import { useContext } from "react";

const Dashboard = () => {
  const { loginStatus, theToken } = useContext(LoginContext);
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const fetchAllEvents = async () => {
      const apiRes = await axios.post(
        "https://raghu-clubs.onrender.com/admin/all-events",
        { token: theToken[0] },
      );

      const events = await apiRes.data;
      setAllEvents(events);
    };

    fetchAllEvents();
  }, []);

  return (
    <>
      <NavBar />
      <div className="all-events">
        <div className="heading-part">
          <h1>All Events</h1>
          <Link to="/admin/create-event">Create Event</Link>
        </div>

        <div className="events-list">
          {allEvents.map((event) => (
            <EventCard
              title={event.title}
              shortDesc={event.shortDesc}
              date={event.date}
              key={event._id}
              id={event._id}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Dashboard;
