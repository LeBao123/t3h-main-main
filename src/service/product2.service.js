import api2 from "../api2";

export const get = async (limit,skip)=>{
    const url = `v1/36e55807-4cd7-4753-addd-d2cee0bd8a07`;    
    try { 
        const rs = await api2.get(url);
        return rs.data;
    } catch (error) {
        return {
            products1:[],
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
