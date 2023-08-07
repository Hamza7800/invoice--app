import { INVOICES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

const invoiceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllInvoices: builder.query({
      query: () => ({
        url: INVOICES_URL
      }),
      keepUnusedDataFor: 5
    }),
    getInvoiceById: builder.query({
      query: (invoiceId) => ({
        url: `${ INVOICES_URL }/${ invoiceId }`
      }),
      keepUnusedDataFor: 5
    })
  })
});

export default invoiceApiSlice;
export const { useGetAllInvoicesQuery, useGetInvoiceByIdQuery } = invoiceApiSlice;