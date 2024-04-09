import "./EventPage.scss";
import NavBar from "../../reusableComponents/NavBar/NavBar";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchEvent from "./fetchEvent";
import { getStatus, writeDate } from "../../utils/dateAndStatus";

const EventPage = () => {
  const { id } = useParams();
  const results = useQuery(["client/event", id], fetchEvent);
  const event = results?.data ?? {};

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <section className="event-page">
        <img src={event.bannerUrl} alt="" className="event-banner" />
        <h2 className="event-name">{event.title}</h2>
        <p className="event-one-liner">{event.shortDesc}</p>
        <div className="date-rsvp">
          <span className="event-date">
            <span className="material-symbols-rounded">event</span>{" "}
            {writeDate(event.date)}
          </span>
          <button
            className="event-rsvp"
            disabled={
              getStatus(event.date) === "completed" ||
              getStatus(event.date) === "live"
            }
          >
            RSVP
          </button>
        </div>
        <h3 className="event-about">About</h3>
        <div className="event-tags">
          <span className="event-tag">{event.tag}</span>
        </div>
        <p className="event-desc">{event.about}</p>
      </section>
    </>
  );
};

export default EventPage;
