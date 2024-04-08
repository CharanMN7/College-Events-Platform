import { Link } from "react-router-dom";
import { writeDate, getStatus } from "../../utils/dateAndStatus";

/* eslint-disable react/prop-types */
const EventCard = ({ title, shortDesc, date, id }) => {
  return (
    <Link className="the-event" to={`/admin/event/:id`}>
      <div className="left-details">
        <h2>{title}</h2>
        <p>{shortDesc}</p>
      </div>

      <div className="right-details">
        <span className={getStatus(date) + "-dark"}>{getStatus(date)}</span>
        <span className="date-dark">{writeDate(date)}</span>
      </div>
    </Link>
  );
};
export default EventCard;
