import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import HtmlCssApp from '../pages/HtmlCssApp';
import ResponsiveApps from '../pages/ResponsiveApps';
import SignUp from '../pages/SignUp';
import AdminPanel from '../pages/AdminPanel';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "htmlcss",
        element: <HtmlCssApp />
      },
      {
        path: "responsive",
        element: <ResponsiveApps />
      },
      {
        path: "sign-up",
        element: <SignUp />
      },
      {
        path: "admin-panel",
        element: <AdminPanel />
      }
    ]
  }
]);

export default router;
