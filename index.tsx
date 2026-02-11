import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const script = document.createElement("script");
script.type="text/javascript";
script.src="https://cdn.tailwindcss.com";
document.getElementsByTagName('head')[0].appendChild(script);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);