/* eslint-disable react/prop-types */
import PersonCard from "../../reusableComponents/PersonCard/PersonCard";
import "./EventPage.scss";

const EventPpl = ({ heading, ppl }) => {
  return (
    <div className="event-ppl">
      <h3>{heading}</h3>
      <div className="ppl-list">
        {ppl.map((person) => (
          <PersonCard
            name={person.name}
            title={person.title}
            img={person.img}
            key={person.name + person.title}
          />
        ))}
      </div>
    </div>
  );
};

export default EventPpl;
