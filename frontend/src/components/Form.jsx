import { useEffect, useState } from "react";

import InputField from "./InputField";
import Items from "./Items.jsx";
import Dropdown from "./DropDown";
import { useFieldArray } from "react-hook-form";
import { Controller, useFormContext, useWatch } from "react-hook-form";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because getMonth() returns 0-11
const day = currentDate.getDate().toString().padStart(2, "0");

const Form = ({
  createInvoice,
  setShowForm,
  // setIsValid,
  // isValid,
  formData,
  setFormData,
  control,
  invoice,
}) => {
  const date = `${year}-${month}-${day}`;
  const [selection, setSelection] = useState(1);
  const { setValue } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const validation = {
    required: {
      value: true,
      message: "required",
    },
  };

  const watchDate = useWatch({ name: "invoiceDate", defaultValue: date });

  // useEffect(() => {
  //   setValue("invoiceDate", watchDate);
  // }, [watchDate, setValue, date]);

  const options = [
    { label: "Net 1 Day", value: "1" },
    { label: "Net 7 Days", value: "7" },
    { label: "Net 14 Days", value: "14" },
    { label: "Net 30 Days", value: "30" },
  ];

  const handleSelection = (option) => {
    if (option !== selection) {
      const futureDate = new Date(currentDate);
      futureDate.setDate(currentDate.getDate() + Number(option.value));
      const formattedFutureDate = futureDate.toISOString().substr(0, 10);
      setValue("invoiceDate", formattedFutureDate);

      const updatedFormData = {
        ...formData,
        paymentDue: formattedFutureDate,
      };
      setFormData(updatedFormData);
      setSelection(option);
    }
    // setFormData({ ...formData, paymentTerms: Number(option.value) });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} noValidate>
      <div>
        <h3>Bill From</h3>
        <InputField
          control={control}
          id={"street-address"}
          name={"senderAddressStreet"}
          label={"Street Address"}
          type={"text"}
          validation={validation}
          defaultValue={invoice ? invoice.senderAddress.street : ""}
        />

        <div className="grid-container">
          <div className="c-p">
            <InputField
              control={control}
              id={"senderCountry"}
              name={"senderAddressCountry"}
              label={"Country"}
              type={"text"}
              className="grid-item1"
              validation={validation}
              defaultValue={invoice ? invoice.senderAddress.country : ""}
            />

            <InputField
              control={control}
              id={"senderPostCode"}
              name={"senderAddressPostCode"}
              label={"Post Code"}
              type={"text"}
              className="grid-item2"
              validation={validation}
              defaultValue={invoice ? invoice.senderAddress.postCode : ""}
            />
          </div>
          <InputField
            control={control}
            id={"senderCity"}
            name={"senderAddressCity"}
            label={"City"}
            type={"text"}
            className="grid-item3"
            validation={validation}
            defaultValue={invoice ? invoice.senderAddress.city : ""}
          />
        </div>
      </div>

      <div>
        <InputField
          control={control}
          id={"clientName"}
          name={"clientName"}
          label={"Client's Name"}
          type={"text"}
          validation={validation}
          defaultValue={invoice ? invoice.clientName : ""}
        />

        <InputField
          control={control}
          id={"clientEmail"}
          name={"clientEmail"}
          label={"Client's Email"}
          type={"text"}
          validation={validation}
          defaultValue={invoice ? invoice.clientEmail : ""}
        />

        <div>
          <h3>Bill To</h3>
          <InputField
            control={control}
            id={"clientStreetAddress"}
            name={"clientAddressStreet"}
            label={"Street Address"}
            type={"text"}
            validation={validation}
            defaultValue={invoice ? invoice.clientAddress.street : ""}
          />
          <div className="grid-container">
            <div className="c-p">
              <InputField
                control={control}
                id={"clientCountry"}
                name={"clientAddressCountry"}
                label={"Country"}
                type={"text"}
                validation={validation}
                defaultValue={invoice ? invoice.clientAddress.country : ""}
              />
              <InputField
                control={control}
                id={"clientCity"}
                name={"clientAddressCity"}
                label={"City"}
                type={"text"}
                validation={validation}
                defaultValue={invoice ? invoice.clientAddress.city : ""}
              />
            </div>

            <InputField
              control={control}
              id={"clientPostCode"}
              name={"clientAddressPostCode"}
              label={"Post Code"}
              type={"text"}
              validation={validation}
              defaultValue={invoice ? invoice.clientAddress.postCode : ""}
            />
          </div>
        </div>

        {/* <InputField
          control={control}
          id={"invoiceDate"}
          name={"invoiceDate"}
          label={"Invoice Date"}
          type="date"
          validation={validation}
          defaultValue={
            invoice
              ? new Date(invoice.paymentDue).toISOString().split("T")[0]
              : date
          }
        /> */}
        <Controller
          name={"invoiceDate"}
          control={control}
          defaultValue={watchDate}
          render={({ field }) => (
            <InputField
              id={"invoiceDate"}
              name={"invoiceDate"}
              label={"Invoice Date"}
              type="date"
              {...field}
            />
          )}
        />

        <div>
          <label htmlFor="">Payment Terms</label>
          <Dropdown
            onChange={handleSelection}
            value={selection}
            options={options}
          />
        </div>
        <InputField
          control={control}
          id={"projectDescription"}
          name={"description"}
          label={"Project Description"}
          type={"text"}
          validation={validation}
          defaultValue={invoice ? invoice.description : ""}
        />
      </div>

      <div>
        <h3>Item List</h3>
        {fields.map((field, index) => (
          <Items
            key={field.id}
            index={index}
            field={field}
            remove={remove}
            control={control}
            invoice={invoice ? invoice.items : []}
          />
        ))}
        <button className="add-button" type="button" onClick={() => append({})}>
          Add New Item
        </button>
      </div>
    </form>
  );
};

export default Form;
