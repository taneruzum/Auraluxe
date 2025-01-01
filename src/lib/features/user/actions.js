import { store } from "@/lib/store";
import { login, logout } from "./userSlice";

export const userLogin = (account) => {
    // Kullanıcı bilgilerini Redux store'a kaydet
    store.dispatch(login(account));

    // Kullanıcı bilgilerini localStorage'a kaydet
    localStorage.setItem('userSession', JSON.stringify(account));
}

export const userLogout = () => {
    // Kullanıcı bilgilerini Redux store'dan kaldır
    store.dispatch(logout());
    
    // Kullanıcı bilgilerini localStorage'dan kaldır
    localStorage.removeItem('userSession');
}