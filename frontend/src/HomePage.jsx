import { useState } from "react";
import {
  Search,
  MapPin,
  CalendarDays,
  ArrowRight,
  Plus,
  ShieldCheck,
  HeartHandshake,
  Bell,
  PackageSearch,
  CheckCircle2,
  X,
  Menu,
  Sparkles,
} from "lucide-react";

import "./App.css";

const initialItems = [
  {
    id: 1,
    name: "Black Leather Wallet",
    category: "Accessories",
    location: "NSBM Green University",
    date: "Nov 08, 2026",
    type: "Lost",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600",
  },
  {
    id: 2,
    name: "Silver Wrist Watch",
    category: "Accessories",
    location: "Colombo City Centre",
    date: "Nov 09, 2026",
    type: "Found",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
  },
  {
    id: 3,
    name: "Blue Backpack",
    category: "Bags",
    location: "Maharagama",
    date: "Nov 10, 2026",
    type: "Lost",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    category: "Electronics",
    location: "Homagama",
    date: "Nov 10, 2026",
    type: "Found",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      activeFilter === "All" || item.type === activeFilter;

    return matchesSearch && matchesFilter;
  });

  const handleReport = (e) => {
    e.preventDefault();

    const form = e.target;

    const newItem = {
      id: Date.now(),
      name: form.itemName.value,
      category: form.category.value,
      location: form.location.value,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      type: form.type.value,
      image:
        form.image.value ||
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=600",
    };

    setItems((previous) => [newItem, ...previous]);
    setShowModal(false);
    setActiveFilter("All");
    setSearch("");

    form.reset();

    document.getElementById("items")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">

      {/* NAVIGATION */}

      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            <span className="logo-icon">
              <PackageSearch size={25} />
            </span>
            Find<span>It.</span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle navigation"
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>

          <nav className={mobileMenu ? "nav-links active" : "nav-links"}>
            <a href="#home" onClick={() => setMobileMenu(false)}>Home</a>
            <a href="#items" onClick={() => setMobileMenu(false)}>Lost & Found</a>
            <a href="#how-it-works" onClick={() => setMobileMenu(false)}>How It Works</a>
            <a href="#about" onClick={() => setMobileMenu(false)}>About</a>
          </nav>

          <div className="nav-actions">
            <button className="login-btn">Log In</button>
            <button className="register-btn">Sign Up</button>
          </div>

        </div>
      </header>

      {/* HERO SECTION */}

      <section className="hero" id="home">

        <div className="hero-container">

          <div className="hero-content">

            <div className="hero-badge">
              <Sparkles size={15} />
              Reconnect. Recover. Reunite.
            </div>

            <h1>
              Lost Something?
              <br />
              <span>Let's Find It.</span>
            </h1>

            <p>
              Lost something important or found something that belongs
              to someone else? FindIt helps bring people and their
              belongings back together.
            </p>

            <div className="hero-buttons">

              <a href="#items" className="primary-btn">
                <Search size={18} />
                Find an Item
              </a>

              <button
                className="secondary-btn"
                onClick={() => setShowModal(true)}
              >
                <Plus size={19} />
                Report an Item
              </button>

            </div>

            <div className="hero-trust">
              <ShieldCheck size={19} />
              <span>A simple way to help your community.</span>
            </div>

          </div>

          <div className="hero-visual">

            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900"
                alt="Personal belongings"
              />

              <div className="floating-card floating-card-one">
                <div className="floating-icon green">
                  <CheckCircle2 size={21} />
                </div>
                <div>
                  <strong>Found it!</strong>
                  <small>Ready to reunite</small>
                </div>
              </div>

              <div className="floating-card floating-card-two">
                <div className="floating-icon blue">
                  <HeartHandshake size={21} />
                </div>
                <div>
                  <strong>Help someone</strong>
                  <small>Make a difference</small>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="stats-section">

        <div className="stats-container">

          <div className="stat-item">
            <div className="stat-icon">
              <PackageSearch />
            </div>
            <div>
              <h3>Find Items</h3>
              <p>Search reported belongings</p>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <HeartHandshake />
            </div>
            <div>
              <h3>Help Others</h3>
              <p>Return found belongings</p>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <Bell />
            </div>
            <div>
              <h3>Stay Updated</h3>
              <p>Get important updates</p>
            </div>
          </div>

        </div>

      </section>

      {/* ITEMS SECTION */}

      <section className="items-section" id="items">

        <div className="section-container">

          <div className="section-heading">

            <div>
              <span className="section-label">EXPLORE FINDIT</span>
              <h2>Recently Reported Items</h2>
              <p>
                Browse recently lost and found items in your community.
              </p>
            </div>

            <button
              className="report-small-btn"
              onClick={() => setShowModal(true)}
            >
              <Plus size={18} />
              Report an Item
            </button>

          </div>

          {/* SEARCH */}

          <div className="search-box">

            <div className="search-input">
              <Search size={21} />
              <input
                type="text"
                placeholder="Search by item name, category or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <button className="search-button">
              Search
            </button>

          </div>

          {/* FILTERS */}

          <div className="filter-row">

            <div className="filter-buttons">

              {["All", "Lost", "Found"].map((filter) => (
                <button
                  key={filter}
                  className={
                    activeFilter === filter
                      ? "filter-btn selected"
                      : "filter-btn"
                  }
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter === "All" ? "All Items" : `${filter} Items`}
                </button>
              ))}

            </div>

            <span className="results-count">
              {filteredItems.length} items found
            </span>

          </div>

          {/* ITEM CARDS */}

          <div className="items-grid">

            {filteredItems.map((item) => (

              <article className="item-card" key={item.id}>

                <div className="item-image">

                  <img src={item.image} alt={item.name} />

                  <span
                    className={
                      item.type === "Lost"
                        ? "item-badge lost"
                        : "item-badge found"
                    }
                  >
                    {item.type}
                  </span>

                </div>

                <div className="item-details">

                  <span className="item-category">
                    {item.category}
                  </span>

                  <h3>{item.name}</h3>

                  <div className="item-info">
                    <MapPin size={16} />
                    <span>{item.location}</span>
                  </div>

                  <div className="item-info">
                    <CalendarDays size={16} />
                    <span>{item.date}</span>
                  </div>

                  <button
                    className="view-details-btn"
                    onClick={() =>
                      alert(
                        `${item.name}\n${item.type} item\nLocation: ${item.location}`
                      )
                    }
                  >
                    View Details
                    <ArrowRight size={17} />
                  </button>

                </div>

              </article>

            ))}

          </div>

          {filteredItems.length === 0 && (
            <div className="empty-state">
              <PackageSearch size={45} />
              <h3>No items found</h3>
              <p>Try another search term or change the filter.</p>
            </div>
          )}

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="how-section" id="how-it-works">

        <div className="section-container">

          <div className="center-heading">
            <span className="section-label">SIMPLE PROCESS</span>
            <h2>How FindIt Works</h2>
            <p>
              Getting your belongings back is easier than you think.
            </p>
          </div>

          <div className="steps-grid">

            <div className="step-card">

              <div className="step-number">01</div>

              <div className="step-icon">
                <PackageSearch size={29} />
              </div>

              <h3>Report an Item</h3>

              <p>
                Report something you have lost or an item you have found.
                Add details to help others identify it.
              </p>

            </div>

            <div className="step-card">

              <div className="step-number">02</div>

              <div className="step-icon">
                <Search size={29} />
              </div>

              <h3>Search & Connect</h3>

              <p>
                Browse reported items and find possible matches using
                our search features.
              </p>

            </div>

            <div className="step-card">

              <div className="step-number">03</div>

              <div className="step-icon">
                <HeartHandshake size={29} />
              </div>

              <h3>Reunite Together</h3>

              <p>
                Connect with the person who found your item and
                arrange a safe return.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section" id="about">

        <div className="cta-container">

          <div>
            <span className="cta-label">BE PART OF THE COMMUNITY</span>
            <h2>Every Lost Item Deserves a Second Chance.</h2>
            <p>
              Join FindIt and help make lost belongings found again.
              Your small action can make someone's day.
            </p>
          </div>

          <button
            className="cta-button"
            onClick={() => setShowModal(true)}
          >
            Report an Item
            <ArrowRight size={19} />
          </button>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-brand">

            <a href="#home" className="logo">
              <span className="logo-icon">
                <PackageSearch size={25} />
              </span>
              Find<span>It.</span>
            </a>

            <p>
              Helping people reconnect with their lost belongings
              and making communities more helpful.
            </p>

          </div>

          <div className="footer-links">

            <div>
              <h4>Explore</h4>
              <a href="#home">Home</a>
              <a href="#items">Lost Items</a>
              <a href="#items">Found Items</a>
            </div>

            <div>
              <h4>About</h4>
              <a href="#about">About FindIt</a>
              <a href="#how-it-works">How It Works</a>
            </div>

            <div>
              <h4>Get Started</h4>
              <a href="#items">Find an Item</a>
              <button onClick={() => setShowModal(true)}>
                Report an Item
              </button>
            </div>

          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 FindIt. All rights reserved.</p>
          <p>Made with care for everyone.</p>
        </div>

      </footer>

      {/* REPORT ITEM MODAL */}

      {showModal && (

        <div
          className="modal-overlay"
          onClick={() => setShowModal(false)}
        >

          <div
            className="report-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="modal-header">

              <div>
                <span className="section-label">FINDIT COMMUNITY</span>
                <h2>Report an Item</h2>
                <p>Share the details of your lost or found item.</p>
              </div>

              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                <X />
              </button>

            </div>

            <form onSubmit={handleReport}>

              <label>Item Name</label>
              <input
                name="itemName"
                type="text"
                placeholder="Enter item name"
                required
              />

              <label>Report Type</label>
              <select name="type" required>
                <option value="Lost">I lost an item</option>
                <option value="Found">I found an item</option>
              </select>

              <label>Category</label>
              <select name="category" required>
                <option value="">Select a category</option>
                <option>Electronics</option>
                <option>Accessories</option>
                <option>Bags</option>
                <option>Documents</option>
                <option>Clothing</option>
                <option>Other</option>
              </select>

              <label>Location</label>
              <input
                name="location"
                type="text"
                placeholder="Where was it lost or found?"
                required
              />

              <label>Image URL (Optional)</label>
              <input
                name="image"
                type="url"
                placeholder="Paste an image URL"
              />

              <button type="submit" className="submit-report">
                Submit Report
                <ArrowRight size={18} />
              </button>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;