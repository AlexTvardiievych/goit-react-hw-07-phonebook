import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "../actions/contacts";

const initialState = [];

const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter((contact) => action.payload !== contact.id),
});

export default contactsReducer;
