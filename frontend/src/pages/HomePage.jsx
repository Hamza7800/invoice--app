import { useState, useEffect } from "react";
import ActionBar from "../components/ActionBar";
import Invoices from "../components/Invoices";
import InvoiceForm from "../components/InvoiceForm";
import { Home } from "../styles/HomePageStyles/homestyles";
import Overlay from "../components/Overlay";

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (showForm) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }, [showForm]);

  return (
    <Home>
      <ActionBar setShowForm={setShowForm} />
      <Invoices />
      <InvoiceForm showForm={showForm} setShowForm={setShowForm} />
      {showForm && <Overlay onClose={() => setShowForm(false)} />}
    </Home>
  );
};

export default HomePage;
