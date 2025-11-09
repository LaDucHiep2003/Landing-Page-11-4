import {get, patch, post} from "../utils/request";

export const getBrands = async () => {
    // const filteredParams = Object.fromEntries(
    //     Object.entries(params).filter(([_, value]) => value !== null && value !== undefined && value !== "")
    // );
    // const query = new URLSearchParams(filteredParams).toString();
    const result = await get(`brands`);
    return result;
}