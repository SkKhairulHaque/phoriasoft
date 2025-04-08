import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Contact, Privacy, Terms } from "../components";
import { ThisPageIs404 } from "../template";
import AppLayout from "../components/AppLayout";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/terms", element: <Terms /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <ThisPageIs404 /> },
    ],
  },
]);

export default routers;
