import React from "react";
import { useNavigate } from "react-router";

export default function UserLogout() {
  //   const formCss = {
  //     backgroundColor: "grey",
  //   };
  const logoutButton = {
    backgroundColor: "#F28123",
  };
  const cancelButton = {
    backgroundColor: "#111111",
    color: "white",
  };
  const navigate = useNavigate();

  const handleLogout = async () => {
    await localStorage.clear();
    navigate("/sign-in");
  };

  const handleCancel = async () => {
    navigate(-1);
  };
  return (
    <>
      <div className="container">
        <div className="container">
          <form>
            <div>
              <h1>LOGOUT</h1>
              <div
                className="btn"
                style={logoutButton}
                onClick={() => handleLogout()}
              >
                Logout
              </div>
              <div
                className="btn"
                style={cancelButton}
                onClick={() => handleCancel()}
              >
                Cancel
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
