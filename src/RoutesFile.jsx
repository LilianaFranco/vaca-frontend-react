import React from "react";
import { Route, Routes } from "react-router-dom";
import ExpensesPage from "src/pages/expenses/ExpensesPage";
import FriendsPage from "src/pages/friends/FriendsPage";
import GroupsPageContainer from "src/pages/groups/GroupsPage.container";
import GroupDetailPageContainer from "./pages/groups/GroupDetailPage.container";
import SignUpPageContainer from "./pages/signUp/SignUpPage.container";
import LogInPageContainer from "src/pages/logIn/LogInPage.container";
import ProtectedRoute from "./components/auth/ProtectedRoute";

const RoutesFile = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPageContainer />} />
      <Route path="/login" element={<LogInPageContainer />} />
      <Route
        path="/groups"
        element={
          <ProtectedRoute>
            <GroupsPageContainer />
          </ProtectedRoute>
        }
      />
      <Route
        path="/groups/:id"
        element={
          <ProtectedRoute>
            <GroupDetailPageContainer />
          </ProtectedRoute>
        }
      />
      <Route
        path="/friends"
        element={
          <ProtectedRoute>
            <FriendsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/expenses"
        element={
          <ProtectedRoute>
            <ExpensesPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default RoutesFile;
