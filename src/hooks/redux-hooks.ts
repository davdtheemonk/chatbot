import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
