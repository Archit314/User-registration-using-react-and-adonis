import "./App.css";
import NavBar from "./components/NavBar";
import UserSignupForm from "./components/UserSignupForm";
import UserSignInForm from "./components/UserSignInForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubNavbar from "./components/Sub-Navbar";
import Store from "./components/SubNavbarLinks/Store";
import { useParams } from "react-router-dom";
import Home from "./components/Home";
import ProductCart from "./components/Product/ProductCart";
import { UserAuthentication } from "./components/Authentication/UserAuthentication";
import UserLogout from "./components/UserLogout";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<UserAuthentication Component={Home} />}
          />
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
          <Route
            exact
            path="/logout"
            element={<UserAuthentication Component={UserLogout} />}
          />
          <Route exact path="/our-store" element={<SubNavbar />} />
          <Route
            exact
            path="/store/:item"
            element={<StoreWithParam component={Store} />}
          />
          <Route
            exact
            path="/user/cart/:item"
            element={<StoreWithParam component={ProductCart} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function StoreWithParam({ component: Component }) {
  const { item } = useParams();

  return <Component item={item} />;
}

export default App;
