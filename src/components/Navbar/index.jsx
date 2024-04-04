/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";

const Index = ({ isModal, setIsModal }) => {
  const handleSearchModal = () => {
    setIsModal(true);
    console.log("clicked", isModal);
  };
  return (
    <div className="navbar-container">
      <ul>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink to="aboutme">About Me</NavLink>
        </li>
        <li>
          <NavLink to="projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="resume">Resume</NavLink>
        </li>
      </ul>
      <div>
        <NavLink to="/">
          <img className="logo" src="src/assets/logo.png" alt="logo" />
        </NavLink>
      </div>
      <div className="search" style={{ display: "flex", alignItems: "center" }}>
        <Tooltip
          title="Search"
          onClick={handleSearchModal}
          style={{ cursor: "pointer" }}
        >
          <SearchIcon />
        </Tooltip>
      </div>
    </div>
  );
};

export default Index;
