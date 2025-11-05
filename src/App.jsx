import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Why from "./pages/WhyUs";
import Services from "./pages/Services";
import Works from "./pages/Works";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout wraps all pages
    errorElement: <p dir="rtl">404 صفحه مورد نظر یافت نشد.</p>,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/why-us", element: <Why /> },
      { path: "/services", element: <Services /> },
      { path: "/works", element: <Works /> },
    ],
  },
]);

function App() {
  return (
    <div className="flex flex-col justify-between">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
