import api from "../api";

export const get = async (limit,skip)=>{
    const url = `v1/304497f1-e61c-4377-b347-1ce794a1acc3`;    
    // \public\data.json
    // products?limit=${limit}&skip=${skip}
    try { 
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return {
            products:[],
            total:100,
            limit:30,
            skip:0
        };
    }  
}
export const post = (product)=>{    

}

export const put = (product)=>{

}

export const deleteProduct = (product)=>{

}