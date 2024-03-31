import EventPpl from "./EventPpl";
import "./EventPage.scss";
import { data, organizers } from "./test";

const EventPage = () => {
  return (
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
      <div className="event-all-ppl">
        <EventPpl heading="Speakers" ppl={data.speakers} />
        <EventPpl heading="Facilitators" ppl={data.facilitators} />
        <EventPpl heading="Organizers" ppl={organizers} />
      </div>
    </section>
  );
};

export default EventPage;
