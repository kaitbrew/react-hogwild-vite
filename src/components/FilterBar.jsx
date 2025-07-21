function FilterBar({ showGreased, setShowGreased, sortBy, setSortBy }) {
  return (
    <div className="ui form" style={{ margin: "20px" }}>
      <div className="field">
        <label htmlFor="greased-checkbox">Greased Pigs Only?</label>
        <input
          id="greased-checkbox"
          type="checkbox"
          checked={showGreased}
          onChange={(e) => setShowGreased(e.target.checked)}
        />
      </div>
      <div className="field">
        <label htmlFor="sort-select">Sort by:</label>
        <select
          id="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="ui dropdown"
        >
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;