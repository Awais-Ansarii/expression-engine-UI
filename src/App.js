import { AppContext } from "./utils/AppContext";
import { useContext } from "react";
import MainContainer from "./components/MainContainer";

function App() {
  const { theme } = useContext(AppContext);
  return (
    <div
      className={` full-height ${
        theme ? "bg-black text-white " : "bg-white text-dark "
      } `}
      style={{ minHeight: "100vh" }}
    >
      <MainContainer />
    </div>
  );
}

export default App;
