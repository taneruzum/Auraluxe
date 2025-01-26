import { store } from "@/lib/store";
import { addToBasket, increaseQuantity, decreaseQuantity } from "./basketSlice";

export const handleAddToBasket = (product) => {
    store.dispatch(addToBasket(product));
};

export const handleIncreaseQuantity = (productId) => {
    store.dispatch(increaseQuantity(productId));
};

export const handleDecreaseQuantity = (productId) => {
    store.dispatch(decreaseQuantity(productId));
};