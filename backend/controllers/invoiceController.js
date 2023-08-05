import Invoice from "../models/invoiceModel.js";
import asyncHandler from '../middleware/asyncHandler.js';


// @desc    Fetch all Invoices
// @route   GET '/api/invoice'
// @access  Private
const getAllInvoices = asyncHandler(async (req, res, next) => {
  const invoices = await Invoice.find();
  if (invoices) {
    res.json(invoices);
  } else {
    throw new Error('No Invoices Found');
  }
});


// @desc    Create new Invoice
// @route   POST '/api/invoice/'
// @access  Private
const createInvoice = asyncHandler(async (req, res, next) => {
  const invoice = await Invoice.create(req.body);
  await invoice.save();

  res.json(invoice);
});

// @desc    GET Single Invoice
// @route   GET '/api/invoice/:id'
// @access  Private
const getInvoiceById = asyncHandler(async (req, res, next) => {
  const invoice = await Invoice.findById(req.params.id);
  if (invoice) {
    res.json(invoice);
  } else {
    throw new Error('No Invoice found');
  }
});

// @desc    Update Invoice
// @route   PATCH '/api/invoice/:id'
// @access  Private
const updateInvoice = asyncHandler(async (req, res, next) => {
  const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (invoice) {
    res.status(200).json(invoice);
  } else {
    throw new Error('Invoice Not Found');
  }
});

// @desc    Delete Invoice
// @route   DELETE '/api/invoice/:id'
// @access  Private
const deleteInvoice = asyncHandler(async (req, res, next) => {
  await Invoice.findByIdAndDelete(req.params.id);
  res.json('Invoice deleted successfully');
});

export { getAllInvoices, createInvoice, updateInvoice, deleteInvoice, getInvoiceById };





/*
This code is useless but it works

// const updateInvoice = asyncHandler(async (req, res, next) => {
//   const existingInvoice = await Invoice.findById(req.params.id);
//   const changes = {};

//   if (existingInvoice) {
//     if (req.body.createdAt !== existingInvoice.createdAt) {
//       changes.createdAt = {
//         oldValue: existingInvoice.createdAt,
//         newValue: req.body.createdAt
//       };
//       existingInvoice.createdAt = req.body.createdAt;
//     }
//     if (req.body.paymentDue !== existingInvoice.paymentDue) {
//       changes.paymentDue = {
//         oldValue: existingInvoice.paymentDue,
//         newValue: req.body.paymentDue
//       };
//       existingInvoice.paymentDue = req.body.paymentDue;
//     }
//     if (req.body.paymentDue !== existingInvoice.paymentDue) {
//       changes.paymentDue = {
//         oldValue: existingInvoice.paymentDue,
//         newValue: req.body.paymentDue
//       };
//       existingInvoice.paymentDue = req.body.paymentDue;
//     }

//     if (existingInvoice.description = req.body.description) {
//       changes.description = {
//         oldValue: existingInvoice.description,
//         newValue: req.body.description
//       };
//       existingInvoice.description = req.body.description;
//     }
//     if (existingInvoice.paymentTerms = req.body.paymentTerms) {
//       changes.paymentTerms = {
//         oldValue: existingInvoice.paymentTerms,
//         newValue: req.body.paymentTerms
//       };
//       existingInvoice.paymentTerms = req.body.paymentTerms;
//     }
//     if (existingInvoice.clientName = req.body.clientName) {
//       changes.clientName = {
//         oldValue: existingInvoice.clientName,
//         newValue: req.body.clientName
//       };
//       existingInvoice.clientName = req.body.clientName;
//     }
//     if (existingInvoice.clientEmail = req.body.clientEmail) {
//       changes.clientEmail = {
//         oldValue: existingInvoice.clientEmail,
//         newValue: req.body.clientEmail
//       };
//       existingInvoice.clientEmail = req.body.clientEmail;
//     }
//     if (existingInvoice.status = req.body.status) {
//       changes.status = {
//         oldValue: existingInvoice.status,
//         newValue: req.body.status
//       };
//       existingInvoice.status = req.body.status;
//     }
//     // if (existingInvoice.senderAddress = req.body.senderAddress) {
//     //   changes.senderAddress = {
//     //     oldValue: existingInvoice.senderAddress,
//     //     newValue: req.body.senderAddress
//     //   };
//     //   existingInvoice.senderAddress = req.body.senderAddress;
//     // }
//     // if (existingInvoice.clientAddress = req.body.clientAddress) {
//     //   changes.clientAddress = {
//     //     oldValue: existingInvoice.clientAddress,
//     //     newValue: req.body.clientAddress
//     //   };
//     //   existingInvoice.clientAddress = req.body.clientAddress;
//     // }
//     // if (existingInvoice.items = req.body.items) {
//     //   changes.items = {
//     //     oldValue: existingInvoice.items,
//     //     newValue: req.body.items
//     //   };
//     //   existingInvoice.items = req.body.items;
//     // }
//     if (existingInvoice.total = req.body.total) {
//       changes.total = {
//         oldValue: existingInvoice.total,
//         newValue: req.body.total
//       };
//       existingInvoice.total = req.body.total;
//     }
//     const updatedInvoice = (await existingInvoice.save()).validate();
//     res.json(updatedInvoice);
//   } else {
//     throw new Error('No Invoice Found');
//   }
// });


*/
