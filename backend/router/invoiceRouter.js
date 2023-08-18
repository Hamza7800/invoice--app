import express from "express";
import { getAllInvoices, createInvoice, updateInvoice, deleteInvoice, getInvoiceById } from '../controllers/invoiceController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();


router.route('/')
  .get(protect, getAllInvoices)
  .post(protect, createInvoice);

router.route('/:id')
  .get(protect, getInvoiceById)
  .patch(protect, updateInvoice)
  .delete(protect, deleteInvoice);

router.route('/i/test').get(protect, (req, res, next) => { res.send('<h1>Testing</h1>'); });

export default router;