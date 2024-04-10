/* eslint-disable react/prop-types */
import { getStatus, writeDate } from "../../../utils/dateAndStatus";
import { Link } from "react-router-dom";
import "./Carousel.scss";

const CarouselCard = ({ title, date, shortDesc, bannerUrl, id }) => {
  const eventTagClass = `carousel-event-tag ${getStatus(date)}`;
  const img = `${bannerUrl}`;
  const eventPage = `/event/${id}`;

  return (
    <div className="carousel-card">
      <img src={img} alt="" />
      <span className={eventTagClass}>
        <span className="material-symbols-rounded">radio_button_unchecked</span>{" "}
        {getStatus(date)}
      </span>
      <div>
        <span className="carousel-event-date date">
          <span className="material-symbols-rounded">event</span>{" "}
          {writeDate(date)}
        </span>
        <h2 className="carousel-event-name">{title}</h2>
        <p className="carousel-one-liner" title={shortDesc}>
          {shortDesc}
        </p>
        <Link to={eventPage} className="view-event-btn btn-in-car">
          <span>View Event</span>
          <span className="material-symbols-rounded">chevron_right</span>
        </Link>
      </div>
    </div>
  );
};
export default CarouselCard;
