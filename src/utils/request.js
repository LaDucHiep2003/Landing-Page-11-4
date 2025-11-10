import Cookies from "js-cookie";

const API_DOMAIN = "http://103.163.118.212:30836/api/"

const getToken = () => {
    return Cookies.get('token');
};

export const get = async (patch) => {
    const response = await fetch(API_DOMAIN + patch, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            ...(getToken() && { Authorization: `Bearer ${getToken()}` }),
        },
    });
    const result = response.json()
    return result
}

export const post = async (patch, option) => {
    const response = await fetch(API_DOMAIN + patch, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...(getToken() && { Authorization: `Bearer ${getToken()}` }),
        },
        body: JSON.stringify(option)
    });
    const result = response.json()
    return result
}
export const del = async (patch) => {
    const response = await fetch(API_DOMAIN + patch, {
        method: "DELETE",
        headers:{
            ...(getToken() && { Authorization: `Bearer ${getToken()}` }),
        }
    });
    const result = response.json()
    return result
}

export const patch = async (patch, option) => {
    const response = await fetch(API_DOMAIN + patch, {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...(getToken() && { Authorization: `Bearer ${getToken()}` }),
        },
        body: JSON.stringify(option)
    });
    const result = await response.json()
    return result
}