import Filter from "./components/MacroComponents/Filter";
import Navbar from "./components/MacroComponents/Navbar";

export default function App() {
  return (
    <div className="overflow-x-hidden font-inter text-text_clr">
      <Navbar />
      <Filter />
    </div>
  );
}
