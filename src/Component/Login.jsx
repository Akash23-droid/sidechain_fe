import React, { useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";

const Login = () => {
  const { login, isAuthenticated } = usePrivy();

  useEffect(() => {
    login();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* {!isAuthenticated && (
        <div>
          <h2>Login to Your Account</h2>
          <button onClick={() => login()}>
            Login with Email, Google, or GitHub
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Login;
