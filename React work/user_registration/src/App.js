import "./App.css";
import NavBar from "./components/NavBar";
import UserSignupForm from "./components/UserSignupForm";
import UserSignInForm from "./components/UserSignInForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubNavbar from "./components/Sub-Navbar";
import Store from "./components/SubNavbarLinks/Store";
import { useParams } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
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
          <Route exact path="/our-store" element={<SubNavbar />} />
          <Route exact path="/store/:item" element={<StoreWithParam />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function StoreWithParam() {
  const { item } = useParams();

  return <Store item={item} />;
}

export default App;
