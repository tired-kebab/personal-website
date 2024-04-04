import Typography from "@mui/material/Typography";

const Index = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <Typography variant="h2" color="white" style={{ fontWeight: 500 }}>
          Naeem Malik
        </Typography>
      </header>
      <main className="home-main">
        <img
          className="home-collage"
          src="src/assets/home-photo.png"
          alt="A collage"
        />
        <section className="home-section">
          <Typography
            className="home-heading"
            variant="h4"
            color="initial"
            style={{
              letterSpacing: 5,
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            Website
          </Typography>
          <Typography
            className="home-caption"
            variant="body1"
            gutterBottom
            style={{ fontWeight: 100 }}
          >
            &quot;Life is not a series of gig lamps symmetrically arranged; life
            is a luminous halo, <br /> a semi-transparent envelope surrounding
            us from the beginning of consciousness <br /> to the end.&quot; --
            Virginia Woolf
          </Typography>
        </section>
      </main>
    </div>
  );
};

export default Index;
