import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import RoutesFile from "./RoutesFile";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Theme";
import NavBar from "./layout/navbar/NavBar";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <NavBar />
          <RoutesFile />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
