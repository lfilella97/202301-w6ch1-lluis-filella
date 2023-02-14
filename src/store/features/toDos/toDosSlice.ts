import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import mookApiResponse from "../../toDos";

const { toDos } = mookApiResponse;

const toDosSlice = createSlice({
  name: "toDos",
  initialState: toDos,
  reducers: {
    loadToDos: (currentToDos) => [...currentToDos],
    removeToDo: (currentToDos, action: PayloadAction<number>) =>
      currentToDos.filter((ToDo) => ToDo.id !== action.payload),
    toggleToDoDoneness: (currentToDos, action: PayloadAction<number>) =>
      currentToDos.map((ToDo) => ({
        ...ToDo,
        isDone: ToDo.id === action.payload ? !ToDo.isDone : ToDo.isDone,
      })),
  },
});

export const toDosReducer = toDosSlice.reducer;

export const { loadToDos, removeToDo, toggleToDoDoneness } = toDosSlice.actions;
