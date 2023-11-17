import {
  ADD_INVOICE,
  EDIT_INVOICE,
  DELETE_INVOICE,
  SET_SELECTED_INVOICE_ID,
} from "./actionTypes";

const initialState = {
  invoices: [],
  selectedInvoiceId: null,
};

const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INVOICE:
      return {
        ...state,
        invoices: [...state.invoices, action.payload],
        selectedInvoiceId: null,
      };
    case EDIT_INVOICE:
      const updatedInvoices = state.invoices.map((invoice) =>
        invoice.id === action.payload.id
          ? { ...invoice, ...action.payload }
          : invoice
      );
      return {
        ...state,
        invoices: updatedInvoices,
        selectedInvoiceId: action.payload.id,
      };
    case DELETE_INVOICE:
      const filteredInvoices = state.invoices.filter(
        (invoice) => invoice.id !== action.payload
      );
      return {
        ...state,
        invoices: filteredInvoices,
      };
    case SET_SELECTED_INVOICE_ID:
      return {
        ...state,
        selectedInvoiceId: action.payload.id,
      };
    default:
      return state;
  }
};

export default invoiceReducer;
