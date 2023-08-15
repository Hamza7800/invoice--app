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
    }),
    createInvoice: builder.mutation({
      query: (data) => ({
        url: INVOICES_URL,
        method: 'POST',
        body: data,
      })
    }),
    updateEditedInvoice: builder.mutation({
      query: (data) => ({
        url: `${ INVOICES_URL }/${ data._id }`,
        method: 'PATCH',
        body: data
      })
    })
    ,
    markedAsPaid: builder.mutation({
      query: (data) => ({
        url: `${ INVOICES_URL }/${ data._id }`,
        method: 'PATCH',
        body: data,
      })
    }),
    deleteInvoice: builder.mutation({
      query: (data) => ({
        url: `${ INVOICES_URL }/${ data._id }`,
        method: 'DELETE',
      })
    })
  })
});

export default invoiceApiSlice;
export const {
  useCreateInvoiceMutation,
  useMarkedAsPaidMutation,
  useGetAllInvoicesQuery,
  useGetInvoiceByIdQuery,
  useDeleteInvoiceMutation,
  useUpdateEditedInvoiceMutation,
} = invoiceApiSlice;