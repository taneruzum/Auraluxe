import axios from 'axios';
import API_ENDPOINTS from '@/api/endpoints';
import { handleAddToBasket, handleDecreaseQuantity, handleIncreaseQuantity, handleSetBasket } from '@/lib/features/basket/actions';
import Cookies from "js-cookie";

//Params kullanımı
// await axios.post(
//     'https://example.com/api/resource',
//     { dataField: "value" }, // Body'ye eklenen veri
//     {
//         params: { queryParam: "example" }, // URL sorgu parametreleri
//         headers: { Authorization: `Bearer ${token}` }
//     }
// );

//Backend -> Veritabanına kaydetmesi için kullanılan fonksiyon
export const handleAddToBasketBackend = async (product) => {
    const token = Cookies.get('AuraluxeUserToken');
    try {
        const response = await axios.post(
            `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.CART.ADD}`,
            {
                productId: product._id,
                quantity: 1,
            }, // Bu kısım body'yi temsil eder
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (response.status === 200) {
            handleAddToBasket(product);
        } else {
            throw new Error('Ürün sepete eklenemedi.');
        }
    } catch (error) {
        console.error(error);
    }
};
// Backend -> Ürün miktarını artırmak için kullanılan fonksiyon
export const handleIncreaseQuantityBackend = async (productId) => {
    const token = Cookies.get('AuraluxeUserToken');
    try {
        const response = await axios.post(
            `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.CART.ADD}`,
            {
                productId,
                quantity: 1,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (response.status !== 200) {
            throw new Error('Ürün miktarı artırılamadı.');
        }
    } catch (error) {
        console.error(error);
    }
};

// Backend -> Ürünü miktarını azaltmak için kullanılan fonksiyon
export const handleDecrementQuantityBackend = async (productId) => {
    const token = Cookies.get('AuraluxeUserToken');
    try {
        const response = await axios.delete(
            `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.CART.DEC}`,
            { productId },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (response.status !== 200) {
            throw new Error('Ürün miktarı azaltılamadı.');
        }
    } catch (error) {
        console.error(error);
    }
};



// Backend -> Ürünü sepetten kaldırmak için kullanılan fonksiyon
export const handleZeroQuantityBackend = async (productId) => {
    const token = Cookies.get('AuraluxeUserToken');
    try {
        const response = await axios.delete(
            `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.CART.REMOVE}`,
            {
                data: { productId },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (response.status !== 200) {
            throw new Error('Ürün miktarı azaltılamadı.');
        }
    } catch (error) {
        console.error('Ürün miktarı azaltılamadı:', error);
    }
};


//Backend -> Kullanıcıya ait sepeti getirmesi için kullanılan fonksiyon
export const fetchAndSetBasketData = async (userId) => {
    const token = Cookies.get('AuraluxeUserToken');
    try {
        const response = await axios.get(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.CART.GET}`,
            {
                params: { userId },
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        console.log("Getirilen Sepet Verisi:", response)
        handleSetBasket(response.data.items);
    } catch (error) {
        console.log(error);
        throw new Error('Sepet verileri alınamadı.');
    }
};

//Backend -> Veritabanından silmesi için kullanılan fonksiyon