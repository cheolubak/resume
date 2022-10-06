import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AboutPage = React.lazy(() => import("./components/pages/About"));
const SkillsPage = React.lazy(() => import("./components/pages/Skills"));
const WorksPage = React.lazy(() => import("./components/pages/Works"));
const ContactPage = React.lazy(() => import("./components/pages/Contact"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense>
          <AboutPage />
        </Suspense>
      ),
    },
    {
      path: "/skills",
      element: (
        <Suspense>
          <SkillsPage />
        </Suspense>
      ),
    },
    {
      path: "/works",
      element: (
        <Suspense>
          <WorksPage />
        </Suspense>
      ),
    },
    {
      path: "/contact",
      element: (
        <Suspense>
          <ContactPage />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
