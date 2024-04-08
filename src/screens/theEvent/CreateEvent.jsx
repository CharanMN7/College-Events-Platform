/* eslint-disable react/prop-types */
import "./CreateEvent.scss";
import NavBar from "../../reusableComponents/NavBar/NavBar";

const CreateEvent = ({ operation }) => {
  return (
    <>
      <NavBar />
      <div className="create-event">
        <div className="heading-part">
          <h1>{operation} Event</h1>
          <button>{operation} Event</button>
        </div>
        <form action="">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />

          <label htmlFor="shortDesc">Short Description</label>
          <textarea name="shortDesc" id="shortDesc"></textarea>

          <div className="category">
            <span>Category: </span>
            <input type="radio" name="category" id="technical" />
            <label htmlFor="technical">Technical</label>

            <input type="radio" name="category" id="non-technical" />
            <label htmlFor="non-technical">Non-Technical</label>

            <input type="radio" name="category" id="sports" />
            <label htmlFor="sports">Sports</label>
          </div>

          <label htmlFor="the-date">Date: </label>
          <input type="date" name="date" id="the-date" />

          <label htmlFor="the-time">Time: </label>
          <input type="time" name="time" id="the-time" />

          <div className="rsvp-method">
            <p>Choose the RSVP method: </p>

            <input type="radio" name="rsvp-method" id="use-rc" />
            <label htmlFor="use-rc">Use Raghu Clubs</label>
            <br />
            <input type="radio" name="rsvp-method" id="use-ext" />
            <label htmlFor="use-ext">Use External RSVP</label>
          </div>

          <div className="modes">
            <span>Mode: </span>
            <input type="radio" name="mode" id="hybrid" />
            <label htmlFor="hybrid">Hybrid</label>

            <input type="radio" name="mode" id="virtual" />
            <label htmlFor="virtual">Virtual</label>

            <input type="radio" name="mode" id="inperson" />
            <label htmlFor="inperson">In-Person</label>
          </div>

          <label htmlFor="where">About</label>
          <textarea name="where" id="where"></textarea>

          <label htmlFor="eventLink">Link to virtual event: </label>
          <input type="text" name="eventLink" id="eventLink" />
        </form>
      </div>
    </>
  );
};

export default CreateEvent;
