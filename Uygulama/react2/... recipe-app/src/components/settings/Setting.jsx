import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      <p>{user.name}</p>
      <p>{user.role}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default Settings;
