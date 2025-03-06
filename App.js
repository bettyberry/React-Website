import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <PageBreak />
      <Middle />
);}
function Header() {
  return (
    <div className="va">
      <p className="logo">Visual Arts</p>
      <nav className="nav-links">
        <a href="Home">Home</a>
        <a href="Gallery">Gallery</a>
        <a href="About Us">About Us</a>
        <a href="Collection">Collection</a>
      </nav>
      <div className="auth-buttons">
        <button>Login</button>
        <button>Sign up</button>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="whole">
      <div className="wb">
        <div className="text">
          <h1>
            Discover the
            <span style={{ color: "orange", fontSize: "80px" }}> vibrant</span>
            <img
              src="https://i.pinimg.com/736x/73/2d/55/732d554442a859026fa9faab1d73d628.jpg"
              alt="Visual Arts"
              className="small-img"
            />
            <br />
            world of visual arts
          </h1>
        </div>
        <p>
          Immerse yourself in the captivating world of creativity and expression
        </p>
        <div className="btn">
          <button>Explore now</button>
        </div>
      </div>
    </div>
  );
}
function PageBreak() {
  return <hr className="page-break" />;
}
function Middle() {
  return (
    <div className="mt">
      <div className="lt">
        <h1>Up coming Events</h1>
      </div>
      <div className="st">
        <p>a look at some of the amazing artworks of our club members</p>
      </div>
    </div>
  );
}
