import { configureStore } from "@reduxjs/toolkit";
import asteroidsReducer from "@/asteroidsSlice";

export const store = configureStore({
  reducer: {
    asteroids: asteroidsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
