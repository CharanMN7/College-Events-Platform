/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { getStatus, writeDate } from "../../../utils/dateAndStatus";

const TheCard = ({ title, date, shortDesc, bannerUrl, id }) => {
  const statusClass = `card-status ${getStatus(date)}-dark`;
  const eventPage = `/event/${id}`;

  return (
    <div className="card">
      <span className={statusClass}>{getStatus(date)}</span>
      <span className="card-date date-dark">{writeDate(date)}</span>
      <h3 className="card-event">{title}</h3>
      <p className="card-one-liner">{shortDesc}</p>
      <Link to={eventPage} className="view-event-btn">
        <span>View Event</span>
        <span className="material-symbols-rounded">chevron_right</span>
      </Link>
      <img src={bannerUrl} alt="" />
    </div>
  );
};
export default TheCard;
