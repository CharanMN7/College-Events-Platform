import { useContext, useState, useEffect } from "react";
import NavBar from "../../reusableComponents/NavBar/NavBar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Dashboard.scss";
import Attendee from "./Attendee";
import LoginContext from "../../utils/LoginContext";

const ViewEvent = () => {
  const { id } = useParams();
  const { loginStatus, theToken } = useContext(LoginContext);
  const [theEvent, setTheEvents] = useState({});
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    const fetchTheEvent = async () => {
      const apiRes = await axios.post(
        `https://raghu-clubs.onrender.com/admin/event/${id}`,
        { token: theToken[0] },
      );

      const event = await apiRes.data;
      setTheEvents(event);
      setAttendees(event.attendees);
    };

    fetchTheEvent();
  }, []);

  return (
    <>
      <NavBar />
      <div className="view-event">
        <div className="the-event">
          <div>
            <h1>{theEvent.title}</h1>
            <p>{theEvent.shortDesc}</p>
            <Link className="view-event-btn">
              <span>View Event</span>
              <span className="material-symbols-rounded">chevron_right</span>
            </Link>
          </div>
          <img src={theEvent.bannerUrl} alt={theEvent.name} />
        </div>

        <div className="heading-part">
          <h1>Attendees</h1>
          <Link>Update Event</Link>
        </div>

        <div className="attendees">
          <Attendee name="Name" email="Email" cls="attendee table-heading" />
          {attendees.map((person) => (
            <Attendee
              key={person.fname + person.lname}
              name={person.fname + " " + person.lname}
              email={person.email}
              cls="attendee"
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default ViewEvent;
