import express from "express";
import { getAllInvoices, createInvoice, updateInvoice, deleteInvoice, getInvoiceById } from '../controllers/invoiceController.js';

const router = express.Router();


router.route('/')
  .get(getAllInvoices)
  .post(createInvoice);

router.route('/:id')
  .get(getInvoiceById)
  .patch(updateInvoice)
  .delete(deleteInvoice);

export default router;