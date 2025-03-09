import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Body />
    <PageBreak />
    <Middle />
    <Cards />
    <Mbtn />
    <PageBreak />
    <Final />
    <Teams />
    <PageBreak />
    <Footer />
  </div>
);

const Header = () => (
  <div className="va">
    <p className="logo">Visual Arts</p>
    <nav className="nav-links">
      {['Home', 'Gallery', 'About Us', 'Collection'].map(link => (
        <a href={link} key={link}>{link}</a>
      ))}
    </nav>
    <div className="auth-buttons">
      <button>Login</button>
      <button>Sign up</button>
    </div>
  </div>
);

const Body = () => (
  <div className="whole">
    <div className="wb">
      <div className="text">
        <h1>
          Discover the <span style={{ color: "orange", fontSize: "80px" }}>vibrant</span>
          <img
            src="https://i.pinimg.com/736x/73/2d/55/732d554442a859026fa9faab1d73d628.jpg"
            alt="Visual Arts"
            className="small-img"
          />
          <br /> world of visual arts
        </h1>
      </div>
      <p>Immerse yourself in the captivating world of creativity and expression</p>
      <div className="btn">
        <button>Explore now</button>
      </div>
    </div>
  </div>
);

const PageBreak = () => <hr className="page-break" />;

const Middle = () => (
  <div className="mt">
    <div className="lt"><h1>Upcoming Events</h1></div>
    <div className="st"><p>A look at some of the amazing artworks of our club members</p></div>
  </div>
);

const Cards = () => {
  const cardData = [
    {
      img: "https://i.pinimg.com/736x/21/a7/8e/21a78ee8b3c3940bafa81a4e6dc6a4f3.jpg",
      title: "Art Name",
      description: "Explore the depth of abstract creativity."
    },
    {
      img: "https://i.pinimg.com/736x/1e/65/0e/1e650e820b09c5b302c0994d104f1c1e.jpg",
      title: "Art Name",
      description: "Discover innovative 3D art pieces."
    },
    {
      img: "https://i.pinimg.com/736x/52/f2/f5/52f2f5a78069636a49bfa47a3959611f.jpg",
      title: "Art Name",
      description: ""
    },
    {
      img: "https://i.pinimg.com/736x/03/c3/a0/03c3a0a566c64d324f351265cbe22fe6.jpg",
      title: "Art Name",
      description: ""
    }
  ];

  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.img} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

const Mbtn = () => (
  <div className="mbtn">
    <button>Load More</button>
  </div>
);

const Final = () => (
  <div className="ft">
    <div className="ht">
      <h1>Leadership Team</h1>
      <div className="pt"><p>Meet the Team</p></div>
    </div>
  </div>
);

const Teams = () => {
  const teamData = [
    { img: "https://i.pinimg.com/736x/21/a7/8e/21a78ee8b3c3940bafa81a4e6dc6a4f3.jpg", name: "Brooke Ayalew", role: "CEO of Visual Arts" },
    { img: "https://i.pinimg.com/736x/3d/7a/ad/3d7aadb1c250829947673594e6f66fa8.jpg", name: "Bisrat Mulugeta", role: "Senior Developer" },
    { img: "https://i.pinimg.com/736x/ef/4e/b4/ef4eb4c4cb40e467ce4495a36a99326d.jpg", name: "Abinet Mekuriya", role: "Figma Designer" }
  ];

  return (
    <div className="second-container">
      {teamData.map((member, index) => (
        <div className="card2" key={index}>
          <img src={member.img} alt={member.name} />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

const Footer = () => (
  <div className="footer">
    <p>&copy; 2025 YourWebsite. All rights reserved.</p>
  </div>
);

export default App;
