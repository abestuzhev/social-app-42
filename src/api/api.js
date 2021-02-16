import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "01451aad-e25e-4407-9e1a-bc3449eda709"
    }
})


export const userAPI = {
    getUsers: (count = 10, page = 10) => {
        return instance.get(`users?count=${count}&page=${page}`)
            .then(res => {
                return res.data;
            });

    },

    getUser: (userId) => {
        return instance.get(`/profile/${userId}`)
            .then(res => res.data)
    }
}

export const authAPI = {
    me: () => {
        return instance.get("/auth/me")
    }
}