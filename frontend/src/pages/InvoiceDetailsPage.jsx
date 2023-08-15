import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetInvoiceByIdQuery,
  useGetAllInvoicesQuery,
} from "../slices/invoicesApiSlice";
import FullScreenLoader from "../components/Loader";
import InvoiceDetails from "../components/InvoiceDetails";
import InvoiceForm from "../components/InvoiceForm";
import Overlay from "../components/Overlay";
import { DetailsPage } from "../styles/InvoiceDetailsStyles/invoiceDetails";
import {
  useMarkedAsPaidMutation,
  useDeleteInvoiceMutation,
} from "../slices/invoicesApiSlice";
import { toast } from "react-toastify";

// Component
const InvoiceDetailsPage = () => {
  const { id: invoiceId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const {
    data: invoice,
    refetch,
    isLoading,
    error,
  } = useGetInvoiceByIdQuery(invoiceId);

  const { refetch: allInvoice } = useGetAllInvoicesQuery();

  const [markedAsPaid, { isLoading: loading }] = useMarkedAsPaidMutation();
  const [deleteInvoiceByID, { isLoading: loadingDelete }] =
    useDeleteInvoiceMutation();

  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    if (showForm) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }, [showForm]);

  const markedAsPaidInvoice = async () => {
    try {
      const res = await markedAsPaid({ _id: invoiceId, status: "paid" });
      refetch();
      allInvoice();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const deleteInvoice = async (id) => {
    try {
      const res = await deleteInvoiceByID({ _id: id });
      console.log(res);
      setShowModal(false);
      navigate("/");
      allInvoice();
      toast.success(`Invoice with id${invoice.customId} deleted`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <DetailsPage style={{ color: "white" }}>
        {error ? (
          <h2>Error</h2>
        ) : isLoading ? (
          <FullScreenLoader />
        ) : invoice ? (
          <>
            <InvoiceDetails
              markedAsPaid={markedAsPaidInvoice}
              deleteInvoice={deleteInvoice}
              invoice={invoice}
              setShowForm={setShowForm}
              showModal={showModal}
              setShowModal={setShowModal}
            />

            <InvoiceForm
              editInvoice={invoice}
              showForm={showForm}
              setShowForm={setShowForm}
              isEditing={isEditing}
            />
            {showForm && <Overlay onClose={() => setShowForm(false)} />}
          </>
        ) : null}
      </DetailsPage>
      {loadingDelete ? <FullScreenLoader /> : null}
    </>
  );
};

export default InvoiceDetailsPage;
