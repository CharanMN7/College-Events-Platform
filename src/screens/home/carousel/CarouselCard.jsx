/* eslint-disable react/prop-types */
import "./Carousel.scss";

const CarouselCard = ({ name, date, oneLiner, status, bgImg }) => {
  const eventTagClass = `carousel-event-tag ${status}`;
  const img = `${bgImg}`;
  return (
    <div className="carousel-card">
      <img src={img} alt="" />
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
