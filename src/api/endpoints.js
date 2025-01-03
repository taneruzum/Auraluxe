
const API_ENDPOINTS = {
    BASE_URL: import.meta.env.VITE_API_BASE_URL,
    USERS: {
        LOGIN: '/api/auth/login',
        REGISTER: '/api/auth/register',
        UPDATE: '/api/auth/update',
        //DELETE: '/api/auth/delete',
    },
    // ADMIN: {
    //     LOGIN: '/admin/login',
    //     REGISTER: '/admin/register',
    //     GET_ADMIN: '/admin',
    //     UPDATE_ADMIN: '/admin',
    //     DELETE_ADMIN: '/admin',
    // }
};

export default API_ENDPOINTS;
