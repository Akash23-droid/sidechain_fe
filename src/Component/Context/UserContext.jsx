import React, { createContext, useState, useContext, useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);
  const { user, ready } = usePrivy();

  useEffect(() => {
    if (ready && user) {
      let details = {
        id: user.id,
        email: user.email?.address || "",
        createdAt: user.createdAt,
      };

      // Check if user signed in with Google
      if (user.google) {
        details = {
          ...details,
          name: user.google.name,
          email: user.google.email,
          provider: "google",
        };
      }
      // Check if user signed in with GitHub
      else if (user.github) {
        details = {
          ...details,
          name: user.github.username,
          email: user.github.email,
          provider: "github",
        };
      }
      // Fallback for other providers or email login
      else {
        details = {
          ...details,
          name: user.email?.address.split("@")[0] || "User",
          provider: "email",
        };
      }

      setUserDetails(details);
    } else {
      setUserDetails(null);
    }
  }, [ready, user]);

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
