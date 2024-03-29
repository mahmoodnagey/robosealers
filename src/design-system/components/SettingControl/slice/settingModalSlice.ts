import { createSlice } from "@reduxjs/toolkit";

export interface MenuState {
  status: boolean;
}

const initialState: MenuState = {
  status: false,
};

export const settingModalSlice = createSlice({
  name: "settingModal",
  initialState,
  reducers: {
    closeSettingModal: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.status = false;
    },
    openSettingModal: (state) => {
      state.status = true;
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const { closeSettingModal, openSettingModal } =
  settingModalSlice.actions;

export default settingModalSlice.reducer;
