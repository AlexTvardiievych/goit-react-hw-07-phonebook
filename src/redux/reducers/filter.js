import { createReducer } from "@reduxjs/toolkit";
import { filterContact } from "../actions/contacts";

const filterReducer = createReducer("", {
  [filterContact]: (state, action) => action.payload,
});

export default filterReducer;
