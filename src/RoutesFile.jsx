import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "src/components/pages/signUp/SignUpPage";
import LogInPage from "src/components/pages/logIn/LogInPage";
import ExpensesPage from "src/components/pages/expenses/ExpensesPage";
import FriendsPage from "src/components/pages/friends/FriendsPage";
import GroupsPageContainer from "src/components/pages/groups/GroupsPage.container";
import GroupDetailContainer from "src/components/pages/groups/GroupDetail.container";

const RoutesFile = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/groups" element={<GroupsPageContainer />} />
      <Route path="/groups/:id" element={<GroupDetailContainer />} />
      <Route path="/friends" element={<FriendsPage />} />
      <Route path="/expenses" element={<ExpensesPage />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default RoutesFile;
