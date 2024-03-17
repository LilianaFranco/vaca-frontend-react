import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import SignUpPage from "./pages/signUp/SignUpPage/";
import LogInPage from "./pages/logIn/LogInPage";
import ExpensesPage from "./pages/expenses/ExpensesPage";
import FriendsPage from "./pages/friends/FriendsPage";
import GroupsPage from "./pages/groups/GroupsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">SignUp</Link>
        <Link to="/login">LogInPage</Link>
        <Link to="/groups">Groups</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/expenses">Expenses</Link>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
