import { createSlice } from "@reduxjs/toolkit";

const isDesktop = () => {
  return window.innerWidth > 900;
};

const uiSlice = createSlice({
  name: "ui",
  initialState: { drawerIsOpen: false, mainIsOpen: false, modalIsOpen: false },
  reducers: {
    toggleDrawer: (state) => {
      state.drawerIsOpen = !state.drawerIsOpen;
    },
    toggleMain(state) {
      state.mainIsOpen = !state.mainIsOpen;
    },
    toggleModel(state) {
      state.modalIsOpen = !state.modalIsOpen;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
