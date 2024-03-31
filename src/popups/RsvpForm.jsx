import "./popups.scss";

const RsvpForm = () => {
  return (
    <form action="" className="rsvp-form">
      <span className="material-symbols-rounded">cancel</span>
      <p>RSVP for the event</p>
      <input type="text" name="name" id="" placeholder="Name" />
      <input type="email" name="email" id="" placeholder="Email" />
      <button>RSVP</button>
    </form>
  );
};

export default RsvpForm;
