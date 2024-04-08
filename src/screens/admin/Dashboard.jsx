import "./Dashboard.scss";
import NavBar from "../../reusableComponents/NavBar/NavBar";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";

const data = [
  {
    eventId: "23rtyrf",
    title: "Sparks 2024",
    date: "April 30, 2024 5:30 PM",
    shortDesc: "Let the sparks of 2024 light up your future!",
  },
  {
    eventId: "34retf",
    title: "GDSC irl2",
    date: "March 31, 2024 17:00",
    shortDesc: "We have a lot to catch up on, developers, ASSEMBLE!",
  },
  {
    eventId: "drfvgaw31",
    title: "Hackoverflow 2.0",
    date: "March 26, 2024 20:0",
    shortDesc: "Calling all hackers for a 3 day full-time battle!",
  },
];

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="all-events">
        <div className="heading-part">
          <h1>All Events</h1>
          <Link to="/admin/create-event">Create Event</Link>
        </div>

        <div className="events-list">
          {data.map((event) => (
            <EventCard
              title={event.title}
              shortDesc={event.shortDesc}
              date={event.date}
              key={event.eventId}
              id={event.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Dashboard;
