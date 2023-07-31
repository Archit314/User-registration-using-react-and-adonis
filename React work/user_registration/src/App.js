import "./App.css";
import Home from "./components/Home";
import UserSignupForm from "./components/UserSignupForm";
import UserSignInForm from "./components/UserSignInForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route
            exact
            path="/sign-up"
            element={<UserSignupForm path="/sign-in" />}
          />
          <Route
            exact
            path="/sign-in"
            element={<UserSignInForm path="/sign-up" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
