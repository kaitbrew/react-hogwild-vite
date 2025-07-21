import { useState } from "react";

function HogCard({ hog }) {
  const [showDetails, setShowDetails] = useState(false);
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  return (
    <div
      aria-label="hog card"
      className="ui card"
      onClick={() => setShowDetails(!showDetails)}
      style={{ cursor: "pointer" }}
    >
      <div className="image">
        <img src={hog.image} alt={`Photo of ${hog.name}`} />
      </div>
      <div className="content">
        <h3 className="header">{hog.name}</h3>
        {showDetails && (
          <div className="description">
            <p>Specialty: {hog.specialty}</p>
            <p>{hog.greased ? "Greased" : "Nongreased"}</p>
            <p>{hog.weight}</p>
            <p>{hog["highest medal achieved"]}</p>
          </div>
        )}
        <button
          className="ui red button"
          onClick={(e) => {
            e.stopPropagation();
            setHidden(true);
          }}
        >
          Hide Me
        </button>
      </div>
    </div>
  );
}

export default HogCard;