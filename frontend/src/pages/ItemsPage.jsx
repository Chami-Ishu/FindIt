import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { itemsData } from "../data/itemsData";
import ItemCard from "../components/ItemCard";
import "./ItemsPage.css";

function ItemsPage({ type }) {
  const isLost = type === "Lost";

  const filteredItems = itemsData.filter(
    (item) => item.type === type
  );

  return (
    <div className="items-page">

      <nav className="items-navbar">
        <Link to="/" className="items-logo">
          Find<span>It.</span>
        </Link>

        <Link to="/" className="items-home-link">
          <ArrowLeft size={17} />
          Back to Home
        </Link>
      </nav>

      <section className="items-hero">
        <div className="items-hero-content">

          <span className={`items-label ${isLost ? "lost-label" : "found-label"}`}>
            {isLost ? "LOST SOMETHING?" : "FOUND SOMETHING?"}
          </span>

          <h1>
            {isLost
              ? "Lost Items"
              : "Found Items"}
          </h1>

          <p>
            {isLost
              ? "Browse reported lost belongings and help their owners find them."
              : "Explore found belongings and help reunite them with their owners."}
          </p>

          <div className="items-count">
            {filteredItems.length} {type.toLowerCase()} items reported
          </div>

        </div>
      </section>

      <section className="items-section">

        <div className="items-section-heading">
          <div>
            <h2>
              {isLost ? "Recently Lost Items" : "Recently Found Items"}
            </h2>

            <p>
              Browse the latest reported items.
            </p>
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="items-grid">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="no-items">
            <Search size={35} />
            <h3>No items available</h3>
            <p>There are no reported items at the moment.</p>
          </div>
        )}

      </section>

      <footer className="items-footer">
        <p>FindIt © 2026 | Bringing belongings back home.</p>
      </footer>

    </div>
  );
}

export default ItemsPage;