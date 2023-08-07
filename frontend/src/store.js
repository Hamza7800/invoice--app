import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';
import invoiceSliceReducer from './slices/invoiceSlice';


const store = configureStore({
  reducer: {
    [ apiSlice.reducerPath ]: apiSlice.reducer,
    invoices: invoiceSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
});



export default store;