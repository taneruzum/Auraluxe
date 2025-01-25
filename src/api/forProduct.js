import axios from "axios";
import API_ENDPOINTS from "./endpoints";


//GET ALL PRODUCTS
export const getAllProducts = async () => {
    try {
        const response = await axios({
            url: API_ENDPOINTS.BASE_URL + API_ENDPOINTS.PRODUCT.ALL,
            method: 'GET',
        });
        return response;

    } catch (error) {
        throw Error(error);
    }
}
