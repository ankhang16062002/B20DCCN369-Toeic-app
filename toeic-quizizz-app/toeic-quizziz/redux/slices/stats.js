import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberCorrect: null,
  totalQuestion: null,
};

const reducers = {
  SetNumberCorrect(state, action) {
    state.numberCorrect = action.payload;
  },
  SetTotalQuestion(state, action) {
    state.totalQuestion = action.payload;
  },
  ResetStats(state) {
    state.numberCorrect = null;
    state.totalQuestion = null;
  },
};

const statsSlice = createSlice({ name: "stats", initialState, reducers });

export const { SetNumberCorrect, SetTotalQuestion, ResetStats } =
  statsSlice.actions;

export default statsSlice.reducer;
