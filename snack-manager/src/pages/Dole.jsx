import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
        <h1>Dole Pineapple Whip</h1>
      <div className="dole">
        <img src="images/dole_whip.jpg" alt="Dole Pineapple Whip" />
      </div>
      <Link to="/snackList" className="login_button">Return to snack list</Link>
      
    </div>
  );
}