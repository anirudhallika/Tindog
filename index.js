import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App isAuthenticated={true} user={{ id: "456987", name: "John Doe", email: "john@site.com", createdAt: "2018-07-11", companyId: "123456", companyName: "Acme Labs", plan: "Free" }} />
  </BrowserRouter>
);
