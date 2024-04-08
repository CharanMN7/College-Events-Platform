import "./EventPage.scss";
import { data } from "./test";
import NavBar from "../../reusableComponents/NavBar/NavBar";
import { useParams } from "react-router-dom";

const EventPage = () => {
  const { id } = useParams();

  return (
    <>
      <NavBar />
      <section className="event-page">
        <img src={data.banner} alt="" className="event-banner" />
        <h2 className="event-name">{data.name}</h2>
        <p className="event-one-liner">{data.oneLiner}</p>
        <div className="date-rsvp">
          <span className="event-date">
            <span className="material-symbols-rounded">event</span> {data.date}
          </span>
          <button className="event-rsvp">RSVP</button>
        </div>
        <h3 className="event-about">About</h3>
        <div className="event-tags">
          {data.tags.map((tag, i) => (
            <span className="event-tag" key={tag + i}>
              {tag}
            </span>
          ))}
        </div>
        <p className="event-desc">{data.description}</p>
      </section>
    </>
  );
};

export default EventPage;
