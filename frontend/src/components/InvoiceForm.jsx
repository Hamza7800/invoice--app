import { useState } from "react";
import { Section } from "../styles/invoiceFormStyles";
import arrowBack from "../assets/icon-arrow-left.svg";
import {
  useCreateInvoiceMutation,
  useGetAllInvoicesQuery,
  useGetInvoiceByIdQuery,
  useUpdateEditedInvoiceMutation,
} from "../slices/invoicesApiSlice";
import Form from "./Form";
import { useSelector } from "react-redux";
import generateUniqueId from "../utils/utils";
import { invoiceData } from "../utils/formInputFieldsData";
import Button from "./Button";
import { generateFilledData } from "../utils/utils";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import FullScreenLoader from "./Loader";

//  Component
const InvoiceForm = ({ showForm, setShowForm, editInvoice, isEditing }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState(
    editInvoice ? editInvoice : invoiceData
  );

  const methods = useForm({
    defaultValues: {
      items: editInvoice ? editInvoice.items : [],
    },
  });

  const [invoice, { isLoading }] = useCreateInvoiceMutation();
  const [updateInvoice, { isLoading: updateLoading }] =
    useUpdateEditedInvoiceMutation();
  const { refetch } = useGetAllInvoicesQuery();
  const { refetch: refetchUpdatedInvoice } = useGetInvoiceByIdQuery(
    editInvoice ? editInvoice._id : ""
  );

  // const dispatch = useDispatch();

  const createInvoice = async (data) => {
    const overallTotal = data.items.reduce(
      (total, item) => total + item.total,
      0
    );
    console.log(userInfo);

    try {
      await invoice({ ...data, total: overallTotal, user: userInfo._id });
      refetch();
      toast.success("Invoice created successfully");
    } catch (err) {
      console.log(err?.data?.message);
      toast.error(err?.data?.message || err.error);
    }
  };

  const inputFieldsValues = methods.watch();

  const handleDraftInvoice = (e) => {
    e.preventDefault();
    const filledFormdata = generateFilledData(
      formData,
      inputFieldsValues,
      "draft",
      generateUniqueId()
    );
    createInvoice(filledFormdata);
    setShowForm(false);
  };

  const handlePendingInvoice = methods.handleSubmit((data) => {
    const filledFormdata = generateFilledData(
      formData,
      inputFieldsValues,
      "pending",
      generateUniqueId()
    );
    createInvoice(filledFormdata);
    setShowForm(false);
  });

  const saveEditInvoice = async (data) => {
    const overallTotal = data.items.reduce(
      (total, item) => total + item.total,
      0
    );

    try {
      await updateInvoice({ ...data, total: overallTotal, user: userInfo._id });
      refetchUpdatedInvoice();
      refetch();
      toast.success(`Invoice ${data.customId} updated successfully`);
      setShowForm(false);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const saveInvoiceChanges = methods.handleSubmit((data) => {
    const filledFormdata = generateFilledData(
      editInvoice,
      inputFieldsValues,
      "paid",
      editInvoice.customId
    );
    saveEditInvoice(filledFormdata);
  });

  return (
    <>
      <FormProvider {...methods}>
        <Section className={`${showForm ? "transition" : ""}`}>
          <div onClick={() => setShowForm(false)} className="link go-back">
            <img src={arrowBack} alt="" />
            Go back
          </div>

          <div>
            <h2>
              {editInvoice ? `Edit #${editInvoice.customId}` : "New Invoice"}
            </h2>
            <Form
              createInvoice={createInvoice}
              setShowForm={setShowForm}
              formData={formData}
              setFormData={setFormData}
              control={methods.control}
              invoice={editInvoice ? editInvoice : null}
            />

            {isEditing ? (
              <div className="buttons">
                <Button className="discard" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={saveInvoiceChanges}
                  type="submit"
                  className="pending"
                >
                  Save Changes
                </Button>
              </div>
            ) : (
              <div className="buttons">
                <Button className="discard" onClick={() => setShowForm(false)}>
                  Discard
                </Button>
                <Button
                  onClick={handleDraftInvoice}
                  type="submit"
                  className="draft"
                >
                  Save as Draft
                </Button>
                <Button
                  onClick={handlePendingInvoice}
                  type="submit"
                  className="pending"
                >
                  Save & Send
                </Button>
              </div>
            )}
          </div>
        </Section>
      </FormProvider>
      {updateLoading && <FullScreenLoader />}
      {isLoading && <FullScreenLoader />}
    </>
  );
};

export default InvoiceForm;
