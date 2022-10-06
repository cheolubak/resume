import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageLoading from './components/atom/PageLoading';

const AboutPage = React.lazy(() =>
  Promise.all([
    import('./components/pages/About'),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => {
    console.log(moduleExports);
    return moduleExports;
  })
);
const SkillsPage = React.lazy(() =>
  Promise.all([
    import('./components/pages/Skills'),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => {
    console.log(moduleExports);
    return moduleExports;
  })
);
const WorksPage = React.lazy(() =>
  Promise.all([
    import('./components/pages/Works'),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => {
    console.log(moduleExports);
    return moduleExports;
  })
);
const ContactPage = React.lazy(() =>
  Promise.all([
    import('./components/pages/Contact'),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => {
    console.log(moduleExports);
    return moduleExports;
  })
);

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense fallback={<PageLoading />}>
          <AboutPage />
        </Suspense>
      ),
    },
    {
      path: '/skills',
      element: (
        <Suspense fallback={<PageLoading />}>
          <SkillsPage />
        </Suspense>
      ),
    },
    {
      path: '/works',
      element: (
        <Suspense fallback={<PageLoading />}>
          <WorksPage />
        </Suspense>
      ),
    },
    {
      path: '/contact',
      element: (
        <Suspense fallback={<PageLoading />}>
          <ContactPage />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
