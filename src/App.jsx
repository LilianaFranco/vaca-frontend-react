import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SignUpPage } from "./pages/signUp/SignUpPage/";
import { LogInPage } from "./pages/logIn/LogInPage";
import { GroupsPage } from "./pages/groups/GroupsPage";
import { FriendsPage } from "./pages/friends/FriendsPage";
import { ExpensesPage } from "./pages/expenses/ExpensesPage";

function App() {
  return (
    <>
      <BrowserRouter>
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
