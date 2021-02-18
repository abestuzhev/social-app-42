import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "b7df117f-79a9-47fd-b458-3a51a9161c2a"
    }
})


export const userAPI = {

    follow: (userId) => {
        return instance.post(`/follow/${userId}`)
    },

    unFollow: (userId) => {
        return instance.delete(`/follow/${userId}`)
    },

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