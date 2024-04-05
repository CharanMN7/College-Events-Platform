import NavBar from "../../reusableComponents/NavBar/NavBar";
import { Link } from "react-router-dom";
import "./Dashboard.scss";
import Attendee from "./Attendee";

const ViewEvent = () => {
  const registered = [
    {
      name: "Charan Manikanta N",
      email: "myemail@gmail.com",
      date: "March 20, 2024",
    },
    {
      name: "Jimin Yeo",
      email: "myemail@gmail.com",
      date: "March 20, 2024",
    },
    {
      name: "Bruce Chan",
      email: "myemail@gmail.com",
      date: "March 20, 2024",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="view-event">
        <div className="the-event">
          <div>
            <h1>Event Title goes here</h1>
            <p>This is going to be a short desctiption of the event</p>
            <Link className="view-event-btn">
              <span>View Event</span>
              <span className="material-symbols-rounded">chevron_right</span>
            </Link>
          </div>
          <img
            src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>

        <div className="heading-part">
          <h1>Attendees</h1>
          <Link>Update Event</Link>
        </div>

        <div className="attendees">
          <Attendee
            name="Name"
            email="Email"
            date="Date"
            cls="attendee table-heading"
          />
          {registered.map((person, index) => (
            <Attendee
              key={person.charan + index}
              name={person.name}
              email={person.email}
              date={person.date}
              cls="attendee"
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default ViewEvent;
