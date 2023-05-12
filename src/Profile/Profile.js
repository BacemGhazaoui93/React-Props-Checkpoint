import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
      
    <div style={{textAlign: 'center',fontFamily: "Arial, Helvetica, sans-serif"}}>
      {/* This is the fullName prop*/}
      <h2 >{fullName}</h2>
      {/* This is the bio prop*/}
      <p>{bio}</p>
      {/* This is the profession prop*/}
      <p>{profession}</p>
      {/* This is the prop that will get an image plus inline styling*/}
      <div style={{backgroundColor: "#7fbac2",
    boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
        {children}
      </div>
            {/* This is the button with  the alert message */}

      <button onClick={() => handleName(fullName)}>Click Here</button>
    </div>
  );
};

{/* Setting up the default values for the props*/}
Profile.defaultProps = { 
  fullName: 'Foulen Ben Foulen',
  bio: 'No bio provided',
  profession: 'Unknown',
};

{/* Using PropsType to check props*/}
Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;