import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="">
      <ul className="flex items-center gap-4 text-lg m-5 font-bold absolute top-0 text-blue-500">
        <li>
          <Link to="/">Exercises one</Link>
        </li>
        <li>
          <Link to="/two">Exercises two</Link>
        </li>
        <li>
          <Link to="/three">Exercises three</Link>
        </li>
        <li>
          <Link to="/four">Exercises four</Link>
        </li>
        <li>
          <Link to="/five">Exercises five</Link>
        </li>
        <li>
          <Link to="/six">Exercises six</Link>
        </li>
        <li>
          <Link to="/seven">Exercises seven</Link>
        </li>
        <li>
          <Link to="/eight">Exercises eight</Link>
        </li>
        <li>
          <Link to="/nine">Exercises nine</Link>
        </li>
      </ul>
    </nav>
  );
}
