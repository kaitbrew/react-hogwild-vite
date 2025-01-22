import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import hogs from "../porkers_data";

describe("Hog App", () => {
  it("displays a tile for each hog on load", () => {
    render(<App />);
    hogs.forEach((hog) => {
      expect(screen.getByText(hog.name)).toBeInTheDocument();
      const img = screen.getByAltText("Photo of " + hog.name);
      expect(img).toHaveAttribute("src", hog.image);
    });
  });

  it("displays additional hog details when a tile is clicked", () => {
    render(<App />);
    const index = Math.floor(Math.random() * 12)
    const hogTile = screen.getByText(hogs[index].name);
    hogTile.parentElement.parentElement
    fireEvent.click(hogTile);

    expect(screen.getByText(`Specialty: ${hogs[index].specialty}`)).toBeInTheDocument();
    expect(screen.getByText(hogs[index].weight)).toBeInTheDocument();
    expect(screen.getByText(hogs[index].greased ? "Greased" : "Nongreased")).toBeInTheDocument();
    expect(screen.getByText(hogs[index]["highest medal achieved"])).toBeInTheDocument();
  });
});
