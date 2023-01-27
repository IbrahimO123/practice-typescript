import { UserContext } from "./UserContext";
import { useContext } from "react";

export const User = () => {
  const {user, setUser} = useContext(UserContext);
  const handleLogin = () => {
    console.log("Log In Clicked");
    setUser({
      name: "John Doe",
      email: "john007@example.com",
    });
  };
  const handleLogout = () => {
    console.log("Log Out Clicked");
    setUser(null);
  };
  return (
    <div>
      {!user ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
      <div>
        <p>User name is {user?.name} </p>
        <p>User email is {user?.email} </p>
      </div>
    </div>
  );
};
