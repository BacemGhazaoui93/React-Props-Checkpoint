import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile.js';

function App() {
  const handleName = (name) => {
    alert(`Hello ${name}!`);
  };

  return (
    <div>
      {/* Calling the Profile Component*/}
      <Profile fullName="Bacem Ghazaoui" bio="29 YO" profession="Architect" handleName={handleName}>
        <img src="profile-image.jpg" alt="Profile" />
      </Profile>
    </div>
  );
};

export default App;
