import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch, ThunkApiConfig } from "../store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export interface extraArgument {
//   api: unknown;
// }

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const createAppAsyncThunk = createAsyncThunk.withTypes<ThunkApiConfig>();
