import { useSelector } from "react-redux";
import { selectTotalPrice } from "./basketSlice";

export const useBasket = () => useSelector((state) => state.basket);
export const useTotalPrice = () => useSelector(selectTotalPrice);