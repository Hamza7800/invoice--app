const date = new Date().toLocaleDateString(undefined, {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const invoiceData = {
  customId: "",
  createdAt: date,
  paymentDue: new Date().toISOString().substr(0, 10),
  description: "",
  paymentTerms: 1,
  clientName: "",
  clientEmail: "",
  status: "",
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  items: [],
  total: 0,
};


export const isValidInput = {
  // allFieldsAreValid: true,
  customId: true,
  createdAt: true,
  paymentDue: true,
  description: true,
  paymentTerms: true,
  clientName: true,
  clientEmail: true,
  status: true,
  senderAddress: {
    street: true,
    city: true,
    postCode: true,
    country: true,
  },
  clientAddress: {
    street: true,
    city: true,
    postCode: true,
    country: true,
  },
  items: [],
  total: true,
};