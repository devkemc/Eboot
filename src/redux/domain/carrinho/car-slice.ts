import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CarrinhoState} from "./types";
import {RootState} from "../../root/store";

const initialState: CarrinhoState = {
  carrinhoId: 0,
  valorTotalCarrinho: 0,
  itensCarrinho: []
}
export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setCar: (state, action: PayloadAction<CarrinhoState>) => {
      state.carrinhoId = action.payload.carrinhoId;
      state.valorTotalCarrinho = action.payload.valorTotalCarrinho;
      state.itensCarrinho = action.payload.itensCarrinho;
    },
  }
});

export const selectCar = (state: RootState) => state.car
export const {setCar} = carSlice.actions;