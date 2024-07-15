import { configureStore } from "@reduxjs/toolkit";
import clockSlice from "./slices/clockSlice";

export default configureStore({
  reducer: {
    clock: clockSlice,
  },
});
