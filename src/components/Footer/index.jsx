import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
const Index = () => {
  return (
    <div className="footer">
      <Typography variant="body1" color="initial">
        <NavLink to="contact" style={{ textDecoration: "none" }}>
          Contact
        </NavLink>
      </Typography>
      <Typography variant="caption" color="initial">
        Naeem Malik&copy; 2024
      </Typography>
    </div>
  );
};

export default Index;
