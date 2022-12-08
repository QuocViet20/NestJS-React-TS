import { Appdispatch, RootState } from "../../store";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<Appdispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
