import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import InvoiceDetailsPage from './pages/InvoiceDetailsPage';
import './styles/index.css';
// import InvoiceForm from './components/InvoiceForm';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRouter';
import RegisterUserPage from './pages/RegisterUserPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path='/' element={<App />}>
    //   {/* <Route index={true} path='/' element={<HomePage />} /> */}
    //   <Route path='/login' element={<LoginPage />} />
    //   {/* <Route path='/invoice/:id' element={<InvoiceDetailsPage />} /> */}
    // </Route>
    <Route path='/' element={<App />}>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/create-account' element={<RegisterUserPage />} />
      <Route path='' element={<PrivateRoute />}>
        <Route element={<HomePage />} path='/' index={true} />
        <Route path='/invoice/:id' element={<InvoiceDetailsPage />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

