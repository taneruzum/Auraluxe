import { store } from "@/lib/store";
import { setUser } from "./userSlice";

export const setCurrentAccount = (account) => {
    store.dispatch(setUser(account));
}