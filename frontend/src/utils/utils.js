
function generateRandomNumber () {
  return Math.floor(Math.random() * 10000);
}

function generateRandomPrefix () {
  const prefixes = [ "RT", "ID", "UN", "PX", "KEY" ]; // List of possible prefixes
  const randomIndex = Math.floor(Math.random() * prefixes.length);
  return prefixes[ randomIndex ];
}

function generateUniqueId () {
  const randomPrefix = generateRandomPrefix();
  const randomNumber = generateRandomNumber();
  return `#${ randomPrefix }${ randomNumber }`;
}

export const generateFilledData = (formData, inputFieldsValues, status, customId) => {
  return {
    ...formData,
    paymentDue: inputFieldsValues.invoiceDate,
    description: inputFieldsValues.description,
    clientName: inputFieldsValues.clientName,
    clientEmail: inputFieldsValues.clientEmail,
    senderAddress: {
      street: inputFieldsValues.senderAddressStreet,
      city: inputFieldsValues.senderAddressCity,
      postCode: inputFieldsValues.senderAddressPostCode,
      country: inputFieldsValues.senderAddressCountry,
    },
    clientAddress: {
      street: inputFieldsValues.clientAddressStreet,
      city: inputFieldsValues.clientAddressCity,
      postCode: inputFieldsValues.clientAddressPostCode,
      country: inputFieldsValues.clientAddressCountry,
    },
    paymentTerms: 1,
    items: inputFieldsValues.items,
    status: status,
    customId: customId,
    total: 0,
  };
};



export default generateUniqueId;