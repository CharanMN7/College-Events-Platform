import { useState } from "react";
import "./label.scss";

export const AllLabels = ["Technical", "Sports", "Culturals"];
const Tags = ["Live", "Upcoming", "Completed"];

const Labels = () => {
  const [displayFilters, setDisplayFilter] = useState(false);
  return (
    <div className="label">
      {AllLabels.map((label, index) => {
        return (
          <button key={index} className="label-btn">
            {label}
          </button>
        );
      })}
      <div>
        <button onClick={() => setDisplayFilter(!displayFilters)}>
          <span className="material-symbols-rounded">filter_alt</span>
        </button>
        {displayFilters && (
          <div className="filter-menu">
            {Tags.map((tag, index) => {
              return (
                <button key={index} className="label-btn">
                  {tag}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Labels;
