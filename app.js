import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App({ isAuthenticated, user }) {
  const location = useLocation();

  // Identify user after login
  useEffect(() => {
    if (isAuthenticated && window.Userpilot) {
      window.Userpilot.identify(user.id, {
        name: user.name,
        email: user.email,
        created_at: user.createdAt,
        company: {
          id: user.companyId,
          name: user.companyName,
          plan: user.plan,
        },
      });
    }
  }, [isAuthenticated, user]);

  // Reload Userpilot when route changes
  useEffect(() => {
    if (isAuthenticated && window.Userpilot) {
      window.Userpilot.reload();
    }
  }, [location, isAuthenticated]);

  return (
    <div>
      <h1>Welcome {user?.name || "Guest"} 👋</h1>
      <button
        onClick={() =>
          window.Userpilot?.track("Clicked purchase button", { plan: "Pro" })
        }
      >
        Buy Now
      </button>
    </div>
  );
}

export default App;
