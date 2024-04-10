/* eslint-disable react/prop-types */
import "./CreateEvent.scss";
import NavBar from "../../reusableComponents/NavBar/NavBar";
import LoginContext from "../../utils/LoginContext";
import { useContext } from "react";
import { writeDate } from "../../utils/dateAndStatus";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateEvent = ({ operation }) => {
  const { loginStatus, theToken } = useContext(LoginContext);
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="create-event">
        <div className="heading-part">
          <h1>{operation} Event</h1>
          <button form="de-form">{operation} Event</button>
        </div>
        <form
          id="de-form"
          onSubmit={(e) => {
            /* Form code goes here */
            e.preventDefault();
            const formData = new FormData(e.target);
            const theDate = formData.get("date") + " " + formData.get("time");
            const data = {
              token: theToken[0],
              title: formData.get("title"),
              about: formData.get("about"),
              attendees: [],
              bannerUrl: formData.get("bannerUrl"),
              link: formData.get("eventLink"),
              mode: formData.get("mode"),
              rsvp: formData.get("rsvp"),
              shortDesc: formData.get("shortDesc"),
              tag: formData.get("tag"),
              where: "",
              date: theDate,
            };
            axios
              .post("https://raghu-clubs.onrender.com/admin/create-event", data)
              .then((res) => {
                console.log(res.status);
                if (res.status < 300) {
                  alert("Successfully Created the Event!");
                  navigate("/admin");
                }
              });
          }}
        >
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" required />

          <label htmlFor="shortDesc">Short Description</label>
          <textarea name="shortDesc" id="shortDesc" required></textarea>

          <div className="category">
            <span>Category: </span>
            <input
              type="radio"
              name="tag"
              id="technical"
              value="technical"
              defaultChecked
            />
            <label htmlFor="technical">Technical</label>

            <input
              type="radio"
              name="tag"
              id="non-technical"
              value="non-technical"
            />
            <label htmlFor="non-technical">Non-Technical</label>

            <input type="radio" name="tag" id="sports" value="sports" />
            <label htmlFor="sports">Sports</label>
          </div>

          <label htmlFor="the-date">Date: </label>
          <input type="date" name="date" id="the-date" required />

          <label htmlFor="the-time">Time: </label>
          <input type="time" name="time" id="the-time" required />

          <div className="rsvp-method">
            <p>Choose the RSVP method: </p>

            <input
              type="radio"
              name="rsvp-method"
              id="use-rc"
              value="true"
              defaultChecked
            />
            <label htmlFor="use-rc">Use Raghu Clubs</label>
            <br />
            <input type="radio" name="rsvp-method" id="use-ext" disabled />
            <label htmlFor="use-ext">Use External RSVP</label>
          </div>

          <label htmlFor="bannerUrl">Banner URL</label>
          <input type="text" name="bannerUrl" id="bannerUrl" required />

          <div className="modes">
            <span>Mode: </span>
            <input type="radio" name="mode" id="hybrid" value="Hybrid" />
            <label htmlFor="hybrid">Hybrid</label>

            <input
              type="radio"
              name="mode"
              id="virtual"
              value="Virtual"
              defaultChecked
            />
            <label htmlFor="virtual">Virtual</label>

            <input type="radio" name="mode" id="inperson" value="In-Person" />
            <label htmlFor="inperson">In-Person</label>
          </div>

          <label htmlFor="about">About</label>
          <textarea name="about" id="about" required></textarea>

          <label htmlFor="eventLink">Link to virtual event: </label>
          <input type="text" name="eventLink" id="eventLink" />
        </form>
      </div>
    </>
  );
};

export default CreateEvent;
