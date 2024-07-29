import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css'

import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import { AboutCompanyPage } from './pages/AboutCompany/AboutCompanyPage';
import { FeedbackPage } from './pages/Feedback/FeedbackPage';
import { BasketPage } from './pages/BasketPage/BasketPage';
import ErrorPage from './pages/ErrorPage';

import { LoginPage } from './pages/LoginPages/LoginPage';
import { RegistrationPage } from './pages/LoginPages/RegistrationPage';
import { AccountPage } from './pages/LoginPages/AccountPage';

import { AutoSection } from './pages/Sections/AutoSection';
import { HealthSection } from './pages/Sections/HealthSection';
import { PropertySection } from './pages/Sections/PropertySection';
import { ComplexSection } from './pages/Sections/ComplexSection';

import { ProductDescriptionPage } from './components/ProductPage';


const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AboutCompanyPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/feedback",
        element: <FeedbackPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/basket",
        element: <BasketPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/login",
        element: <LoginPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/registration",
        element: <RegistrationPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/auto",
        element: <AutoSection/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/health",
        element: <HealthSection/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/property",
        element: <PropertySection/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/complex",
        element: <ComplexSection/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/account",
        element: <AccountPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/product/:id",
        element: <ProductDescriptionPage/>,
        errorElement: <ErrorPage/>,
      }
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
)