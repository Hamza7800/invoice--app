import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  invoices: [], // Provide an empty array as the default value
};


const invoiceSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    setInvoices: (state, action) => {
      state.invoices = action.payload;
      localStorage.setItem('invoices', JSON.stringify(action.payload));
    },
    filterInvoices: (state, action) => {
      state.invoices = JSON.parse(localStorage.getItem('invoices'));
      if (action.payload.length === 0 || null) {
        return;
      }

      if (action.payload && Array.isArray(action.payload)) {
        let invoices = JSON.parse(localStorage.getItem('invoices'));
        invoices = invoices.filter(i => action.payload.includes(i.status.toLowerCase()));
        // invoices = invoices.filter(i => i.status.toLowerCase() === action.payload.toLowerCase());
        state.invoices = invoices;
      }

    }
  }
});


export const { setInvoices, filterInvoices } = invoiceSlice.actions;
export default invoiceSlice.reducer;