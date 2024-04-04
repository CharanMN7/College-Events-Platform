/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TheCard = ({ name, date, status, oneLiner }) => {
  const statusClass = `card-status ${status}-dark`;

  return (
    <div key={name + date} className="card">
      <span className={statusClass}>{status}</span>
      <span className="card-date date-dark">{date}</span>
      <h3 className="card-event">{name}</h3>
      <p className="card-one-liner">{oneLiner}</p>
      <Link to="/event" className="view-event-btn">
        <span>View Event</span>
        <span className="material-symbols-rounded">chevron_right</span>
      </Link>
    </div>
  );
};
export default TheCard;
