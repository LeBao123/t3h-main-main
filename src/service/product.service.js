import api from "../api";

export const get = async (limit,skip)=>{
    const url = `/v1/e04f3fcd-4aa8-4ca4-9378-9709a978ad7d`;    
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