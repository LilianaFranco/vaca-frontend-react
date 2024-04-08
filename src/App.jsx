import "./App.css";
import RoutesFile from "./RoutesFile";
import NavBar from "./components/layout/navbar/NavBar";

function App() {
  return (
    <>
      <div id="content">
        <NavBar />
        <RoutesFile />
      </div>
    </>
  );
}

export default App;
