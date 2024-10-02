import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../reducer/productsSlice";

interface AnyErrorType {
  message: string;
}

const store = configureStore({
  reducer: productsSlice,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkApiConfig = {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: AnyErrorType;
};
export { store };
