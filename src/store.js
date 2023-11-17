import { legacy_createStore as createStore } from "redux";
import invoiceReducer from "./reducer";

const store = createStore(invoiceReducer);

export default store;
