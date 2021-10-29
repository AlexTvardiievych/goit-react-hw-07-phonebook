import { createAction } from "@reduxjs/toolkit";
// import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from "../types";
import nextId from "react-id-generator";

// export const addContact = (data) => ({
//   type: ADD_CONTACT,
//   payload: {
//     id: nextId(),
//     name: data.name,
//     number: data.number,
//   },
// });

export const addContact = createAction("contacts/add", (data) => ({
  payload: {
    id: nextId(),
    name: data.name,
    number: data.number,
  },
}));

// export const deleteContact = (id) => ({
//   type: DELETE_CONTACT,
//   payload: id,
// });
export const deleteContact = createAction("contacts/delete");

// export const filterContact = (value) => ({
//   type: FILTER_CONTACT,
//   payload: value,
// });

export const filterContact = createAction("contacts/filter");
