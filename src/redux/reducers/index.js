import { combineReducers } from "redux";

import filterReducer from "./filter";
import contactsReducer from "./contacts";

export const reducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
