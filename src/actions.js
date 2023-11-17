import {
  ADD_INVOICE,
  EDIT_INVOICE,
  DELETE_INVOICE,
  SET_SELECTED_INVOICE_ID,
} from "./actionTypes";

export const addInvoice = (invoice) => ({
  type: ADD_INVOICE,
  payload: invoice,
});

export const deleteInvoice = (id) => ({
  type: DELETE_INVOICE,
  payload: id,
});

export const editInvoice = (invoice) => ({
  type: EDIT_INVOICE,
  payload: { id: invoice.id, ...invoice },
});

export const setSelectedInvoiceId = (id) => ({
  type: SET_SELECTED_INVOICE_ID,
  payload: { id },
});
