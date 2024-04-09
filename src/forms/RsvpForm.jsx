/* eslint-disable react/prop-types */
import "./forms.scss";
import axios from "axios";

const RsvpForm = ({ close, doClose, id }) => {
  return (
    <div className="rsvp-container">
      <form
        className="rsvp-form"
        onSubmit={async (e) => {
          e.preventDefault();
          // form data logic goes here
          const formData = new FormData(e.target);
          const data = {
            fname: formData.get("fname"),
            lname: formData.get("lname"),
            email: formData.get("email"),
          };

          // api fetching logic goes here.
          const baseUrl = "https://raghu-clubs.onrender.com";
          const apiRes = await axios.put(baseUrl + `/event/${id}/rsvp`, data);

          if (apiRes.status) {
            alert("You have RSVP'd successfully! ✅");
            doClose(!close);
          } else {
            alert("Oops, couldn't RSVP at the moment. Please try again.");
          }
        }}
      >
        <span
          className="material-symbols-rounded"
          onClick={() => {
            doClose(!close);
          }}
        >
          cancel
        </span>

        <p>RSVP for the event</p>

        <input
          type="text"
          name="fname"
          id="fname"
          placeholder="First Name"
          required
        />

        <input
          type="text"
          name="lname"
          id="lname"
          placeholder="Last Name"
          required
        />

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />

        <button>RSVP</button>
      </form>
    </div>
  );
};

export default RsvpForm;
