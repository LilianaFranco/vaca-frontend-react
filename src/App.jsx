import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import RoutesFile from "./RoutesFile";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Link to="/">SignUp</Link>
          <Link to="/login">LogInPage</Link>
          <Link to="/groups">Groups</Link>
          <Link to="/friends">Friends</Link>
          <Link to="/expenses">Expenses</Link>
          <RoutesFile />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
