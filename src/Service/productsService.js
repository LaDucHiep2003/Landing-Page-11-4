import {get, patch, post, del} from "@/utils/request";

export const getProducts = async (params) => {
    const filteredParams = Object.fromEntries(
        Object.entries(params).filter(([_, value]) => value !== null && value !== undefined && value !== "")
    );
    const query = new URLSearchParams(filteredParams).toString();
    const result = await get(`products?${query}`);
    return result;
}

export const deleteProducts = async (id) => {
    // const searchParams = new URLSearchParams();
    // for (const key in params) {
    //     const value = params[key];
    //     if (Array.isArray(value)) {
    //         value.forEach(v => searchParams.append(key, v));
    //     } else {
    //         searchParams.append(key, value);
    //     }
    // }
    // const query = searchParams.toString();
    const result = await del(`products?ids=${id}`);
    return result;
}

export const createProduct = async (option) =>{
    const result = await post(`products`, option);
    return result;
}

export const getDetailProduct = async (id) =>{
    const result = await get(`products/${id}`)
    return result;
}
export const editProduct = async (option) =>{
    const result = await patch(`products`, option)
    return result;
}