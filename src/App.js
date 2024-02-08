import React from 'react';
import AdminComponent from './Pages/AdminComponent';
import SuperAdminSignin from './Pages/SuperAdmin/Signin/Signin';
import AdminManagement from './Pages/SuperAdmin/AdminManagement';

import Admin_Navbar from './Pages/Admin-Navbar';
import AdminProduct from "./Pages/Product-Page-Components/Admin-Product";
import CustomerView from "./Pages/Customer-Page-Components/customer-view";
import OrderView from "./Pages/Orders-Page-Components/OrderView";
import Settings from "./Pages/Settings-Page-Components/Settings";
import OffersView from "./Pages/Offers-Page-Components/OffersView";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import product from './Data/product';
import category from './Data/category';
import customerdata from './Data/customer';
import orderdata from './Data/order';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/admin/*"
            element={
              <AdminLayout>
                <AdminComponent />
              </AdminLayout>
            }
          />
          <Route path="/superadmin" element={<SuperAdminSignin />} />
          <Route path="/superadmin/adminmanagement" element={<AdminManagement />} />
        </Routes>
      </Router>
    </div>
  );
}


function AdminLayout({ children }) {
  return (
    <div>
      <Admin_Navbar />
      {children}
    </div>
  );
}


export default App;