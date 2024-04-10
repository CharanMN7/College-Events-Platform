/* eslint-disable react/prop-types */
import "./Dashboard.scss";

const Attendee = ({ name, email, date, cls }) => {
  return (
    <div className={cls}>
      <span>{name}</span>
      <span>{email}</span>
    </div>
  );
};
export default Attendee;
