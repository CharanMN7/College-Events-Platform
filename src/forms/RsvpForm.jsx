/* eslint-disable react/prop-types */
import "./forms.scss";

const RsvpForm = ({ close, doClose }) => {
  return (
    <div className="rsvp-container">
      <form className="rsvp-form">
        <span
          className="material-symbols-rounded"
          onClick={() => {
            doClose(!close);
          }}
        >
          cancel
        </span>

        <p>RSVP for the event</p>

        <input type="text" name="fname" id="" placeholder="First Name" />

        <input type="text" name="lname" id="" placeholder="Last Name" />

        <input type="email" name="email" id="" placeholder="Email" />

        <button>RSVP</button>
      </form>
    </div>
  );
};

export default RsvpForm;
