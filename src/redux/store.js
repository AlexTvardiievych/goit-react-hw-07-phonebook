import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./Contacts/contactsSlice";
import filter from "./Contacts/filterSlice";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    logger,
  ],
});
