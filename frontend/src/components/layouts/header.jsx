import "./Header.css"

export function Header({ onCreateNew }) {
  return (
    <header className="header">
      <div className="header__left">
        <span className="header__greeting">⭐ Good morning, Sujith</span>
        <span className="header__date">Tue, Jan 25</span>
      </div>
      <div className="header__right">
        <div className="search">
          <svg className="search__icon" /* Add search icon SVG */></svg>
          <input type="search" placeholder="Search by remarks" className="search__input" />
        </div>
        <button className="btn btn-primary header__create-btn" onClick={onCreateNew}>
          <svg className="btn-icon" /* Add plus icon SVG */></svg>
          Create new
        </button>
        <button className="btn btn-ghost header__notification-btn">
          <svg className="btn-icon" /* Add bell icon SVG */></svg>
        </button>
        <button className="header__user-btn">SU</button>
      </div>
    </header>
  )
}

