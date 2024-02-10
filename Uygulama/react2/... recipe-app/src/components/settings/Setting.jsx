import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Setting.css'

const Settings = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const userJson = localStorage.getItem("user");
        if (!userJson) {
          console.error("User not found in localStorage");
          return;
        }
        const { access_token } = JSON.parse(userJson);
        if (!access_token) {
          console.error("Access token not found in user data");
          return;
        }
        const response = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
          headers: {
            "Authorization": `Bearer ${access_token}`
          }
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    }

    getUserProfile();
  }, []);

  return (
    <div className='user-card'>
      <img src={user.avatar} alt={user.name} />
      <h1>User Information</h1>
      <div className="user-info">
        <div>
          <h3><span className="info-label">Name:</span> <span className="info-value">{user.name}</span></h3>
        </div>
        <div>
          <h3><span className="info-label">Role:</span> <span className="info-value">{user.role}</span></h3>
        </div>
        <div>
          <h3><span className="info-label">Email:</span> <span className="info-value">{user.email}</span></h3>
        </div>
      </div>
    </div>
  );
}

export default Settings;
