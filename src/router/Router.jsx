import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {  Contact, Privacy, Terms } from "../components";


const routers = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/terms", element: <Terms /> },
  { path: "/contact", element: <Contact /> },
]);

export default routers;
