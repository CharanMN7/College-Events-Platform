/* eslint-disable react/prop-types */
import "./PersonCard.scss";
const PersonCard = ({ name, title, img }) => {
  return (
    <figure className="person-card">
      <img src={img} alt="" className="person-pic" />
      <figcaption>
        <span className="person-name">{name}</span>
        <span className="person-title">{title}</span>
      </figcaption>
    </figure>
  );
};

export default PersonCard;
