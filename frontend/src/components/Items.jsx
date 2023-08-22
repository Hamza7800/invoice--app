import { forwardRef, useEffect } from "react";
import deleteIcon from "../assets/icon-delete.svg";
import { Controller, useFormContext, useWatch } from "react-hook-form";

function Items({ index, field, remove, control, invoice }) {
  const { setValue } = useFormContext();

  const items = useWatch({
    control,
    name: "items",
    defaultValue: invoice ? invoice : [],
  });

  const calculateItemTotal = (item) => {
    const qty = parseFloat(item?.quantity) || 0;
    const price = parseFloat(item?.price) || 0;
    return qty * price;
  };

  const currentItem = items[index];
  const itemTotal = calculateItemTotal(currentItem);

  useEffect(() => {
    setValue(`items[${index}].total`, itemTotal);
  }, [itemTotal, index, setValue]);

  return (
    <div className="items-add">
      <Controller
        name={`items[${index}].name`}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputField
            id={`item-name-${index}`}
            name={`item-name-${index}`}
            label="Item Name"
            type="text"
            // defaultValue={invoice ? invoice[index].name : ""}
            {...field}
          />
        )}
      />
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Controller
          name={`items[${index}].quantity`}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <InputField
              id={"qty"}
              name={"quantity"}
              label={"Quantity"}
              type={"number"}
              min={0}
              {...field}
            />
          )}
        />
        <Controller
          name={`items[${index}].price`}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <InputField
              id={"item-price"}
              name={"price"}
              label={"Price"}
              type={"number"}
              min={0}
              {...field}
            />
          )}
        />
        <Controller
          name={`items[${index}].total`}
          control={control}
          defaultValue={itemTotal}
          render={({ field }) => (
            <InputField
              id={"total"}
              name={"total"}
              label={"Total"}
              type={"text"}
              disabled
              {...field}
            />
          )}
        />

        <div
          style={{
            background: "transparent",
            border: 0,
            cursor: "pointer",
          }}
          onClick={() => remove(index)}
        >
          <img src={deleteIcon} alt="remove-item" />
        </div>
      </div>
    </div>
  );
}

const InputField = forwardRef(({ name, label, type, ...rest }, ref) => {
  // const {  } = useController({
  //   name,
  //   defaultValue: "",
  // });

  return (
    <div className="input-field">
      <label>{label}</label>
      <input ref={ref} type={type} {...rest} />
    </div>
  );
});

export { InputField };

export default Items;
