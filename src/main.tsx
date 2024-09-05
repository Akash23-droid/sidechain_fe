import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PrivyProvider } from "@privy-io/react-auth";

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
          // logo: "https://your-logo-url",
        },
        oauth: {
          google: {
            scopes: ["profile", "email"],
          },
          github: {
            scopes: ["user"],
          },
          linkedin: {
            scopes: ["r_liteprofile", "r_emailaddress"],
          },
        },
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>
);
