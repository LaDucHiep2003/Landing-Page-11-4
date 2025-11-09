import { get, patch, post, del } from "../utils/request";

export const login = async (option) =>{
    const result = await post(`auth/login`, option);
    return result;
}