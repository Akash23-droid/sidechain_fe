import React from "react";
import ReactDOM from "react-dom/client";
import App1 from "./App1";
import "./index.css";
import { PrivyProvider } from "@privy-io/react-auth";
import { UserProvider } from "./Component/Context/UserContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrivyProvider
      // appId={import.meta.env.VITE_PRIVY_APP_ID}
      appId="cm0ghf32302etdzkvdv6liko5"
      config={{
        // Display email and wallet as login methods
        loginMethods: ["email", "wallet", "github", "google"],
        // Customize Privy's appearance in your app
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
        },
      }}
    >
      <UserProvider>
        <App1 />
      </UserProvider>
    </PrivyProvider>
  </React.StrictMode>
);
