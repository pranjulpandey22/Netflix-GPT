import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const naviagte = useNavigate();
  const user = useSelector((store) => store.usersss);
  console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        naviagte("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="header px-6 py-2 bg-gradient-to-b from-black w-screen">
      <img
        className="Netflix-Logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
      />
      {user && (
        <div style={{ padding: "22px 7px 14px 1px" }}>
          {/* <img className='w-12 h-12' src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt=""/> */}
          <button onClick={handleSignOut} className="sigoutButton">
            SignOut{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
