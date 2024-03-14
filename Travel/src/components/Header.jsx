import { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./Header.module.css";

const Header = () => {
  const [isloggedin, setLoggedin] = useState(false);

  const handleLogin = () => {
    setLoggedin(!isloggedin);
  };

  console.log(isloggedin);

  return (
    <>
      <div className={Style.navbar}>
        
          <h3>
            <Link className={Style.nav_element} to="/">
              Home
            </Link>
          </h3>
          <h3>
            <Link className={Style.nav_element} to="/Blogs">
              Blogs
            </Link>
          </h3>
          <h3>
            <Link className={Style.nav_element} to="/Create_Blogs">
              Create Blogs
            </Link>
          </h3>
          <h3>
            <Link className={Style.nav_element} to="/LoginPage">
              Login
            </Link>
          </h3>
          {/* <button onClick={handleLogin}>
            {isloggedin ? "Logout" : "Login"}
          </button> */}
        
      </div>
    </>
  );
};
export default Header;
