import { createAction } from "@reduxjs/toolkit";
import nextId from "react-id-generator";

export const addContact = createAction("contacts/add", (data) => ({
  payload: {
    id: nextId(),
    name: data.name,
    number: data.number,
  },
}));

export const deleteContact = createAction("contacts/delete");

export const filterContact = createAction("contacts/filter");
