/* eslint-disable react/prop-types */
import "./Carousel.scss";
import bgImg from "./background.jpg";

const CarouselCard = ({ name, date, oneLiner, status }) => {
  const eventTagClass = `carousel-event-tag ${status}`;
  return (
    <div
      className="carousel-card"
      style={{
        background: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <span className={eventTagClass}>
        <span className="material-symbols-rounded">radio_button_unchecked</span>{" "}
        {status}
      </span>
      <div>
        <span className="carousel-event-date date">
          <span className="material-symbols-rounded">event</span> {date}
        </span>
        <h2 className="carousel-event-name">{name}</h2>
        <p className="carousel-one-liner" title={oneLiner}>
          {oneLiner}
        </p>
      </div>
    </div>
  );
};
export default CarouselCard;
