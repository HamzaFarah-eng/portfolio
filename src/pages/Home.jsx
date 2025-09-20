import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="bg-soft-white pt-30 mt-30">
        <Portfolio />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
