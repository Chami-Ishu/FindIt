import { MapPin, CalendarDays, ArrowUpRight } from "lucide-react";
import "./ItemCard.css";

function ItemCard({ item }) {
  const isLost = item.type === "Lost";

  const handleViewDetails = () => {
    alert(
      `${item.name}\n\n${item.description}\n\nLocation: ${item.location}`
    );
  };

  return (
    <div className="item-card">
      <div className="item-image-container">
        <img src={item.image} alt={item.name} />

        <span className={`item-badge ${isLost ? "lost" : "found"}`}>
          {item.type}
        </span>
      </div>

      <div className="item-card-content">
        <span className="item-category">{item.category}</span>

        <h3>{item.name}</h3>

        <p className="item-description">{item.description}</p>

        <div className="item-info">
          <span>
            <MapPin size={15} />
            {item.location}
          </span>

          <span>
            <CalendarDays size={15} />
            {item.date}
          </span>
        </div>

        <button
          className={`item-details-btn ${isLost ? "lost-btn" : "found-btn"}`}
          onClick={handleViewDetails}
        >
          View Details
          <ArrowUpRight size={17} />
        </button>
      </div>
    </div>
  );
}

export default ItemCard;