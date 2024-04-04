import Typography from "@mui/material/Typography";

const Index = () => {
  return (
    <div>
      <Typography variant="h2" className="contact-heading">
        Contact
      </Typography>
      <div
        style={{
          textAlign: "center",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "100vh",
        }}
      >
        <Typography variant="body1" color="initial">
          Email:{" "}
          <div style={{ display: "inline", textDecoration: "underline" }}>
            malik2015naeem@gmail.com
          </div>
        </Typography>
        <Typography variant="body1" color="initial">
          GitHub:
          <a href="https://github.com/tired-kebab">
            https://github.com/tired-kebab
          </a>
        </Typography>
        <Typography variant="body1" color="initial">
          LinkedIn: <a href="www.linkedin.com">www.linkedin.com/naeem-malik</a>
        </Typography>
      </div>
    </div>
  );
};

export default Index;
