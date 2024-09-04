import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePrivy } from "@privy-io/react-auth";

const ProfileCompletion = () => {
  const { user, updateUser } = usePrivy();
  const [name, setName] = useState(user?.data?.name || "");
  const [bio, setBio] = useState(user?.data?.bio || "");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateUser({ name, bio, profileComplete: true });
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Complete Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Bio:</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
        </div>
        <button type="submit">Complete Profile</button>
      </form>
    </div>
  );
};

export default ProfileCompletion;
