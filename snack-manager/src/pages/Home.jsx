import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="Home">
      <div className="homeImage">
        <img src="images/disney_mainstreet.jpg" alt="Main Street" />
      </div>
      <Link to="/signIn" className="login_button">Login</Link>
      <div className="disneyImage">
        <img src="images/disney.png" alt="Disney World" />
      </div>
    </div>
  );
}