import { v4 as uuidv4 } from "uuid";
import types from "./types";

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContact = (conactId) => ({
  type: types.DELETE,
  payload: conactId,
});

const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});
