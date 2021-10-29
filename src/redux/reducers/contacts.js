import { createReducer } from "@reduxjs/toolkit";
// import { ADD_CONTACT, DELETE_CONTACT } from "../types";
import { addContact, deleteContact } from "../actions/contacts";

const initialState = [];
// const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return [...state, action.payload];
//     case DELETE_CONTACT:
//       return state.filter((contact) => action.payload !== contact.id);
//     default:
//       return state;
//   }
// };
const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter((contact) => action.payload !== contact.id),
});

export default contactsReducer;
