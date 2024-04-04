import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const Index = () => {
  const [isAccordian1Open, setIsAccordian1Open] = useState(false);
  const [isAccordian2Open, setIsAccordian2Open] = useState(false);

  const handleAccordian1 = () => {
    console.log("working");
    setIsAccordian1Open(!isAccordian1Open);
  };

  const handleAccordian2 = () => {
    setIsAccordian2Open(!isAccordian2Open);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" color="initial" style={{ fontWeight: 500 }}>
        About Me
      </Typography>

      <img
        src="src/assets/my-image.png"
        alt="my-image"
        style={{
          height: "300px",
          padding: 30,
        }}
      />
      <Typography variant="body1" color="initial" style={{ padding: 30 }}>
        Hi! My name is Naeem Malik & I&apos;m a Web-developer working with{" "}
        <br />
        React.js and Material UI. This website is my creative portfolio filled{" "}
        <br />
        with all the beautiful things, people, places & memories I love. Hope{" "}
        <br />
        you love it too!
      </Typography>
      <Box
        style={{
          width: "500px",
          textAlign: "left",
          cursor: "pointer",
          border: "1px solid grey",
          padding: "10px 20px",
        }}
      >
        <Typography variant="h5" color="initial" onClick={handleAccordian1}>
          More Information
        </Typography>
        {isAccordian1Open ? (
          <div style={{ transition: "2s" }}>
            <Typography variant="body1" color="initial">
              Sign: <em style={{ textDecoration: "underline" }}>Leo</em>
            </Typography>
            <Typography variant="body1" color="initial">
              Blood Type: <em style={{ textDecoration: "underline" }}>A+</em>
            </Typography>
            <Typography variant="body1" color="initial">
              House: <em style={{ textDecoration: "underline" }}>Gryffindor</em>
            </Typography>
            <Typography variant="body1" color="initial">
              Clan: <em style={{ textDecoration: "underline" }}>Riverclan</em>
            </Typography>
          </div>
        ) : null}
      </Box>
      <Box
        style={{
          width: "500px",
          textAlign: "left",
          cursor: "pointer",
          border: "1px solid grey",
          padding: "10px 20px",
          margin: 30,
        }}
      >
        <Typography variant="h5" color="initial" onClick={handleAccordian2}>
          Gear
        </Typography>
        {isAccordian2Open ? (
          <div style={{ transition: "2s" }}>
            <Typography variant="body1" color="initial">
              Laptop:
              <em style={{ textDecoration: "underline" }}>
                MacBook Air M1 2020
              </em>
            </Typography>
            <Typography variant="body1" color="initial">
              Phone:
              <em style={{ textDecoration: "underline" }}>
                iPhone 12 mini 64GB
              </em>
            </Typography>
            <Typography variant="body1" color="initial">
              Headphones:{" "}
              <em style={{ textDecoration: "underline" }}>
                SkullCandy Dime 2 Black
              </em>
            </Typography>
          </div>
        ) : null}
      </Box>
    </div>
  );
};

export default Index;
