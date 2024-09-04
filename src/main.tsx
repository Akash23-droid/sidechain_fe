import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { ClerkProvider } from "@clerk/clerk-react";
import { PrivyProvider } from "@privy-io/react-auth";

// Import your publishable key
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/"> */}
    <PrivyProvider
      appId="cm0ghf32302etdzkvdv6liko5"
      config={{
        // Display email and wallet as login methods
        loginMethods: ["email", "wallet", "github", "google"],
        // Customize Privy's appearance in your app
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          logo: "https://your-logo-url",
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
        // Create embedded wallets for users who don't have a wallet
        // embeddedWallets: {
        //   createOnLogin: "users-without-wallets",
        // },
      }}
    >
      <App />
    </PrivyProvider>
    {/* </ClerkProvider> */}
  </React.StrictMode>
);
