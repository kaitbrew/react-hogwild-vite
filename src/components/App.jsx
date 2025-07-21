import { useState } from "react";
import Nav from "./Nav";
import FilterBar from "./FilterBar";
import HogList from "./HogList";
import HogForm from "./HogForm";
import hogData from "../porkers_data.js";


function App() {
  const [hogs, setHogs] = useState(hogData);
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  const handleAddHog = (newHog) => {
    setHogs([...hogs, newHog]);
  };

  const filteredHogs = hogs
    .filter((hog) => !showGreased || hog.greased)
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "weight") return a.weight - b.weight;
      return 0;
    });

  return (
    <div className="App">
      <Nav />
      <FilterBar
        showGreased={showGreased}
        setShowGreased={setShowGreased}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <HogForm onAddHog={handleAddHog} />
      <HogList hogs={filteredHogs} />
    </div>
  );
}

export default App;