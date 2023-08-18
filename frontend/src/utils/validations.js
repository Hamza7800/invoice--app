export const passwordValidation = {
  required: {
    value: true,
    message: "required",
  },
  minLength: {
    value: 6,
    message: "min 6 characters",
  },
};

export const emailValidation = {
  required: {
    value: true,
    message: "required",
  },
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "not valid email",
  },
};