import "./filterCardsDisplay.scss";
import { tags, events } from "./test";
import TheCard from "./TheCard";

const FilterCardsDisplay = () => {
  return (
    <div className="card-display">
      <h2>Latest Events</h2>
      <div className="tags">
        {tags.map((tag) => (
          <span className="tag tech-tag" key={tag}>
            {tag}
          </span>
        ))}
        <span className="material-symbols-rounded cancel">cancel</span>
      </div>

      {/* cards go here */}
      <div className="cards">
        {events.map((event) => {
          return (
            <TheCard
              name={event.name}
              date={event.date}
              status={event.status}
              oneLiner={event.oneLiner}
              key={event.name + event.oneLiner}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FilterCardsDisplay;
