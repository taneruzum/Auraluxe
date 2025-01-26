import { useSelector } from "react-redux";

export const useBasket = () => useSelector((state) => state.basket);
export const useTotalPrice = () => useSelector((state) => state.basket.totalPrice);
