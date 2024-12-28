import axios from "axios";
import API_ENDPOINTS from "./endpoints";

//USER REGISTER REQUEST
export const UserRegisterRequest = async (data) => {
    try {
        const response = await axios({
            url: API_ENDPOINTS.BASE_URL + API_ENDPOINTS.USERS.REGISTER,
            method: 'POST',
            data: {
                name: data.username,
                email: data.email,
                password: data.password,
            },
        });
        return response;

    } catch (error) {
        throw Error(error);
    }
}


//USER LOGIN REQUEST
export const UserLoginRequest = async (data) => {
    try {
        const response = await axios({
            url: API_ENDPOINTS.BASE_URL + API_ENDPOINTS.USERS.LOGIN,
            method: 'POST',
            data,
        });
        return response;

    } catch (error) {
        throw Error(error);
    }
}