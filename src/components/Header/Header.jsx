import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  return (
    <div>
      Header
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        {user ? (
          <span onClick={()=>dispatch(logout())}>Logout</span>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
