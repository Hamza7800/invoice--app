import { forwardRef } from "react";
import { findInputError, isFormInvalid } from "../utils/errors";
import { useFormContext, useWatch } from "react-hook-form";

const InputField = forwardRef(({ validation, ...args }, ref) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, args.name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <div>
      <div>
        <label htmlFor={args.id}>
          {args.label}
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </label>
      </div>
      <input
        ref={ref}
        {...args}
        autoComplete="off"
        {...register(args.name, validation)}
      />
    </div>
  );
});

const InputError = ({ message }) => {
  return <span>{message}</span>;
};

export default InputField;
