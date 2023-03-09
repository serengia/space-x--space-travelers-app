import { configureStore } from "@reduxjs/toolkit";
import missionsSlice from "./missions/missionsSlice";
import rocketsSlice from "./rockets/rocketsSlice";

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
    missions: missionsSlice,
  },
});

export default store;
