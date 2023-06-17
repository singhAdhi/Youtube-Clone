import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className="p-5 shadow-lg w-48">
      <h1 className="font-bold">Subscription</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>MOvie</li>
      </ul>
      <h1 className="font-bold pt-5">Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>MOvie</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>MOvie</li>
      </ul>
    </div>
  );
};

export default Sidebar;
